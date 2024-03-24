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
import { Campaign } from "@/services/apiRoutes";
import { loadingStatesCampaigns } from "@/utils/multi-step-states";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format, formatDistance } from "date-fns";
import { CalendarIcon, CirclePlus } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ptBR } from "date-fns/locale";

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
  const [isLoading, setIsLoading] = useState(false);

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

  const campanhas: Campaign[] = [
    {
      ID: "1",
      Nome: "Campanha 1",
      DataInicio: "2022-01-01",
      DataFim: "2022-01-31",
      Imagem: "Url para Blob Storage 1",
      Descricao: "Descrição da Campanha 1",
      TiposSanguineoNecessario: ["A+", "B+"],
      Coordenadas: { lat: "39.8239", lon: "-7.49189" },
      Status: "Ativa",
      Cidade: "Castelo Branco",
    },
    {
      ID: "2",
      Nome: "Campanha 2",
      DataInicio: "2022-02-01",
      DataFim: "2022-02-28",
      Imagem: "Url para Blob Storage 2",
      Descricao: "Descrição da Campanha 2",
      TiposSanguineoNecessario: ["A+", "B+"],
      Coordenadas: { lat: "39.8239", lon: "-7.29189" },
      Status: "Ativa",
      Cidade: "Castelo Branco",
    },
    {
      ID: "3",
      Nome: "Campanha 3",
      DataInicio: "2022-03-01",
      DataFim: "2022-03-31",
      Imagem: "Url para Blob Storage 3",
      Descricao: "Descrição da Campanha 3",
      TiposSanguineoNecessario: ["A+", "B+"],
      Coordenadas: { lat: "39.8239", lon: "-7.19189" },
      Status: "Ativa",
      Cidade: "Castelo Branco",
    },
    {
      ID: "4",
      Nome: "Campanha 4",
      DataInicio: "2022-04-01",
      DataFim: "2022-04-30",
      Imagem: "Url para Blob Storage 4",
      Descricao: "Descrição da Campanha 4",
      TiposSanguineoNecessario: ["A+", "B+"],
      Coordenadas: { lat: "39.8239", lon: "-7.39189" },
      Status: "Ativa",
      Cidade: "Castelo Branco",
    },
    {
      ID: "5",
      Nome: "Campanha 5",
      DataInicio: "2022-05-01",
      DataFim: "2022-05-31",
      Imagem: "Url para Blob Storage 5",
      Descricao: "Descrição da Campanha 5",
      TiposSanguineoNecessario: ["A+", "B+"],
      Coordenadas: { lat: "39.8239", lon: "-7.09189" },
      Status: "Ativa",
      Cidade: "Castelo Branco",
    },
  ];
  const handleSubmit = (data: CampaignSchema) => {
    console.log(data);
    console.log(date);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000 * loadingStatesCampaigns.length);
  };

  return (
    <div className="overflow-y-hidden h-screen">
      <NavBar />
      {isLoading && (
        <Loader
          loadingStates={loadingStatesCampaigns}
          loading={isLoading}
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

          {campanhas.map((campanha) => (
            <div className="mt-5 p-5 space-y-3 border rounded-md h-60 hover:shadow-lg transition duration-300 transform hover:scale-105 group/item">
              <div className="flex items-center justify-between">
                <p className="font-bold text-lg">{campanha.Nome}</p>
                <span className="text-green-500 font-bold">
                  {campanha.Status}
                </span>
              </div>
              <div className="space-y-2">
                <span>Tipos Sanguineos:</span>
                <div className="">
                  {campanha.TiposSanguineoNecessario.map((tipo) => (
                    <span className="inline-block pl-1">{tipo}</span>
                  ))}
                </div>
                <p>Isto é uma campanha de testes por favor respeite</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-slate-700">
                  Termina em{" "}
                  <span className="font-bold">
                    {formatDistance(
                      new Date(campanha.DataInicio),
                      new Date(campanha.DataFim),
                      {
                        locale: ptBR,
                      }
                    )}
                    !
                  </span>
                </p>
                <Button
                  className="bg-red-400 font-bold invisible group-hover/item:visible transition-all duration-300 ease-linear hover:bg-red-100 hover:text-black"
                  onClick={() => setSelectedCampaignID(campanha.ID)}
                >
                  Participar
                </Button>
              </div>
            </div>
          ))}
        </aside>
        <div className="w-screen h-screen z-0">
          <Map selectedCampaignID={selectedCampaignID} campaigns={campanhas} />
        </div>
      </div>
    </div>
  );
}
