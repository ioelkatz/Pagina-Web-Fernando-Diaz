import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Inicio from "./components/Inicio.jsx";
import ConsultaNutricional from "./components/ConsultaNutricional.jsx";
import MasterNutricion from "./components/MasterNutricion.jsx";
import Servicios from "./components/Servicios.jsx";
import Contacto from "./components/Contacto.jsx";
import Testimonios from "./components/Testimonios.jsx";
import SobreMi from "./components/SobreMi.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Inicio />,
      },
      {
        path: "servicios",
        element: <Servicios />,
      },
      {
        path: "contacto",
        element: <Contacto />,
      },
      {
        path: "testimonios",
        element: <Testimonios />,
      },
      {
        path: "sobre-mi",
        element: <SobreMi />,
      },
      {
        path: "servicios/consulta-nutricional",
        element: <ConsultaNutricional />,
      },
      {
        path: "servicios/master-nutricion",
        element: <MasterNutricion />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
