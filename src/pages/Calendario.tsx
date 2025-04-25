import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert.tsx";
import { vestibulares } from "@/content/vestibulares";
import { Blend, InfoIcon } from "lucide-react";
import { Evento } from "@/types/calendarTypes";
import { olimpiadas } from "@/content/olimpiadas";
import { internos } from "@/content/internos";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

function ordenarEventosPorData(
  eventos: { nome: string; data: string; cor: string }[]
) {
  const currentDate = new Date();
  return eventos
    .filter((e) => new Date(e.data) >= currentDate)
    .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());
}

function getEventosPassados(eventos: Array<Evento>) {
  const currentDate = new Date();
  return eventos.filter((e) => new Date(e.data) <= currentDate);
}

const Calendario = () => {
  const { id } = useParams();

  const [eventosAtuais, setEventosAtuais] = useState<Array<Evento>>([]);
  const [mostrarPassados, setMostrarPassados] = useState(false);

  useEffect(() => {
    switch (id) {
      case "internos":
        setEventosAtuais([...internos]);
        break;
      case "olimpiadas":
        setEventosAtuais([...olimpiadas]);
        break;
      case "vestibulares":
        setEventosAtuais([...vestibulares]);
        break;
      default:
        setEventosAtuais([...vestibulares, ...olimpiadas, ...internos]);
        break;
    }
  }, [id]);

  const eventosOrdenados = useMemo(() => {
    if (mostrarPassados) {
      return getEventosPassados(eventosAtuais).sort(
        (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
      );
    } else {
      return ordenarEventosPorData(eventosAtuais);
    }
  }, [eventosAtuais, mostrarPassados]);

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-center text-3xl font-bold my-4">Calendário</h1>
      <hr className="mb-4 w-1/2 self-center" />

      <main className="space-y-4 my-4 mx-2">
        <section className="overflow-x-clip">
          <div className="flex flex-row flex-wrap gap-2 items-center justify-center">
            <span className="flex flex-row font-semibold items-center gap-2 my-2 mr-4">
              <Blend />
              Filtrar
            </span>
            <Button
              variant={"outline"}
              className="rounded-full"
              onClick={() => {
                setEventosAtuais([...vestibulares, ...olimpiadas, ...internos]);
                setMostrarPassados(false);
              }}
            >
              Tudo
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full"
              onClick={() => {
                setEventosAtuais([...vestibulares]);
                setMostrarPassados(false);
              }}
            >
              Vestibulares
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full"
              onClick={() => {
                setEventosAtuais([...olimpiadas]);
                setMostrarPassados(false);
              }}
            >
              Olimpíadas
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full"
              onClick={() => {
                setEventosAtuais([...internos]);
                setMostrarPassados(false);
              }}
            >
              Eventos internos
            </Button>
            <Button
              variant={"outline"}
              className="rounded-full"
              onClick={() => {
                setEventosAtuais(
                  getEventosPassados([
                    ...vestibulares,
                    ...olimpiadas,
                    ...internos,
                  ])
                );
                setMostrarPassados(true);
              }}
            >
              Eventos Passados
            </Button>
          </div>
        </section>
        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Em desenvolvimento</AlertTitle>
          <AlertDescription>
            Algumas das funcionalidades dessa página encontram-se incompletas e
            serão disponibilizadas em breve.
          </AlertDescription>
        </Alert>
        {eventosOrdenados.length === 0 ? (
          <p className="text-center text-gray-500">Nenhum evento disponível.</p>
        ) : (
          eventosOrdenados.map((evento, index) => (
            <Card
              key={index}
              className="border-l-emerald-500 border-l-8"
              style={{ borderLeftColor: `${evento.cor}` }}
            >
              <CardHeader>
                <CardTitle>{evento.nome}</CardTitle>
                <CardDescription>
                  {new Date(evento.data).toLocaleDateString("pt-BR")}
                </CardDescription>
              </CardHeader>
            </Card>
          ))
        )}
      </main>
      <div className="flex items-center flex-col my-4">
        <span className="text-neutral-500">
          Encontrou algum erro?{" "}
          <a
            className="font-semibold underline"
            href="mailto://gabriel.rezze@etec.sp.gov"
          >
            Relate-o por e-mail
          </a>
        </span>
      </div>
    </div>
  );
};

export default Calendario;
