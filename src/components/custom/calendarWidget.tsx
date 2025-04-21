import {Calendar} from "@/components/ui/calendar.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {useEffect, useState} from "react";
import {Evento, eventos} from "@/constants/vestibulares.ts";

export default function CalendarWidget() {
    const [eventosProximos, setEventosProximos] = useState<Array<Evento>>();

    useEffect(() => {
        const now = new Date();
        const eventosFiltrados = eventos
            .map((evento) => ({
                ...evento
            }))
            .filter((evento) => new Date(evento.data) >= now)
            .sort(((a:Evento, b:Evento) => new Date(a.data).getTime() - new Date(b.data).getTime()))
            .slice(0, 3);
        setEventosProximos(eventosFiltrados);
    }, []);

    return (
        <>
            <Calendar
                mode="default"
                className="border rounded-md shadow w-min"
            />
            <Separator className="my-2"/>
            <section className="max-w-72">
                <h1 className="font-semibold text-left self-start">Próximos eventos</h1>
                <ul>
                    {eventosProximos && eventosProximos.map((evento, index) => (
                        <li key={index} className="ml-4">
                            <h3 className="text-justify">
                                <span style={{color: evento.color}}>• </span>
                                {evento.nome}
                            </h3>
                            <span className="text-neutral-500 text-sm">{new Date(evento.data).toLocaleDateString("pt-BR")}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
