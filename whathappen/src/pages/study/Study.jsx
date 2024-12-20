import React from "react";
import { Routes, Route } from "react-router-dom";
import StudyLanding from "./StudyLanding";
import StudyStage from "./StudyStage";
import StudyContents from "./StudyContents";
import StudyFinish from "./StudyFinish";

const Study = () => {
  return (
    <Routes>
      <Route path="/" element={<StudyLanding />} />
      <Route path="/:stageId" element={<StudyStage />} />
      <Route path="/:stageId/:levelId" element={<StudyContents />} />
      <Route path="/finish" element={<StudyFinish />} />
    </Routes>
  );
};

export default Study;
