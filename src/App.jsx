import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import RecipeDetail from "./components/pages/RecipeDetail";
import Header from "./components/Header";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  </>
);

export default App;
