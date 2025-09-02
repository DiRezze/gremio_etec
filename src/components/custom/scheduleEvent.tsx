import { Event } from "@/types";
import React, { Key } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const ScheduleEvent = ({ev, key}:{ev: Event, key: Key}) => {

  const displayDate = (new Date(ev.startDate).toLocaleDateString("pt-BR") === new Date(ev.endDate).toLocaleDateString("pt-BR") ?
    new Date(ev.startDate).toLocaleDateString("pt-BR")
    :
    `${new Date(ev.startDate).toLocaleDateString("pt-BR")} - ${new Date(ev.endDate).toLocaleDateString("pt-BR")}`
  )

  return (
    <Card 
      key={key}
      className="border-l-emerald-500 border-l-8 w-full sm:w-[600px]"
      >
      <CardHeader>
        <CardTitle>{ev.title}</CardTitle>
        <CardDescription>{ev.description}</CardDescription>
        <CardDescription>
          {displayDate}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default ScheduleEvent;
