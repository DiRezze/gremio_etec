import {
  AppWindow,
  BadgeCheck,
  BookOpenCheck,
  Bus,
  Instagram,
  ListChecksIcon,
  LucideIcon,
  MessageCircleMoreIcon,
  Wallet,
} from "lucide-react";

interface LinkInterface {
  label: string;
  href: string;
  color: string;
  icon: LucideIcon;
}
export const links: Array<LinkInterface> = [
  {
    label: "Canal no Whatsapp",
    icon: MessageCircleMoreIcon,
    href: "https://whatsapp.com/channel/0029VbAN75H7tkj8RWr4Ij2Q",
    color: "#25D366",
  },
  {
    label: "Página Web",
    icon: AppWindow,
    href: "/",
    color: "#0f70d6",
  },
  {
    label: "Instagram do Grêmio",
    icon: Instagram,
    href: "https://www.instagram.com/ctrlz.2025/",
    color: "#E4405F",
  },
  {
    label: "Enem",
    icon: ListChecksIcon,
    href: "https://enem.inep.gov.br/participante/#!/inicial",
    color: "#00ADEE",
  },
];
