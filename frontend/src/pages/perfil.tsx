import { FamilyMemberCard } from "@/components/family-member-card";
import { NavBar } from "@/components/navbar";
import { NewfamilyMember } from "@/components/new-family-member";

export function Perfil() {
  const familiares = [
    {
      ID: "1",
      NomeFamiliar: "João",
      TipoSanguineo: "A+",
      Parentesco: "Irmão",
    },
    {
      ID: "1",
      NomeFamiliar: "Gonçalo",
      TipoSanguineo: "A+",
      Parentesco: "Pai",
    },
    {
      ID: "1",
      NomeFamiliar: "Tiago",
      TipoSanguineo: "A+",
      Parentesco: "Irmão",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[250px]">
        <NewfamilyMember />

        {familiares.map((familiar) => {
          return <FamilyMemberCard key={familiar.ID} familiar={familiar} />;
        })}
      </div>
    </div>
  );
}
