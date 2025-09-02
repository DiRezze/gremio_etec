import { Event } from "@/types";
import { Evento } from "@/types/calendarTypes";

export const vestibulares: Evento[] = [
  //Fuvest
  {
    nome: "Fuvest - Início das Inscrições",
    data: "2025-08-18T00:00:00-03:00",
    cor: "#00ADEE",
  },
  {
    nome: "Fuvest - Fim das Inscrições",
    data: "2025-10-07T00:00:00-03:00",
    cor: "#00ADEE",
  },
  {
    nome: "Fuvest - Prova da 1ª Fase",
    data: "2025-11-23T00:00:00-03:00",
    cor: "#00ADEE",
  },
  {
    nome: "Fuvest - Provas Específicas Início",
    data: "2025-12-09T00:00:00-03:00",
    cor: "#00ADEE",
  },
  {
    nome: "Fuvest - Provas Específicas Fim",
    data: "2025-12-12T00:00:00-03:00",
    cor: "#00ADEE",
  },
  {
    nome: "Fuvest - Prova da 2ª Fase (Dia 1)",
    data: "2025-12-14T00:00:00-03:00",
    cor: "#00ADEE",
  },
  {
    nome: "Fuvest - Prova da 2ª Fase (Dia 2)",
    data: "2025-12-15T00:00:00-03:00",
    cor: "#00ADEE",
  },
  {
    nome: "Fuvest - 1ª Chamada e resultado",
    data: "2026-01-23T00:00:00-03:00",
    cor: "#00ADEE",
  },
  //Unicamp
  {
    nome: "Unicamp - Início das Inscrições",
    data: "2025-08-01T00:00:00-03:00",
    cor: "#F6A800",
  },
  {
    nome: "Unicamp - Fim das Inscrições",
    data: "2025-09-01T00:00:00-03:00",
    cor: "#F6A800",
  },
  {
    nome: "Unicamp - Prova da 1ª Fase",
    data: "2025-10-26T00:00:00-03:00",
    cor: "#F6A800",
  },
  {
    nome: "Unicamp - Prova da 2ª Fase (Dia 1)",
    data: "2025-11-30T00:00:00-03:00",
    cor: "#F6A800",
  },
  {
    nome: "Unicamp - Prova da 2ª Fase (Dia 2)",
    data: "2025-12-01T00:00:00-03:00",
    cor: "#F6A800",
  },
  {
    nome: "Unicamp - Provas de Habilidades Específicas",
    data: "2025-12-03T00:00:00-03:00",
    cor: "#F6A800",
  },
  {
    nome: "Unicamp - 1ª Chamada e resultado",
    data: "2026-01-23T00:00:00-03:00",
    cor: "#F6A800",
  },
  //ENEM
  {
    nome: "Enem - Solicitação de Isenção da Taxa",
    data: "2025-04-14T00:00:00-03:00",
    cor: "#FF5C58",
  },
  {
    nome: "Enem - Fim da Solicitação de Isenção da Taxa",
    data: "2025-05-02T00:00:00-03:00",
    cor: "#FF5C58",
  },
  {
    nome: "Enem - Prova (Dia 1)",
    data: "2025-11-09T00:00:00-03:00",
    cor: "#FF5C58",
  },
  {
    nome: "Enem - Prova (Dia 2)",
    data: "2025-11-16T00:00:00-03:00",
    cor: "#FF5C58",
  },
  {
    nome: "Enem - Divulgação do Gabarito",
    data: "2025-11-20T00:00:00-03:00",
    cor: "#FF5C58",
  },
  {
    nome: "Enem - Divulgação dos Resultados",
    data: "2026-01-12T00:00:00-03:00",
    cor: "#FF5C58",
  },
];


