import { User2, X } from "lucide-react";
import React from "react";

interface FamiliarMemberCardProps {
  familiar: {
    ID: string;
    ID_Doador: string;
    NomeFamiliar: string;
    TipoSanguineo: string;
  };
}

export function FamilyMemberCard({ familiar }: FamiliarMemberCardProps) {
  return (
    <div className="flex flex-col justify-center items-center border border-gray-300 rounded-md p-4 bg-white shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
      <User2 className="text-gray-400" size={60} />
      <h1 className="text-lg font-semibold mt-2">{familiar.NomeFamiliar}</h1>
      <p className="text-sm text-gray-500">{`Tipo Sanguíneo: ${familiar.TipoSanguineo}`}</p>
      <button className="text-red-500 hover:text-red-700 focus:outline-none flex items-center mt-2">
        <X className="text-red-500" size={20} />
        <span>Excluir</span>
      </button>
    </div>
  );
}
