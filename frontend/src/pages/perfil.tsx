import { FamilyMemberCard } from "@/components/family-member-card";
import { NavBar } from "@/components/navbar";
import { NewfamilyMember } from "@/components/new-family-member";
import { SelectBlood } from "@/components/select-blood";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/auth";
import { cn } from "@/lib/utils";
import {
  FamiliarMember,
  getFamiliarMembers,
  postDoadorForm,
} from "@/services/apiRoutes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

const perfilSchema = z.object({
  Nome: z.string(),
  email: z.string().email(),
  TipoSanguineo: z.string(),
  dataNascimento: z.date(),
});

export type PerfilSchema = z.infer<typeof perfilSchema>;

export function Perfil() {
  const { user } = useAuth();
  const [familiares, setFamiliares] = useState<FamiliarMember[]>([]);
  const [date, setDate] = useState<Date | null>(null);

  const form = useForm<PerfilSchema>({
    resolver: zodResolver(perfilSchema),
    defaultValues: {
      Nome: user?.displayName,
      email: user?.mail,
    },
  });

  const { data, status, isLoading, error } = useQuery<FamiliarMember[]>({
    queryKey: ["familiares", user?.mail],
    queryFn: () => getFamiliarMembers({ email: user?.mail ?? "" }),
  });

  useEffect(() => {
    if (status === "success" && familiares.length === 0) {
      setFamiliares(data as FamiliarMember[]);
    }
  }, [status, data, familiares]);

  if (error) {
    toast({
      variant: "destructive",
      title: "Erro ao encontrar familiares",
      description: "Tente novamente mais tarde.",
    });
  }

  function handleSubmit(data: PerfilSchema) {
    postDoadorForm(data).then((res) => {
      toast({
        variant: "default",
        title: "Perfil atualizado",
        description: "As informações foram atualizadas com sucesso.",
      });
    });
  }

  return (
    <div>
      <NavBar />
      <Spinner loading={isLoading} />
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
          <TabsContent value="account">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="Nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="TipoSanguineo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo Sanguineo</FormLabel>
                      <FormControl>
                        <SelectBlood {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dataNascimento"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Data Nascimento</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Selecione uma Data</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onDayClick={setDate}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="bg-red-500 hover:bg-red-600">Guardar</Button>
              </form>
            </Form>
          </TabsContent>
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
