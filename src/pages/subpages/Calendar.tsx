import SchedulerWrapper from "@/components/schedule/_components/wrapper/schedular-wrapper"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SchedulerProvider } from "@/providers/schedular-provider"
import { Event } from "@/types";
import { InfoIcon } from "lucide-react";

const CalendarTab = ({ eventsList }: { eventsList: Array<Event> }) => {
    return (
    <SchedulerProvider weekStartsOn="sunday">
              <Alert className="my-2">
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Em desenvolvimento</AlertTitle>
              <AlertDescription>
                Algumas das funcionalidades dessa página encontram-se incompletas e
                serão disponibilizadas em breve.
              </AlertDescription>
            </Alert>
      <SchedulerWrapper eventList={eventsList}/>
    </SchedulerProvider>
  )
}

export default CalendarTab;
