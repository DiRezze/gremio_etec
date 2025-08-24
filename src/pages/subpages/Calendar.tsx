import SchedulerWrapper from "@/components/schedule/_components/wrapper/schedular-wrapper"
import { SchedulerProvider } from "@/providers/schedular-provider"
import { Event } from "@/types";

const CalendarTab = ({ eventsList }: { eventsList: Array<Event> }) => {
    return (
    <SchedulerProvider weekStartsOn="sunday">
      <SchedulerWrapper eventList={eventsList}/>
    </SchedulerProvider>
  )
}

export default CalendarTab;
