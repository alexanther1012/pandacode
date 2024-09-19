import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./assets/sass/app.scss";

import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import Building from "./components/pages/Building";
import BodaCivil from "./components/pages/BodaCivil";
import TeAmo3Millones from "./components/pages/TeAmo3Millones";
import FloresAmarillas from "./components/pages/FloresAmarillas";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import darkTheme from "./theme";

const App = () => {
  document.title = "Panda Code";

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <div className="app-body" style={{ paddingTop: "4rem" }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/boda-civil" element={<BodaCivil />} />
            <Route path="/te-amo-3-millones" element={<TeAmo3Millones />} />
            <Route path="/flores-amarillas" element={<FloresAmarillas />} />
            <Route path="/building" element={<Building />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
