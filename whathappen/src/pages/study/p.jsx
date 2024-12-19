import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import A from "./A";
import B from "./B";
import C from "./C";

const ParentPage = () => {
  const currentStep = useSelector((state) => state.study.currentStep);

  // 현재 스텝에 따라 적절한 경로로 리다이렉트
  const getRedirect = () => {
    switch (currentStep) {
      case 1:
        return <Navigate to="/stage" replace />;
      case 2:
        return <Navigate to="/level" replace />;
      case 3:
        return <Navigate to="/learn" replace />;
      default:
        return <Navigate to="/stage" replace />;
    }
  };

  return (
    <Routes>
      <Route path="/stage" element={<A />} />
      <Route path="/level" element={<B />} />
      <Route path="/learn" element={<C />} />
      <Route path="/" element={getRedirect()} />
    </Routes>
  );
};

export default ParentPage;
