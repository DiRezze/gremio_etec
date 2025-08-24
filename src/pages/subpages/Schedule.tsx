import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Event } from "@/types";

interface ScheduleProps{
  currentEvents: Array<Event>;
}

const Schedule = ({currentEvents}:ScheduleProps) => {

  return (
     <main className="space-y-4 my-4 mx-2 px-2 w-full flex flex-col items-center">
            {currentEvents.length === 0 ? (
              <p className="text-center text-gray-500">Nenhum evento disponível.</p>
            ) : (
              currentEvents.map((event, index) => (
                <Card
                  key={index}
                  className="border-l-emerald-500 border-l-8 w-full sm:w-[600px]"
                >
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                    <CardDescription>
                      {new Date(event.startDate).toLocaleDateString("pt-BR")} - {new Date(event.endDate).toLocaleDateString("pt-BR")}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))
            )}
          </main>
  );

}

export default Schedule;
