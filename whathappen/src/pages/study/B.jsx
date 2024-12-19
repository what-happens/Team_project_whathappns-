// src/pages/study/B.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const B = () => {
  const { stageId } = useParams();
  const [levelData, setLevelData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (stageId) {
      // 동적 import로 JSON 데이터 불러오기
      import(`../../data/stage${stageId}/meta.json`)
        .then((module) => {
          setLevelData(module.default);
        })
        .catch((err) => {
          console.error("Error loading JSON:", err);
          setError("Failed to load data.");
        });
    }
  }, [stageId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!levelData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>B 페이지</h1>
      <p>Stage ID: {stageId}</p>
      <Link to="/aaa">이전</Link>

      <div>
        {Array.isArray(levelData) &&
          levelData.map((level) => (
            <Link
              key={level.level_id}
              to={`/aaa/${stageId}/${level.level_id}`}
              className="mr-2" // 링크 사이 간격
            >
              Level {level.level_id}로 이동
            </Link>
          ))}
      </div>
    </div>
  );
};

export default B;
