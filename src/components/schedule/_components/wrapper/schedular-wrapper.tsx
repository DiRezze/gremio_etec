import SchedulerView from "../view/schedular-view";
import { Event } from "@/types";

export default function SchedulerWrapper({eventList}:{eventList:Array<Event>}) {
  return (
    <div className="w-full sm:min-w-[600px]">  
      <SchedulerView events={eventList} />
    </div>
  );
}
