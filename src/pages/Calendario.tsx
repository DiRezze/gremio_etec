import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {eventos as vestibulares} from "@/content/vestibulares.ts";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";
import {InfoIcon} from "lucide-react";

function ordenarEventosPorData(eventos: { nome: string; data: string; color?:string }[]) {
    return eventos.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());
}

const Calendario = () => {

    const eventosOrdenados = ordenarEventosPorData(vestibulares);

    return (
        <div className="flex items-center flex-col">
            <h1 className="text-center text-3xl font-bold my-4">Calendário</h1>
            <hr className="mb-4 w-1/2 self-center"/>

            <main className="space-y-4 my-4 mx-2">
                <Alert>
                    <InfoIcon className="h-4 w-4"/>
                    <AlertTitle>Em desenvolvimento</AlertTitle>
                    <AlertDescription>
                       Algumas das funcionalidades dessa página encontram-se incompletas e serão disponibilizadas em breve.
                    </AlertDescription>
                </Alert>
                {eventosOrdenados.map((evento, index) => (
                    <Card key={index} className="border-l-emerald-500 border-l-8" style={{borderLeftColor: `${evento.color}`}}>
                        <CardHeader>
                            <CardTitle>{evento.nome}</CardTitle>
                            <CardDescription>{new Date(evento.data).toLocaleDateString("pt-BR")}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </main>
            <div className="flex items-center flex-col my-4">
                <span className="text-neutral-500">Encontrou algum erro? <a className="font-semibold underline" href="mailto://gabriel.rezze@etec.sp.gov">Relate-o por e-mail</a></span>
            </div>
        </div>
    );
}

export default Calendario;