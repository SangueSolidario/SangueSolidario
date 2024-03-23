import { CheckCheck, FolderHeart } from "lucide-react";
import { LoadingState } from "@/components/ui/multi-step-loader";

// Assuming these icons are components
const CheckCheckIcon = CheckCheck;
const FolderHeartIcon = FolderHeart;

export const loadingStatesCampaigns: LoadingState[] = [
  {
    text: "Buying a condo",
    icon: CheckCheckIcon,
  },
  {
    text: "Travelling in a flight",
    icon: CheckCheckIcon,
  },
  {
    text: "Armazenando dados",
    icon: FolderHeartIcon,
  },
];
