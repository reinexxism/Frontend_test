import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChargePage from "../pages/ChargePage";
import ChartPage from "../pages/ChartPage";
import EventPage from "../pages/EventPage";
import NewsPage from "../pages/NewsPage";
import StorePage from "../pages/StorePage";
import WhookPage from "../pages/WhookPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<ChartPage />} />
      <Route path="/whookpage" element={<WhookPage />} />
      <Route path="/eventpage" element={<EventPage />} />
      <Route path="/newspage" element={<NewsPage />} />
      <Route path="/storepage" element={<StorePage />} />
      <Route path="/chargepage" element={<ChargePage />} />
    </Routes>
  );
}
