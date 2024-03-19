import { Map } from "@/components/map";
import { NavBar } from "@/components/navbar";
import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SelectBlood } from "@/components/select-blood";
export interface Campaign {
  ID: string;
  Nome: string;
  DataInicio: string;
  DataFim: string;
  Imagem: string;
  Descricao: string;
  coordenadas: {
    latitude: number;
    longigute: number;
  };
  TiposSanguineoNecessario: string[];
  Local: string;
  Status: string;
}

const campaignSchema = z.object({
  Nome: z.string(),
  DataInicio: z.date(),
  DataFim: z.date().optional(),
  Descricao: z.string(),
  coordenadas: z.object({
    latitude: z.number(),
    longigute: z.number(),
  }),
  TiposSanguineoNecessario: z.array(z.string()),
  Local: z.string(),
});

export type CampaignSchema = z.infer<typeof campaignSchema>;

export function Campaigns() {
  const form = useForm<CampaignSchema>({
    resolver: zodResolver(campaignSchema),
  });

  const [selectedCampaignID, setSelectedCampaignID] = useState<string | null>(
    null
  );

  const campanhas: Campaign[] = [
    {
      ID: "1",
      Nome: "Campanha de Teste",
      DataInicio: "2021-12-01",
      DataFim: "2021-12-25",
      Imagem: "https://via.placeholder.com/150",
      Descricao: "Isto é uma campanha de testes por favor respeite",
      coordenadas: {
        latitude: 39.8239,
        longigute: -7.49189,
      },
      TiposSanguineoNecessario: ["A+", "B-", "O+"],
      Local: "Covilhã",
      Status: "Ativa",
    },
    {
      ID: "2",
      Nome: "Campanha de Teste 2",
      DataInicio: "2021-12-01",
      DataFim: "2021-12-25",
      Imagem: "https://via.placeholder.com/150",
      Descricao: "Isto é uma campanha de testes por favor respeite",
      coordenadas: {
        latitude: 38.8239,
        longigute: -7.49189,
      },
      TiposSanguineoNecessario: ["A+", "B-", "O+"],
      Local: "Covilhã",
      Status: "Ativa",
    },
    {
      ID: "3",
      Nome: "Campanha de Teste 3",
      DataInicio: "2021-12-01",
      DataFim: "2021-12-25",
      Imagem: "https://via.placeholder.com/150",
      Descricao: "Isto é uma campanha de testes por favor respeite",
      coordenadas: {
        latitude: 37.8239,
        longigute: -7.49189,
      },
      TiposSanguineoNecessario: ["A+", "B-", "O+"],
      Local: "Covilhã",
      Status: "Ativa",
    },
  ];
  const handleSubmit = (data: CampaignSchema) => {
    console.log(data);
  };

  return (
    <div className="overflow-y-hidden h-screen">
      <NavBar />
      <div className="container flex flex-1 mx-auto pt-20 md:flex-row space-x-5">
        <aside className="overflow-auto h-[75vh] w-[45vw] px-5">
          <div className="flex flex-wrap items-center justify-center space-y-3 rounded-md h-40 border-dashed border-2">
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
                      name="Local"
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
                            <DatePicker {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DialogFooter>
                      <Button type="submit">Submit</Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>

          {campanhas.map((campanha) => (
            <div className="mt-5 p-5 space-y-3 border rounded-md h-60 hover:shadow-lg transition duration-300 transform hover:scale-105">
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
                  Termina em <span className="font-bold">25 dias!</span>
                </p>
                <Button
                  className="bg-red-400 font-bold hover:bg-red-100 hover:text-black"
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
