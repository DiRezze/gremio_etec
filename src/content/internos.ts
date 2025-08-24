import { Event } from "@/types";
import { Evento } from "@/types/calendarTypes";

export const internos: Evento[] = [
  {
    nome: "Visita monitorada à Unesp",
    data: "2025-08-20T00:00:00-03:00",
    cor: "#FD7F2C",
  },
];

export const internosFormat: Event[] = [
  {
    id: "1",
    title: "Visita monitorada à Unesp",
    description: "", // opcional, pode remover se quiser
    startDate: new Date("2025-08-20T00:00:00-03:00"),
    endDate: new Date("2025-08-20T23:59:59-03:00"), // exemplo: evento de um dia inteiro
    variant: "primary", // ou "success", "danger", etc, conforme sua lógica
  },
];