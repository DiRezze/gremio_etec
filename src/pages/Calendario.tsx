import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, CheckSquare} from "lucide-react";
import Schedule from "./subpages/Schedule";
import CalendarTab from "./subpages/Calendar";
import SearchBar from "@/components/custom/searchBar";
import { useState } from "react";

const Calendario = () => {

  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-center text-3xl font-bold my-4">Calendário</h1>
      <hr className="mb-4 w-1/2 self-center" />

      <Tabs defaultValue="schedule">
        <div className="flex gap-2 justify-center flex-row-reverse">
          <TabsList>
            <TabsTrigger value="schedule" className="gap-2">
              <CheckSquare />
              Agenda
            </TabsTrigger>
            <TabsTrigger value="calendar" className="gap-2">
              <CalendarDays />
              Calendário
            </TabsTrigger>
          </TabsList>
          <SearchBar value={searchText} callback={setSearchText} />
        </div>
        <TabsContent value="schedule">
          <Schedule />
        </TabsContent>
        <TabsContent value="calendar">
          <CalendarTab/>
        </TabsContent>
      </Tabs>

      <div className="flex items-center flex-col my-4">
        <span className="text-neutral-500">
          Encontrou algum erro?{" "}
          <a
            className="font-semibold underline"
            href="mailto://gabriel.rezze@etec.sp.gov"
          >
            Relate-o por e-mail
          </a>
        </span>
      </div>
    </div>
  );
};

export default Calendario;
