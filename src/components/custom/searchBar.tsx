import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";

interface SearchBarProps{
  value: string;
  callback: (value: string) => void;
}

const SearchBar = ({ value, callback }:SearchBarProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileClasses =
    "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md m-0 p-2 flex flex-row itens-center justify-center";
  const desktopClasses =
    "relative bottom-0 left-0 translate-x-0 z-50 w-full rounded-none bg-background shadow-none p-0 m-0";

    const mobileInput = "pl-9 rounded-3xl shadow-xl -ml-2";

    const desktopInput = "pl-9";

  return (
    <div className={isMobile ? mobileClasses : desktopClasses}>
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
        <SearchIcon className="h-4 w-4" />
      </span>
      <Input
        onChange={e => callback(e.target.value)}
        value={value}
        placeholder="Pesquisar..."
        className={isMobile ? mobileInput : desktopInput}
      />
    </div>
  );

};

export default SearchBar;
