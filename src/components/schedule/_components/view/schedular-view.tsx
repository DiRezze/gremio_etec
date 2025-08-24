"use client";
import { Event } from "@/types";
import SchedulerViewFilteration from "./schedular-view-filteration";

export default function SchedulerView({events}:{events:Array<Event>}) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <SchedulerViewFilteration 
      classNames={{
        buttons: {
          next: "rounded-3xl",
          prev: "rounded-3xl"
        }
      }}
      eventList={events}
      />
    </div>
  );
}
