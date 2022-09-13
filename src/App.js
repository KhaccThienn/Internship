import React from "react";
import { Routes, Route } from "react-router-dom"
import MasterLayouts from "~/Components/Layouts/MasterLayouts";
import Home from "~/Components/Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={< MasterLayouts children={<Home />} />} />
      </Routes>
    </>
  );
}

export default App;
