import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import KursPage from "./KursPage";
import Raspisanya from "./Raspisanya";
import MainLayout from "./MainLayout";

function AppRouter() {
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />}>
        <Route index element={<Navigate to={<KursPage />} />} />
        <Route path="Courses" element={<KursPage />} />

        <Route path="Schedule" element={<Raspisanya />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
