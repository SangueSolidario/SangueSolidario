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

const familySchema = z.object({
  ID: z.string(),
  NomeFamiliar: z.string(),
  TipoSanguineo: z.string(),
  Parentesco: z.string(),
});

export type FamilySchema = z.infer<typeof familySchema>;

export function NewfamilyMember() {
  const form = useForm<FamilySchema>({
    resolver: zodResolver(familySchema),
  });
  const handleSubmit = (data: FamilySchema) => {
    console.log(data);
  };
  return (
    <Dialog>
      <DialogTrigger className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md hover:bg-slate-50">
        <PlusCircleIcon className="text-gray-400" size={60} />
        <span className="mt-2 text-sm text-gray-500">Adicionar Familiar</span>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="NomeFamiliar"
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
              name="TipoSanguineo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sangue</FormLabel>
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
                    <SelectBlood {...field} />
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
  );
}
