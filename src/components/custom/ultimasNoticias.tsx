"use client";

import React from "react";
import { noticias } from "@/content/noticias";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const UltimasNoticias = () => {
  const ultimas3 = [...noticias]
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 3);

  return (
    <section className="my-8 flex flex-col gap-1">
      <h2 className="text-2xl font-bold mb-2">Últimas Notícias</h2>
      <hr className="border-green-500 border-2 w-1/6 mb-4" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {ultimas3.map((n) => (
          <Link to={`/noticia/${n.id}`}>
            <Card className="hover:shadow-lg transition cursor-pointer hover:-translate-y-0.5 h-32 p-2">
              <h3 className="font-bold mx-2 text-primary">{n.title}</h3>
              <span className="mx-2 text-white/50">
                {n.date.toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </Card>
          </Link>
        ))}
      </div>
      <a className="ml-auto font-semibold flex flex-row gap-2 underline" href="/noticias">Ver todas <ChevronRight/></a>
    </section>
  );
};

export default UltimasNoticias;
