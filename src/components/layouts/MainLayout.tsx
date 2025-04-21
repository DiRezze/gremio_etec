import { Outlet } from "react-router-dom";
import Navbar from "@/components/custom/navbar.tsx";

const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  );
};

export default MainLayout;
