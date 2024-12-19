import React from "react";
import { useDispatch } from "react-redux";
import { setStageInfo } from "../../redux/studySlice";
import { Link } from "react-router-dom";

import metaStage0 from "../../data/stage0/meta.json";
import metaStage1 from "../../data/stage1/meta.json";
import metaStage2 from "../../data/stage2/meta.json";
import metaStage3 from "../../data/stage3/meta.json";
import metaStage4 from "../../data/stage4/meta.json";
import metaStage5 from "../../data/stage5/meta.json";

const A = () => {
  const dispatch = useDispatch();

  const stageLinks = [
    { stage_id: 0, data: metaStage0 },
    { stage_id: 1, data: metaStage1 },
    { stage_id: 2, data: metaStage2 },
    { stage_id: 3, data: metaStage3 },
    { stage_id: 4, data: metaStage4 },
    { stage_id: 5, data: metaStage5 },
  ];

  const handleStageSelect = (stageLink) => {
    dispatch(
      setStageInfo({
        stageId: stageLink.stage_id,
        metaData: stageLink.data,
      })
    );
  };

  return (
    <div>
      <h1>A 페이지</h1>
      <div>
        {stageLinks.map((stageLink) => (
          <Link
            key={stageLink.stage_id}
            to="/aaa/level"
            onClick={() => handleStageSelect(stageLink)}
            className="mr-2" // 링크 사이 간격
          >
            Stage {stageLink.stage_id}로 이동
          </Link>
        ))}
      </div>
    </div>
  );
};

export default A;
