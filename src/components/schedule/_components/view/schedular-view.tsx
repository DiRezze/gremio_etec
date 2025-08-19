"use client";


import SchedulerViewFilteration from "./schedular-view-filteration";

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
      
      />
    </div>
  );
}
