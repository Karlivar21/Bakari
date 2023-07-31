import { routerType } from "../types/router.types";
import Vorur from "./Braud";
import Home from "./Home";
import Pantanir from "./Pantanir";
import Runstykki from "./Runstykki";
import Bakkelsi from "./Bakkelsi";
import Kokur from "./Kokur";
import HafaSamband from "./Hafa_samband";
import React from "react";

const pagesData: routerType[] = [
  {
    path: "/",
    element: <Home />,
    title: "home"
  },
  {
    path: "vorur",
    element: <Vorur />,
    title: "vörur"
  }, 
  {
    path: "kokur",
    element: <Kokur/>,
    title: "Kökur"
  },
  {
    path: "umokkur",
    element: <div>um okkur</div>,
    title: "um okkur"
  },
  {
    path: "hafa-samband",
    element: <HafaSamband/>,
    title: "samband"
  },
  {
    path: "pantanir",
    element: <Pantanir />,
    title: "pantanir"
  },
  {
    path: "braud",
    element: <Vorur />,
    title: "brauð"
  },
  {
    path: "runstykki",
    element: <Runstykki/>,
    title: "runstykki"
  },
  {
    path: "bakkelsi",
    element: <Bakkelsi/>,
    title: "bakkelsi"
  },
];

export default pagesData;