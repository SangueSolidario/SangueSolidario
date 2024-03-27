import { Map } from "@/components/map";
import { NavBar } from "@/components/navbar";
import { SelectBlood } from "@/components/select-blood";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Campaign,
  getCampaigns,
  postCampaign,
  postParticipar,
} from "@/services/apiRoutes";
import { loadingStatesCampaigns } from "@/utils/multi-step-states";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format, formatDistance } from "date-fns";
import { CalendarIcon, CirclePlus } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/components/ui/use-toast";
import { ptBR } from "date-fns/locale";

import axios from "axios";
import { useAuth } from "@/contexts/auth";

const campaignSchema = z.object({
  Nome: z.string(),
  DataInicio: z.coerce.date(),
  DataFim: z.date().optional(),
  Descricao: z.string(),
  TiposSanguineoNecessario: z.string(),
  Cidade: z.string(),
});

export type CampaignSchema = z.infer<typeof campaignSchema>;

export function Campaigns() {
  const { user } = useAuth();
  const [showMultiStep, setShowMultiStep] = useState(false);

  const form = useForm<CampaignSchema>({
    resolver: zodResolver(campaignSchema),
  });

  const [selectedCampaignID, setSelectedCampaignID] = useState<string | null>(
    null
  );
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const handleSubmit = useCallback(async (data: CampaignSchema) => {
    setShowMultiStep(true);
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          data.Cidade
        )}&format=json`
      );
      const { lat, lon } = response.data[0];

      await postCampaign({
        Nome: data.Nome,
        DataInicio: date?.from?.toISOString() ?? new Date().toISOString(),
        DataFim: date?.to?.toISOString() ?? new Date().toISOString(),
        Descricao: data.Descricao,
        TiposSanguineoNecessario: [data.TiposSanguineoNecessario],
        Cidade: data.Cidade,
        Coordenadas: {
          lat: lat,
          lon: lon,
        },
        Status: "Ativa",
      }).then((campaign) => {
        setCampaigns((prev) => [...prev, campaign]);
        setTimeout(() => {
          setShowMultiStep(false);
        }, 1500 * loadingStatesCampaigns.length);
      });
    } catch (error) {
      setShowMultiStep(false);
    }
  }, []);

  // const { data, isLoading, status, error } = useQuery({
  //   queryKey: [""],
  //   queryFn: getCampaigns,
  //   retry: 1,
  //   retryDelay: 1000,
  // });

  // if (status === "success") setCampaigns(data as Campaign[]);

  // useEffect(() => {
  //   if (error) {
  //     toast({
  //       variant: "destructive",
  //       title: "Uh oh! Estamos com problemas em carregar as campanhas.",
  //     });
  //   }
  // }, [error]);

  function handleParticipar(id: string) {
    setSelectedCampaignID(id);
    console.log(id);
    if (user)
      postParticipar({ email: user?.mail, id })
        .then(() => {
          toast({
            variant: "default",
            title: "Participação confirmada",
            description: "Você agora está participando da campanha.",
          });
        })
        .catch((error) => {
          toast({
            variant: "destructive",
            title: "Erro ao participar",
            description: error.response.data.mensagem,
          });
        });
  }

  useEffect(() => {
    getCampaigns()
      .then((data) => {
        setCampaigns(data);
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Estamos com problemas em carregar as campanhas.",
        });
      });
  }, []);

  return (
    <div className="overflow-y-hidden h-screen">
      <NavBar />
      {showMultiStep && (
        <Loader
          loadingStates={loadingStatesCampaigns}
          loading={showMultiStep}
          duration={1500}
          loop={false}
        />
      )}
      <div className="container flex flex-1 mx-auto pt-20 md:flex-row space-x-5">
        <aside className="overflow-auto h-[75vh] w-[45vw] px-5">
          <div className="flex flex-wrap items-center justify-center space-y-3 rounded-md h-40 border-dashed border-2 hover:bg-slate-50">
            <Dialog>
              <DialogTrigger className="flex flex-col items-center justify-center">
                <CirclePlus className="text-slate-300" size={50} />
                <span className="mt-2 text-sm text-gray-500">
                  Adicionar nova Campanha
                </span>
              </DialogTrigger>
              <DialogContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <FormField
                      control={form.control}
                      name="Nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Campanha</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome da Campanha" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="Descricao"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Descriação Campanha</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Descriação da Campanha"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="Cidade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Local Campanha</FormLabel>
                          <FormControl>
                            <Input placeholder="Local da Campanha" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="TiposSanguineoNecessario"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipos de Sangue Necessários</FormLabel>
                          <FormControl>
                            <SelectBlood {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="DataInicio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data</FormLabel>
                          <FormControl>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  id="date"
                                  variant={"outline"}
                                  className={cn(
                                    !date && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date?.from ? (
                                    date.to ? (
                                      <>
                                        {format(date.from, "LLL dd, y")} -{" "}
                                        {format(date.to, "LLL dd, y")}
                                      </>
                                    ) : (
                                      format(date.from, "LLL dd, y")
                                    )
                                  ) : (
                                    <span>Selecione uma data</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  initialFocus
                                  mode="range"
                                  defaultMonth={date?.from}
                                  selected={date}
                                  onDayClick={field.onChange}
                                  onSelect={setDate}
                                  numberOfMonths={2}
                                />
                              </PopoverContent>
                            </Popover>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DialogFooter>
                      <Button type="submit">Criar</Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>

          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="mt-5 p-5 space-y-3 border rounded-md h-60 hover:shadow-lg transition duration-300 transform hover:scale-105 group/item"
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-lg">{campaign.Nome}</p>
                <span className="text-green-500 font-bold">
                  {campaign.Status}
                </span>
              </div>
              <div className="space-y-2">
                <span>Tipos Sanguineos:</span>
                <div className="">
                  {campaign.TiposSanguineoNecessario.map((tipo) => (
                    <span className="inline-block pl-1">{tipo}</span>
                  ))}
                </div>
                <p>{campaign.Descricao}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-slate-700">
                  Termina em{" "}
                  <span className="font-bold">
                    {formatDistance(
                      new Date(campaign.DataInicio),
                      new Date(campaign.DataFim),
                      {
                        locale: ptBR,
                      }
                    )}
                    !
                  </span>
                </p>
                <Button
                  className="bg-red-400 font-bold invisible group-hover/item:visible transition-all duration-300 ease-linear hover:bg-red-100 hover:text-black"
                  onClick={() => handleParticipar(campaign.id)}
                >
                  Participar
                </Button>
              </div>
            </div>
          ))}
          {campaigns.length === 0 && (
            <div className="flex items-center justify-center h-60">
              <p className="text-gray-500">Nenhuma campanha encontrada</p>
            </div>
          )}
        </aside>
        <div className="w-screen h-screen z-0">
          <Map selectedCampaignID={selectedCampaignID} campaigns={campaigns} />
        </div>
      </div>
    </div>
  );
}
