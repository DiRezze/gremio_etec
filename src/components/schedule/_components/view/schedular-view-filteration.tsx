"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarIcon, CalendarDaysIcon } from "lucide-react";
import { BsCalendarMonth, BsCalendarWeek } from "react-icons/bs";

import AddEventModal from "../../_modals/add-event-modal";
import DailyView from "./day/daily-view";
import MonthView from "./month/month-view";
import WeeklyView from "./week/week-view";
import { useModal } from "@/providers/modal-context";
import { ClassNames, CustomComponents, Views } from "@/types/index";
import { cn } from "@/lib/utils";
import CustomModal from "@/components/ui/custom-modal";

// Animation settings for Framer Motion
const animationConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, type: "spring", stiffness: 250 },
};

export default function SchedulerViewFilteration({
  views = {
    views: ["day", "month"],
    mobileViews: ["day","month"],
  },
  stopDayEventSummary = false,
  CustomComponents,
  classNames,
}: {
  views?: Views;
  stopDayEventSummary?: boolean;
  CustomComponents?: CustomComponents;
  classNames?: ClassNames;
}) {
  const { setOpen } = useModal();
  const [activeView, setActiveView] = useState<string>("day");
  const [clientSide, setClientSide] = useState(false);

  console.log("activeView", activeView);

  useEffect(() => {
    setClientSide(true);
  }, []);

  const [isMobile, setIsMobile] = useState(
    clientSide ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    if (!clientSide) return;
    setIsMobile(window.innerWidth <= 768);
    function handleResize() {
      if (window && window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window && window.addEventListener("resize", handleResize);

    return () => window && window.removeEventListener("resize", handleResize);
  }, [clientSide]);

  function handleAddEvent(selectedDay?: number) {
    // Create the modal content with proper data
    const startDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      selectedDay ?? new Date().getDate(),
      0,
      0,
      0,
      0
    );

    const endDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      selectedDay ?? new Date().getDate(),
      23,
      59,
      59,
      999
    );

    // Create a wrapper component to handle data passing


    // Open the modal with the content
    setOpen(
      <CustomModal title="Add Event">
        <AddEventModal
          CustomAddEventModal={
            CustomComponents?.CustomEventModal?.CustomAddEventModal?.CustomForm
          }
        />{" "}
      </CustomModal>
    );
  }

  const viewsSelector = isMobile ? views?.mobileViews : views?.views;

  // Set initial active view
  useEffect(() => {
    if (viewsSelector?.length) {
      setActiveView(viewsSelector[0]);
    }
  }, []);

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full">
        <div className="dayly-weekly-monthly-selection relative w-full">
          <Tabs
            value={activeView}
            onValueChange={setActiveView}
            className={cn("w-full", classNames?.tabs)}
          >
            <div className="flex justify-between items-center mb-4">
              <TabsList className="flex flex-row">
                {viewsSelector?.includes("day") && (
                  <TabsTrigger value="day">
                    {CustomComponents?.customTabs?.CustomDayTab ? (
                      CustomComponents.customTabs.CustomDayTab
                    ) : (
                      <div className="flex items-center space-x-2">
                        <CalendarDaysIcon size={15} />
                        <span>Dia</span>
                      </div>
                    )}
                  </TabsTrigger>
                )}

                {viewsSelector?.includes("week") && (
                  <TabsTrigger value="week">
                    {CustomComponents?.customTabs?.CustomWeekTab ? (
                      CustomComponents.customTabs.CustomWeekTab
                    ) : (
                      <div className="flex items-center space-x-2">
                        <BsCalendarWeek />
                        <span>Semana</span>
                      </div>
                    )}
                  </TabsTrigger>
                )}

                {viewsSelector?.includes("month") && (
                  <TabsTrigger value="month">
                    {CustomComponents?.customTabs?.CustomMonthTab ? (
                      CustomComponents.customTabs.CustomMonthTab
                    ) : (
                      <div className="flex items-center space-x-2">
                        <BsCalendarMonth />
                        <span>Mês</span>
                      </div>
                    )}
                  </TabsTrigger>
                )}
              </TabsList>
            </div>

            {viewsSelector?.includes("day") && (
              <TabsContent value="day">
                <AnimatePresence mode="wait">
                  <motion.div {...animationConfig}>
                    <DailyView
                      stopDayEventSummary={stopDayEventSummary}
                      classNames={classNames?.buttons}
                      prevButton={
                        CustomComponents?.customButtons?.CustomPrevButton
                      }
                      nextButton={
                        CustomComponents?.customButtons?.CustomNextButton
                      }
                      CustomEventComponent={
                        CustomComponents?.CustomEventComponent
                      }
                      CustomEventModal={CustomComponents?.CustomEventModal}
                    />
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            )}

            {viewsSelector?.includes("week") && (
              <TabsContent value="week">
                <AnimatePresence mode="wait">
                  <motion.div {...animationConfig}>
                    <WeeklyView
                      classNames={classNames?.buttons}
                      prevButton={
                        CustomComponents?.customButtons?.CustomPrevButton
                      }
                      nextButton={
                        CustomComponents?.customButtons?.CustomNextButton
                      }
                      CustomEventComponent={
                        CustomComponents?.CustomEventComponent
                      }
                      CustomEventModal={CustomComponents?.CustomEventModal}
                    />
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            )}

            {viewsSelector?.includes("month") && (
              <TabsContent value="month">
                <AnimatePresence mode="wait">
                  <motion.div {...animationConfig}>
                    <MonthView
                      classNames={classNames?.buttons}
                      prevButton={
                        CustomComponents?.customButtons?.CustomPrevButton
                      }
                      nextButton={
                        CustomComponents?.customButtons?.CustomNextButton
                      }
                      CustomEventComponent={
                        CustomComponents?.CustomEventComponent
                      }
                      CustomEventModal={CustomComponents?.CustomEventModal}
                    />
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
