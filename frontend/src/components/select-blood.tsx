import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CampaignSchema } from "@/pages/campaigns";
import { ControllerRenderProps } from "react-hook-form";

enum BloodType {
  A = "A",
  B = "B",
  AB = "AB",
  O = "O",
}

export function SelectBlood(field: ControllerRenderProps<CampaignSchema>) {
  return (
    <Select onValueChange={field.onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Tipo de Sangue" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tipos de Sangue</SelectLabel>
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
