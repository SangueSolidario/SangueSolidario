import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CampaignSchema } from "@/pages/campaigns";
import { ControllerRenderProps } from "react-hook-form";
import { FamilySchema } from "./new-family-member";
import { PerfilSchema } from "@/pages/perfil";

enum BloodType {
  A = "A",
  B = "B",
  AB = "AB",
  O = "O",
}

export function SelectBlood(
  field: ControllerRenderProps<CampaignSchema | FamilySchema | PerfilSchema>
) {
  return (
    <Select onValueChange={field.onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Tipos de Sangue" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.values(BloodType).map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
