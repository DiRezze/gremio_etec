"use client";


import { internosFormat } from "@/content/internos";
import SchedulerViewFilteration from "./schedular-view-filteration";
import { olimpiadasFormat } from "@/content/olimpiadas";
import { vestibularesFormat } from "@/content/vestibulares";

export default function SchedulerView() {

  return (
    <div className="flex flex-col gap-6 w-full">
      <SchedulerViewFilteration 
      classNames={{
        buttons: {
          next: "rounded-3xl",
          prev: "rounded-3xl"
        }
      }}
      eventList={[...internosFormat, ...olimpiadasFormat, ...vestibularesFormat]}
      />
    </div>
  );
}
