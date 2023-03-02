import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home.tsx";
import Quiz from "./page/Quiz.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz></Quiz> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
