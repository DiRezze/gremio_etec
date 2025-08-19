import SchedulerView from "@/components/schedule/_components/view/schedular-view";
import SchedulerWrapper from "@/components/schedule/_components/wrapper/schedular-wrapper"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SchedulerProvider } from "@/providers/schedular-provider"
import { InfoIcon } from "lucide-react";

const CalendarTab = () => {
    return (
    <SchedulerProvider weekStartsOn="monday">
              <Alert className="my-2">
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Em desenvolvimento</AlertTitle>
              <AlertDescription>
                Algumas das funcionalidades dessa página encontram-se incompletas e
                serão disponibilizadas em breve.
              </AlertDescription>
            </Alert>
      <SchedulerWrapper
      />
    </SchedulerProvider>
  )
}

export default CalendarTab;
