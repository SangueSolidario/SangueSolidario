import { PlusCircleIcon } from "lucide-react";
import React from "react";

export function NewfamilyMember() {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
      <PlusCircleIcon className="text-gray-400" size={60} />
      <span className="mt-2 text-sm text-gray-500">Adicionar Familiar</span>
    </div>
  );
}

export default NewfamilyMember;
