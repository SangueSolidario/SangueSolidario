import { NavBar } from "@/components/navbar";
import { Map } from "@/components/map";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

export default function Campanhas() {
  const campanhas = [
    {
      ID: "1",
      Nome: "Campanha 1",
      DataInicio: "2017-01-01",
      DataFim: "2017-01-31",
      Imagem: "Url para Blob Storage",
      Descricao: "Campanha 1",
      TiposSanguineoNecessario: ["A+", "B+"],
      Local: "Local 1",
      Status: "Ativa",
    },
    {
      ID: "2",
      Nome: "Campanha 2",
      DataInicio: "2017-02-01",
      DataFim: "2017-02-28",
      Imagem: "Url para Blob Storage",
      Descricao: "Campanha 2",
      TiposSanguineoNecessario: ["A+", "B+"],
      Local: "Local 2",
      Status: "Ativa",
    },
    {
      ID: "3",
      Nome: "Campanha 3",
      DataInicio: "2017-03-01",
      DataFim: "2017-03-31",
      Imagem: "Url para Blob Storage",
      Descricao: "Campanha 3",
      TiposSanguineoNecessario: ["A+", "B+"],
      Local: "Local 3",
      Status: "Ativa",
    },
    {
      ID: "4",
      Nome: "Campanha 4",
      DataInicio: "2017-04-01",
      DataFim: "2017-04-30",
      Imagem: "Url para Blob Storage",
      Descricao: "Campanha 4",
      TiposSanguineoNecessario: ["A+", "B+"],
      Local: "Local 4",
      Status: "Ativa",
    },
  ];
  return (
    <div className="overflow-y-hidden h-screen">
      <NavBar />
      <div className="container flex flex-1 mx-auto px-5 pt-20 md:flex-row space-x-10">
        <aside className="overflow-auto h-[75vh] w-[45vw]">
          <div className="flex flex-wrap items-center justify-center p-5 space-y-3 rounded-md w-[20vw] h-40 border-dashed border-2">
            <CirclePlus className="text-slate-300" size={50} />
          </div>
          {campanhas.map((campanha) => (
            <div className="mt-5 p-5 space-y-3 border rounded-md w-[20vw] h-60">
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
                <Button className="bg-red-400 font-bold hover:bg-red-100 hover:text-black">
                  Participar
                </Button>
              </div>
            </div>
          ))}
        </aside>
        <div className="w-screen h-screen">
          <Map />
        </div>
      </div>
    </div>
  );
}
