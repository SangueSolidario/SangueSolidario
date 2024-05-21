import {
  CalendarSearchIcon,
  InfoIcon,
  MapPinnedIcon,
  SaveIcon,
  FolderIcon,
} from "lucide-react";
import { LoadingState } from "@/components/ui/multi-step-loader";

export const loadingStatesCampaigns: LoadingState[] = [
  {
    text: "Verificando elegibilidade",
    icon: InfoIcon,
  },
  {
    text: "Verificando disponibilidade de horário",
    icon: CalendarSearchIcon,
  },
  {
    text: "Registando informações",
    icon: SaveIcon,
  },
  {
    text: "Preparando o local de doação",
    icon: MapPinnedIcon,
  },
];

export const loadingStatesPerfil: LoadingState[] = [
  {
    text: "Verificando dados",
    icon: InfoIcon,
  },
  {
    text: "Verficando espaço de armazenamento",
    icon: FolderIcon,
  },
  {
    text: "Registando informações",
    icon: SaveIcon,
  },
];
