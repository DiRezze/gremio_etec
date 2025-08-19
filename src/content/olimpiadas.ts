import { Event } from "@/types";
import { Evento } from "@/types/calendarTypes";

export const olimpiadas: Evento[] = [
  // OBMEP
  {
    nome: "OBMEP - Prova da 1ª fase",
    data: "2025-06-03T00:00:00-03:00",
    cor: "#53c92e",
  },
  {
    nome: "OBMEP - Divulgação dos classificados para a 2ª fase",
    data: "2025-08-01T00:00:00-03:00",
    cor: "#53c92e",
  },
  {
    nome: "OBMEP - Divulgação dos locais de prova",
    data: "2025-08-28T00:00:00-03:00",
    cor: "#53c92e",
  },
  {
    nome: "OBMEP - Prova da 2ª fase",
    data: "2025-10-25T00:00:00-03:00",
    cor: "#53c92e",
  },
  {
    nome: "OBMEP - Divulgação dos premiados",
    data: "2025-12-22T00:00:00-03:00",
    cor: "#53c92e",
  },
  // OBA
  {
    nome: "OBA - Data de realização da prova",
    data: "2025-05-16T00:00:00-03:00",
    cor: "#ff6200",
  },
  {
    nome: "OBA - Data de divulgação dos gabaritos",
    data: "2025-05-18T00:00:00-03:00",
    cor: "#ff6200",
  },
  // OLITEF
  {
    nome: "OLITEF - Realização da prova",
    data: "2025-09-09T00:00:00-03:00",
    cor: "#00ffe1",
  },
  {
    nome: "OLITEF - Resultados da Olímpiada",
    data: "2025-10-30T00:00:00-03:00",
    cor: "#00ffe1",
  },
  {
    nome: "OBGP - Prazo de inscrição",
    data: "2025-04-30T00:00:00-03:00",
    cor: "#0F6F1C",
  },
  {
    nome: "OBGP - Avaliação",
    data: "2025-05-07T00:00:00-03:00",
    cor: "#0F6F1C",
  },
  {
    nome: "OBGP - Divulgação dos resultados",
    data: "2025-05-14T00:00:00-03:00",
    cor: "#0F6F1C",
  },
];

export const olimpiadasFormat: Event[] = [
  // OBMEP
  {
    id: "obmep-1",
    title: "OBMEP - Prova da 1ª fase",
    startDate: new Date("2025-06-03T00:00:00-03:00"),
    endDate: new Date("2025-06-03T23:59:59-03:00"),
    variant: "success", // ou "primary", "danger", etc.
    description: "",
  },
  {
    id: "obmep-2",
    title: "OBMEP - Divulgação dos classificados para a 2ª fase",
    startDate: new Date("2025-08-01T00:00:00-03:00"),
    endDate: new Date("2025-08-01T23:59:59-03:00"),
    variant: "success",
    description: "",
  },
  {
    id: "obmep-3",
    title: "OBMEP - Divulgação dos locais de prova",
    startDate: new Date("2025-08-28T00:00:00-03:00"),
    endDate: new Date("2025-08-28T23:59:59-03:00"),
    variant: "success",
    description: "",
  },
  {
    id: "obmep-4",
    title: "OBMEP - Prova da 2ª fase",
    startDate: new Date("2025-10-25T00:00:00-03:00"),
    endDate: new Date("2025-10-25T23:59:59-03:00"),
    variant: "success",
    description: "",
  },
  {
    id: "obmep-5",
    title: "OBMEP - Divulgação dos premiados",
    startDate: new Date("2025-12-22T00:00:00-03:00"),
    endDate: new Date("2025-12-22T23:59:59-03:00"),
    variant: "success",
    description: "",
  },
  // OBA
  {
    id: "oba-1",
    title: "OBA - Data de realização da prova",
    startDate: new Date("2025-05-16T00:00:00-03:00"),
    endDate: new Date("2025-05-16T23:59:59-03:00"),
    variant: "warning",
    description: "",
  },
  {
    id: "oba-2",
    title: "OBA - Data de divulgação dos gabaritos",
    startDate: new Date("2025-05-18T00:00:00-03:00"),
    endDate: new Date("2025-05-18T23:59:59-03:00"),
    variant: "warning",
    description: "",
  },
  // OLITEF
  {
    id: "olitef-1",
    title: "OLITEF - Realização da prova",
    startDate: new Date("2025-09-09T00:00:00-03:00"),
    endDate: new Date("2025-09-09T23:59:59-03:00"),
    variant: "default",
    description: "",
  },
  {
    id: "olitef-2",
    title: "OLITEF - Resultados da Olímpiada",
    startDate: new Date("2025-10-30T00:00:00-03:00"),
    endDate: new Date("2025-10-30T23:59:59-03:00"),
    variant: "default",
    description: "",
  },
  // OBGP
  {
    id: "obgp-1",
    title: "OBGP - Prazo de inscrição",
    startDate: new Date("2025-04-30T00:00:00-03:00"),
    endDate: new Date("2025-04-30T23:59:59-03:00"),
    variant: "primary",
    description: "",
  },
  {
    id: "obgp-2",
    title: "OBGP - Avaliação",
    startDate: new Date("2025-05-07T00:00:00-03:00"),
    endDate: new Date("2025-05-07T23:59:59-03:00"),
    variant: "primary",
    description: "",
  },
  {
    id: "obgp-3",
    title: "OBGP - Divulgação dos resultados",
    startDate: new Date("2025-05-14T00:00:00-03:00"),
    endDate: new Date("2025-05-14T23:59:59-03:00"),
    variant: "primary",
    description: "",
  },
];
