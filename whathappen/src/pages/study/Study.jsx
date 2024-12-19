import React from "react";
import { Routes, Route } from "react-router-dom";
import StudyLanding from "./StudyLanding";
import StudyStage from "./StudyStage";
import StudyContents from "./StudyContents";

const Study = () => {
  return (
    <Routes>
      <Route path="/" element={<StudyLanding />} />
      <Route path="/:stageId" element={<StudyStage />} />
      <Route path="/:stageId/:levelId" element={<StudyContents />} />
    </Routes>
  );
};

export default Study;
