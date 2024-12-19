import React from "react";
import { Routes, Route } from "react-router-dom";
import A from "./A";
import B from "./B";
import C from "./C";

const ParentPage = () => {
  return (
    <Routes>
      <Route path="/" element={<A />} />
      <Route path="/:stageId" element={<B />} />
      <Route path="/:stageId/:levelId" element={<C />} />
    </Routes>
  );
};

export default ParentPage;
