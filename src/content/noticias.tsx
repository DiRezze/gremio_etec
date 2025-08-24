import { Noticia } from "@/types/newsTypes";
import React from "react";

export const noticias: Array<Noticia> = [
  {
    id: "1",
    date: new Date("2025-08-24T18:45:01.345Z"),
    author: "Gabriel Di Rezze - Coordenador Financeiro",
    title: "O site do Grêmio Control Z agora é 2.0",
    content: (
      <>
        <p>
          O nosso site foi atualizado para a versão <strong>2.0</strong>! 🎉
          Agora ele conta com diversas melhorias:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Visualização dos eventos em calendário mensal 🗓️</li>
          <li>Sistema de notícias moderno e responsivo 📰</li>
          <li>Acessibilidade em Libras ♿️</li>
          <li>Sistema de busca nos eventos 🔍</li>
          <li>Filtros aprimorados para eventos ⚙️</li>
          <li>Melhorias visuais no layout e design ✨</li>
        </ul>
        <p className="mt-2">
          Explore todas essas novidades e aproveite uma experiência mais
          completa no nosso site!
        </p>
      </>
    ),
  },
  {
    id: "2",
    date: new Date("2025-08-24T19:44:00.000Z"),
    author: "Gabriel Di Rezze - Coordenador Financeiro",
    title: "Programa Fuvest Escuta auxilia vestibulandos",
    content: (
      <>
        <p>
          Neste ano, a Fundação Universitária para o Vestibular (Fuvest) lançou o <strong>Programa Fuvest Escuta</strong>, oferecendo
          suporte e orientação para todos os candidatos ao vestibular. 🎓
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Atendimento psicológico e emocional 💬</li>
          <li>Dicas para organização e planejamento de estudos 📚</li>
          <li>
            Suporte online para dúvidas frequentes sobre o processo seletivo 🌐
          </li>
        </ul>
        <p className="mt-2">
          Aproveite essa oportunidade para se preparar melhor e reduzir o
          estresse durante a reta final para o vestibular!
        </p>
      </>
    ),
  },
];
