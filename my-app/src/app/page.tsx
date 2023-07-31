import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { NavigationBar} from "./components/navigation_bar";
import Router from "./pages/router";
import Footer from "./components/footer";

export default function Home() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}
