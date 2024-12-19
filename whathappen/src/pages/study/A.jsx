import React from "react";
import { Link } from "react-router-dom";
import stages from "../../data/stages.json";

const A = () => {
  return (
    <div>
      <h1>A 페이지</h1>
      <div>
        {stages.map((stageLink) => (
          <Link
            key={stageLink.stage_id}
            to={`/aaa/${stageLink.stage_id}`}
            className="mr-2"
          >
            Stage {stageLink.stage_id}로 이동
          </Link>
        ))}
      </div>
    </div>
  );
};

export default A;
