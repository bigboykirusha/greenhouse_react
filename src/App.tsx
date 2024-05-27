import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Qa from "./pages/Qa/Qa";
import Contacts from "./pages/Contacts/Contacts";
import React from "react";
import "animate.css/animate.compat.css"
function App() {

  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<Home />} /> {/* Используйте "index" вместо пути */}
        <Route path={"/qa"} element={<Qa />} />
        <Route path={"/contacts"} element={<Contacts />} />
        <Route path={"*"} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;