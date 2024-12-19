// src/pages/study/B.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLevelInfo, setCurrentStep } from "../../redux/studySlice";
import { Link } from "react-router-dom";

const B = () => {
  const dispatch = useDispatch();
  const { stageId, metaData } = useSelector((state) => state.study);

  const handleLevelSelect = (levelId) => {
    import(`../../data/stage${stageId}/learn${levelId}.json`)
      .then((module) => {
        dispatch(
          setLevelInfo({
            levelId,
            learnData: module.default,
          })
        );
      })
      .catch((error) => {
        console.error("Failed to load learn JSON", error);
      });
  };

  // const handlePrevious = () => {
  //   dispatch(setCurrentStep(1));
  // };

  return (
    <div>
      <h1>B 페이지</h1>
      <p>Stage ID: {stageId}</p>
      <Link to="/aaa/stage" onClick={() => dispatch(setCurrentStep(1))}>
        이전
      </Link>

      <div>
        {Array.isArray(metaData) &&
          metaData.map((meta) => (
            <Link
              key={meta.level_id}
              to="/aaa/learn"
              onClick={() => handleLevelSelect(meta.level_id)}
              className="mr-2" // 링크 사이 간격
            >
              Level {meta.level_id}로 이동
            </Link>
          ))}
      </div>
    </div>
  );
};

export default B;
