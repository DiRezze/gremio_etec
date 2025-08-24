import React from "react";
import { useParams } from "react-router-dom";
import { noticias } from "@/content/noticias";
import { Noticia as NType } from "@/types/newsTypes";

const Noticia = () => {
  const { id } = useParams<{ id: string }>();
  const noticia = noticias.find((n: NType) => n.id === id);

  if (!noticia) {
    return <p className="p-4">Notícia não encontrada.</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{noticia.title}</h1>
      <hr className="border-green-500 border-2 w-1/6 my-2" />
      <p className="text-sm text-gray-500 mb-4">
        {noticia.date.toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <div className="prose">{noticia.content}</div>
      <div className="text-neutral-500 my-4">Por {noticia.author}</div>
    </div>
  );
};

export default Noticia;
