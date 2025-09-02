import ScheduleEvent from "@/components/custom/scheduleEvent";
import { Event } from "@/types";

interface ScheduleProps{
  currentEvents: Array<Event>;
}

const Schedule = ({currentEvents}:ScheduleProps) => {

  const currentDate = new Date();

  return (
     <main className="space-y-4 my-4 mx-2 px-2 w-full flex flex-col items-center">
            {currentEvents.length === 0 ? (
              <p className="text-center text-gray-500">Nenhum evento disponível.</p>
            ) : (
              currentEvents.filter((e) => new Date(e.endDate) >= currentDate).map((event, index) => (
                <ScheduleEvent ev={event} key={index} />
              ))
            )}
          </main>
  );

}

export default Schedule;
