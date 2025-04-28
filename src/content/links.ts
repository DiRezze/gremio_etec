import {
  AppWindow,
  BadgeCheck,
  BookOpenCheck,
  Instagram,
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
    label: "Edital - Interclasse",
    icon: BookOpenCheck,
    href: "https://docs.google.com/document/d/1pQHPUML564ed5j9Hp3CGKWpgpSwi649R/edit?usp=sharing&ouid=111929754273037560206&rtpof=true&sd=true",
    color: "#0F984B",
  },
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
    label: "Isenções Enem",
    icon: Wallet,
    href: "https://enem.inep.gov.br/participante/#!/inicial",
    color: "#00ADEE",
  },
  {
    label: "Simulado Fuvest",
    icon: BadgeCheck,
    href: "https://app.fuvest.br/login",
    color: "#00ADEE",
  },
];
