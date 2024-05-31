import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import React, { lazy } from "react";
import "animate.css/animate.compat.css"

const Home = lazy(() => import('./pages/Home/Home'));
const Qa = lazy(() => import('./pages/Qa/Qa'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {

  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={"/qa"} element={<Qa />} />
        <Route path={"/contacts"} element={<Contacts />} />
        <Route path={"*"} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;