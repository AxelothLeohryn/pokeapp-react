import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import SearchComponent from "./SearchComponent";
import Details from "./Details";
const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/search" element={<SearchComponent />} />
          <Route path="/pokemon/:id" element={<Details />} />

          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
