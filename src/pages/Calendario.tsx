import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Blend, CalendarDays, CheckSquare, ChevronDown, Code2 } from "lucide-react";
import Schedule from "./subpages/Schedule";
import CalendarTab from "./subpages/Calendar";
import SearchBar from "@/components/custom/searchBar";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Event } from "@/types";
import { internosFormat } from "@/content/internos";
import { olimpiadasFormat } from "@/content/olimpiadas";
import { vestibularesFormat } from "@/content/vestibulares";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import FooterRights from "@/components/custom/footerRights";

function ordenarEventosPorData(eventos: Array<Event>) {
  const currentDate = new Date();
  return eventos
    .filter((e) => new Date(e.startDate) >= currentDate)
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
}

function getEventosPassados(eventos: Array<Event>) {
  const currentDate = new Date();
  return eventos.filter((e) => new Date(e.startDate) <= currentDate);
}

const Calendario = () => {
  const { id } = useParams();

  const  [idState, setIdState] = useState<string|undefined>(id);

  const [searchText, setSearchText] = useState<string>("");

  const [currentEvents, setCurrentEvents] = useState<Array<Event>>([]);

  const [mostrarPassados, setMostrarPassados] = useState(false);

  useEffect(() => {
    switch (idState) {
      case "internos":
        setCurrentEvents([...internosFormat]);
        break;
      case "olimpiadas":
        setCurrentEvents([...olimpiadasFormat]);
        break;
      case "vestibulares":
        setCurrentEvents([...vestibularesFormat]);
        break;
      default:
        setCurrentEvents([
          ...vestibularesFormat,
          ...olimpiadasFormat,
          ...internosFormat,
        ]);
        break;
    }
  }, [idState]);

  const eventosOrdenados = useMemo(() => {
    if (mostrarPassados) {
      return getEventosPassados(currentEvents).sort(
        (a, b) =>
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      );
    } else {
      return ordenarEventosPorData(currentEvents);
    }
  }, [currentEvents, mostrarPassados]);

  const eventosFiltrados = useMemo(() => {
    if (!searchText.trim()) return eventosOrdenados;
    const texto = searchText.trim().toLowerCase();
    return eventosOrdenados.filter(
      (evento) =>
        evento.title.toLowerCase().includes(texto) ||
        evento.description?.toLowerCase().includes(texto)
    );
  }, [eventosOrdenados, searchText]);

  const showBetaToast = () => {
    toast(<span className="flex gap-2 items-center flex-row"><Code2/>Atenção</span>,
      {
        description: "Esta funcionalidade ainda está em desenvolvimento",
      }
    );
  }
  

  return (
    <div className="flex items-center flex-col bg-gradient-to-b from-background to-primary/10 min-h-svh">
      <h1 className="text-center text-3xl font-bold my-4">Calendário</h1>
      <hr className="mb-4 w-1/2 self-center" />

      <Tabs defaultValue="schedule">
        <div className="flex gap-2 justify-center flex-row-reverse">
          <TabsList className="rounded-xl">
            <TabsTrigger
              value="schedule"
              className="gap-2 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <CheckSquare />
              Agenda
            </TabsTrigger>
            <TabsTrigger
              onClick={showBetaToast}
              value="calendar"
              className="gap-2 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <CalendarDays />
              Calendário
            </TabsTrigger>
          </TabsList>
          <SearchBar
            value={searchText}
            callback={setSearchText}
          />
        </div>
        <section className="overflow-x-clip my-2">
              <div className="flex flex-row flex-wrap gap-2 items-center justify-center">
                <span className="flex flex-row font-semibold items-center gap-2 my-2 mr-4">
                  <Blend />
                  Filtrar
                </span>
                <Button
                  variant={"outline"}
                  className="rounded-full"
                  onClick={()=>setIdState("tudo")}
                >
                  Tudo
                </Button>
                <Button
                  variant={"outline"}
                  className="rounded-full"
                  onClick={()=>setIdState("vestibulares")}
                >
                  Vestibulares
                </Button>
                <Button
                  variant={"outline"}
                  className="rounded-full"
                  onClick={()=>setIdState("olimpiadas")}
                >
                  Olimpíadas
                </Button>
                <Button
                  variant={"outline"}
                  className="rounded-full"
                  onClick={()=>setIdState("internos")}
                >
                  Eventos internos
                </Button>
              </div>
            </section>
        <TabsContent value="schedule">
          <Schedule currentEvents={eventosFiltrados} />
        </TabsContent>
        <TabsContent value="calendar">
          <CalendarTab eventsList={eventosFiltrados} />
        </TabsContent>
      </Tabs>

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
      <FooterRights />
    </div>
  );
};

export default Calendario;
