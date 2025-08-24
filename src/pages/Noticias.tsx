import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { noticias } from "@/content/noticias";
import { useState } from "react";
import { Link } from "react-router-dom";

const Noticias = () => {
  const noticiasOrdenadas = [...noticias].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  const noticiasPorPagina = 3;
  const totalPaginas = Math.ceil(noticias.length / noticiasPorPagina);
  const [pagina, setPagina] = useState(1);

  const indexInicial = (pagina - 1) * noticiasPorPagina;
  const indexFinal = indexInicial + noticiasPorPagina;
  const noticiasMostradas = noticiasOrdenadas.slice(indexInicial, indexFinal);

  const paginasArray = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  return (
    <div className="flex items-center flex-col bg-gradient-to-b from-background to-primary/5 min-h-svh">
      <h1 className="text-center text-3xl font-bold my-4">Notícias</h1>
      <hr className="mb-4 w-1/2 self-center" />
       {noticiasMostradas.length === 0 ? (
        <p className="text-neutral-600">No momento, não há nada por aqui.</p>
      ) : (
        <div className="w-full max-w-2xl space-y-4">
          {noticiasMostradas.map((n) => (
            <Link to={`/noticia/${n.id}`}>
              <div
                className="border rounded-xl p-4 shadow hover:shadow-lg transition mb-2"
              >
                <h2 className="text-xl font-semibold">{n.title}</h2>
                <p className="text-sm text-gray-500">
                  {n.date.toLocaleString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </Link>
          ))}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (pagina > 1) setPagina(pagina - 1);
                  }}
                />
              </PaginationItem>

              {paginasArray.map((p) => (
                <PaginationItem key={p}>
                  <PaginationLink
                    href="#"
                    isActive={p === pagina}
                    onClick={(e) => {
                      e.preventDefault();
                      setPagina(p);
                    }}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {totalPaginas > 5 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (pagina < totalPaginas) setPagina(pagina + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default Noticias;
