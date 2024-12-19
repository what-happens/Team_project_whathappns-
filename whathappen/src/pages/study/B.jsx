// src/pages/study/test/B.jsx
import React from "react";
import PropTypes from "prop-types";

const B = ({ stageId, metaData, onLevelIdSet, onPrevious }) => {
  const handleLevelSelect = (levelId) => {
    // 동적 import 사용
    import(`../../../data/stage${stageId}/learn${levelId}.json`)
      .then((module) => {
        onLevelIdSet(levelId, module.default);
      })
      .catch((error) => {
        console.error("Failed to load learn JSON", error);
      });
  };

  return (
    <div>
      <h1>B 페이지</h1>
      <p>Stage ID: {stageId}</p>
      <button onClick={onPrevious}>이전</button>

      {metaData.map((meta) => (
        <button
          key={meta.level_id}
          onClick={() => handleLevelSelect(meta.level_id)}
        >
          Level {meta.level_id}로 이동
        </button>
      ))}
    </div>
  );
};

B.propTypes = {
  stageId: PropTypes.number.isRequired,
  metaData: PropTypes.array.isRequired,
  onLevelIdSet: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default B;
