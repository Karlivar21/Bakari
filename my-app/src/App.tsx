import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { NavigationBar} from "./components/navigation_bar";
import Router from "./pages/router";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
