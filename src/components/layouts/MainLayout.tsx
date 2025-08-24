import { Outlet } from "react-router-dom";
import Navbar from "@/components/custom/navbar.tsx";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-b from-background to-primary/5">
        <Navbar />
        <Outlet />
    </div>
  );
};

export default MainLayout;
