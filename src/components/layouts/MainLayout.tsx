import { Outlet } from "react-router-dom";
import Navbar from "@/components/custom/navbar.tsx";

const MainLayout = () => {
  return (
    <div className="h-full">
        <Navbar />
        <Outlet />
    </div>
  );
};

export default MainLayout;