export const vestibularesFormat: Event[] = [
  // Fuvest
  {
    id: "fuvest-inscricao",
    title: "Fuvest - Inscrições",
    startDate: new Date("2025-08-18T00:00:00-03:00"),
    endDate: new Date("2025-10-07T23:59:59-03:00"),
    variant: "primary",
    description: "",
  },
  {
    id: "fuvest-1fase",
    title: "Fuvest - Prova da 1ª Fase",
    startDate: new Date("2025-11-23T00:00:00-03:00"),
    endDate: new Date("2025-11-23T23:59:59-03:00"),
    variant: "primary",
    description: "",
  },
  {
    id: "fuvest-especificas-inicio",
    title: "Fuvest - Provas Específicas Início",
    startDate: new Date("2025-12-09T00:00:00-03:00"),
    endDate: new Date("2025-12-09T23:59:59-03:00"),
    variant: "primary",
    description: "",
  },
  {
    id: "fuvest-especificas-fim",
    title: "Fuvest - Provas Específicas Fim",
    startDate: new Date("2025-12-12T00:00:00-03:00"),
    endDate: new Date("2025-12-12T23:59:59-03:00"),
    variant: "primary",
    description: "",
  },
  {
    id: "fuvest-2fase-dia1",
    title: "Fuvest - Prova da 2ª Fase (Dia 1)",
    startDate: new Date("2025-12-14T00:00:00-03:00"),
    endDate: new Date("2025-12-14T23:59:59-03:00"),
    variant: "primary",
    description: "",
  },
  {
    id: "fuvest-2fase-dia2",
    title: "Fuvest - Prova da 2ª Fase (Dia 2)",
    startDate: new Date("2025-12-15T00:00:00-03:00"),
    endDate: new Date("2025-12-15T23:59:59-03:00"),
    variant: "primary",
    description: "",
  },
  {
    id: "fuvest-resultado",
    title: "Fuvest - 1ª Chamada e resultado",
    startDate: new Date("2026-01-23T00:00:00-03:00"),
    endDate: new Date("2026-01-23T23:59:59-03:00"),
    variant: "primary",
    description: "",
  },
  // Unicamp
  {
    id: "unicamp-inscricao-inicio",
    title: "Unicamp - Início das Inscrições",
    startDate: new Date("2025-08-01T00:00:00-03:00"),
    endDate: new Date("2025-08-01T23:59:59-03:00"),
    variant: "warning",
    description: "",
  },
  {
    id: "unicamp-inscricao-fim",
    title: "Unicamp - Fim das Inscrições",
    startDate: new Date("2025-09-01T00:00:00-03:00"),
    endDate: new Date("2025-09-01T23:59:59-03:00"),
    variant: "warning",
    description: "",
  },
  {
    id: "unicamp-1fase",
    title: "Unicamp - Prova da 1ª Fase",
    startDate: new Date("2025-10-26T00:00:00-03:00"),
    endDate: new Date("2025-10-26T23:59:59-03:00"),
    variant: "warning",
    description: "",
  },
  {
    id: "unicamp-2fase-dia1",
    title: "Unicamp - Prova da 2ª Fase (Dia 1)",
    startDate: new Date("2025-11-30T00:00:00-03:00"),
    endDate: new Date("2025-11-30T23:59:59-03:00"),
    variant: "warning",
    description: "",
  },
  {
    id: "unicamp-2fase-dia2",
    title: "Unicamp - Prova da 2ª Fase (Dia 2)",
    startDate: new Date("2025-12-01T00:00:00-03:00"),
    endDate: new Date("2025-12-01T23:59:59-03:00"),
    variant: "warning",
    description: "",
  },
  {
    id: "unicamp-habilidades",
    title: "Unicamp - Provas de Habilidades Específicas",
    startDate: new Date("2025-12-03T00:00:00-03:00"),
    endDate: new Date("2025-12-03T23:59:59-03:00"),
    variant: "warning",
    description: "",
  },
  {
    id: "unicamp-resultado",
    title: "Unicamp - 1ª Chamada e resultado",
    startDate: new Date("2026-01-23T00:00:00-03:00"),
    endDate: new Date("2026-01-23T23:59:59-03:00"),
    variant: "warning",
    description: "",
  },
  // ENEM
  {
    id: "enem-isencao-inicio",
    title: "Enem - Solicitação de Isenção da Taxa",
    startDate: new Date("2025-04-14T00:00:00-03:00"),
    endDate: new Date("2025-04-14T23:59:59-03:00"),
    variant: "danger",
    description: "",
  },
  {
    id: "enem-isencao-fim",
    title: "Enem - Fim da Solicitação de Isenção da Taxa",
    startDate: new Date("2025-05-02T00:00:00-03:00"),
    endDate: new Date("2025-05-02T23:59:59-03:00"),
    variant: "danger",
    description: "",
  },
  {
    id: "enem-prova1",
    title: "Enem - Prova (Dia 1)",
    startDate: new Date("2025-11-09T00:00:00-03:00"),
    endDate: new Date("2025-11-09T23:59:59-03:00"),
    variant: "danger",
    description: "",
  },
  {
    id: "enem-prova2",
    title: "Enem - Prova (Dia 2)",
    startDate: new Date("2025-11-16T00:00:00-03:00"),
    endDate: new Date("2025-11-16T23:59:59-03:00"),
    variant: "danger",
    description: "",
  },
  {
    id: "enem-gabarito",
    title: "Enem - Divulgação do Gabarito",
    startDate: new Date("2025-11-20T00:00:00-03:00"),
    endDate: new Date("2025-11-20T23:59:59-03:00"),
    variant: "danger",
    description: "",
  },
  {
    id: "enem-resultado",
    title: "Enem - Divulgação dos Resultados",
    startDate: new Date("2026-01-12T00:00:00-03:00"),
    endDate: new Date("2026-01-12T23:59:59-03:00"),
    variant: "danger",
    description: "",
  },
];
