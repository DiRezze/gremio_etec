import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Calendario from "@/pages/Calendario.tsx";
import Noticias from "@/pages/Noticias.tsx";
import ErrorElement from "@/components/custom/errorElement.tsx";
import LinkTree from "@/pages/LinkTree.tsx";
import Financas from "@/pages/Financas.tsx";
import Propostas from "@/pages/Propostas.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement/>,
    children: [
      { index: true, element: <Home /> },
      { path: "sobre", element: <About /> },
      { path: "calendario/:id", element: <Calendario /> },
      { path: "noticias", element: <Noticias /> },
      { path: "financeiro", element: <Financas /> },
      { path: "propostas", element: <Propostas /> },
      { path: "links", element: <LinkTree /> },
    ],
  },
]);
export default router;
