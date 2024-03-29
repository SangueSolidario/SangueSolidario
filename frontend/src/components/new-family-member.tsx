import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SelectBlood } from "./select-blood";
import { postFamiliarMember } from "@/services/apiRoutes";
import { useAuth } from "@/contexts/auth";
import { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { loadingStatesPerfil } from "@/utils/multi-step-states";

const familySchema = z.object({
  NomeFamiliar: z.string(),
  TipoSanguineo: z.string(),
  Parentesco: z.string(),
});

export type FamilySchema = z.infer<typeof familySchema>;

export function NewfamilyMember() {
  const { user } = useAuth();
  const [showMultiStep, setShowMultiStep] = useState(false);

  const form = useForm<FamilySchema>({
    resolver: zodResolver(familySchema),
  });
  const handleSubmit = (data: FamilySchema) => {
    if (user)
      postFamiliarMember({
        email_doador: user.mail,
        NomeFamiliar: data.NomeFamiliar,
        Parentesco: data.Parentesco,
        TipoSanguineo: data.TipoSanguineo,
      }).then(() => {
        setShowMultiStep(true);
        setTimeout(() => {
          setShowMultiStep(false);
        }, 1500 * loadingStatesPerfil.length);
      });
  };
  return (
    <Dialog>
      {showMultiStep && (
        <Loader
          loadingStates={loadingStatesPerfil}
          loading={showMultiStep}
          duration={1500}
          loop={false}
        />
      )}
      <DialogTrigger className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md hover:bg-slate-50">
        <PlusCircleIcon className="text-gray-400" size={60} />
        <span className="mt-2 text-sm text-gray-500">Adicionar Familiar</span>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="NomeFamiliar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Familiar</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome da Campanha" {...field} />
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
                  <FormLabel>Tipo Sangue</FormLabel>
                  <FormControl>
                    <SelectBlood {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Parentesco"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parentesco</FormLabel>
                  <FormControl>
                    <Input placeholder="Grau de Parentesco" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" className="bg-red-500 hover:bg-red-600">
                Guardar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
