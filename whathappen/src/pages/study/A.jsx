import React from "react";
import PropTypes from "prop-types";

import metaStage0 from "../../data/stage0/meta.json";
import metaStage1 from "../../data/stage1/meta.json";
import metaStage2 from "../../data/stage2/meta.json";
import metaStage3 from "../../data/stage3/meta.json";
import metaStage4 from "../../data/stage4/meta.json";
import metaStage5 from "../../data/stage5/meta.json";
// import stages from "../../../data/stage.json";

const A = ({ onStageIdSet }) => {
  const stageLinks = [
    { id: 0, data: metaStage0 },
    { id: 1, data: metaStage1 },
    { id: 2, data: metaStage2 },
    { id: 3, data: metaStage3 },
    { id: 4, data: metaStage4 },
    { id: 5, data: metaStage5 },
  ];

  const handleStageSelect = (stageLink) => {
    onStageIdSet(stageLink.id, stageLink.data);
  };

  return (
    <div>
      <h1>A 페이지</h1>
      {stageLinks.map((stageLink) => (
        <button key={stageLink.id} onClick={() => handleStageSelect(stageLink)}>
          Stage {stageLink.id}로 이동
        </button>
      ))}
    </div>
  );
};

A.propTypes = {
  onStageIdSet: PropTypes.func.isRequired,
};

export default A;
