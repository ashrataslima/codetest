import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Task1 } from "../Components/Task #1/task1";
import { Task2 } from "../Components/Task #2/task2";
import { Task3 } from "../Components/Task #3/task3";
export const ProjectRoutes = React.memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/Task1" element={<Task1 />} />
        <Route index path="/Task2" element={<Task2 />} />
        <Route index path="/Task3" element={<Task3 />} />
      </Routes>
    </BrowserRouter>
  );
});
