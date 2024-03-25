import { FamilyMemberCard } from "@/components/family-member-card";
import { NavBar } from "@/components/navbar";
import { NewfamilyMember } from "@/components/new-family-member";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
// import { useAuth } from "@/contexts/auth";
import { FamiliarMember, getFamiliarMembers } from "@/services/apiRoutes";
import { useEffect, useState } from "react";

export function Perfil() {
  // const { user } = useAuth();
  const [familiares, setFamiliares] = useState<FamiliarMember[]>([]);

  useEffect(() => {
    getFamiliarMembers({ email: "maria@gmail.com" })
      .then((data) => setFamiliares(data))
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Erro ao encontrar familiares",
          description: "Tente novamente mais tarde.",
        });
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-5">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full bg-slate-200">
            <TabsTrigger className="w-1/2 font-bold" value="account">
              Conta
            </TabsTrigger>
            <TabsTrigger className="w-1/2 font-bold" value="family">
              Familiares
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">Mostrar dados.</TabsContent>
          <TabsContent
            value="family"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[250px]"
          >
            <NewfamilyMember />

            {familiares.map((familiar) => {
              return <FamilyMemberCard key={familiar.id} familiar={familiar} />;
            })}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
