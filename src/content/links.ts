import {
  AppWindow,
  BadgeCheck,
  BookOpenCheck,
  Bus,
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
    label: "Regulamento visita à Unesp",
    icon: BookOpenCheck,
    href: "https://drive.google.com/file/d/1uh_0STGPca1PCKigCDjyb8-o1I01H8LA/view?usp=sharing",
    color: "#FD7F2C",
  },
  {
    label: "Termo visita à Unesp",
    icon: Bus,
    href: "https://drive.google.com/file/d/1uf-evYQS2g6bL1WqoQTfwYqQs_GdE0FL/view?usp=sharing",
    color: "#FD7F2C",
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
    label: "Enem",
    icon: Wallet,
    href: "https://enem.inep.gov.br/participante/#!/inicial",
    color: "#00ADEE",
  },
];
