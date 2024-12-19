// src/pages/study/C.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const C = () => {
  const { stageId, levelId } = useParams(); // URL 파라미터로 stageId, levelId를 가져옴
  const [learnData, setData] = useState(null); // JSON 데이터를 저장할 상태
  const [error, setError] = useState(null); // 에러 상태

  useEffect(() => {
    if (stageId && levelId) {
      // 동적 import로 JSON 데이터 불러오기
      import(`../../data/stage${stageId}/learn${levelId}.json`)
        .then((module) => {
          setData(module.default); // JSON 파일의 내용을 상태에 저장
        })
        .catch((err) => {
          console.error("Error loading JSON:", err);
          setError("Failed to load data.");
        });
    }
  }, [stageId, levelId]); // stageId와 levelId가 변경될 때마다 실행

  if (error) {
    return <div>{error}</div>;
  }

  if (!learnData) {
    return <div>Loading...</div>;
  }

  // HTML 이스케이프된 코드를 원래대로 복원하는 함수
  const decodeHtmlEntities = (text) => {
    if (!text) return "";
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  };

  return (
    <div>
      <h1>C 페이지</h1>
      <p>Level ID: {levelId}</p>

      <div className="mb-4">
        <Link to={`/aaa/${stageId}`} className="mr-2">
          이전
        </Link>
        <Link to="/aaa">처음으로</Link>
      </div>

      {learnData.map((learn) => (
        <div key={learn.title_id}>
          <h2>{learn.title}</h2>

          {learn.subtitles.map((subtitle) => (
            <div key={subtitle.sub_id}>
              <h3>{subtitle.sub_name}</h3>

              {/* 설명 텍스트 - 줄바꿈 처리 */}
              {subtitle.desc && (
                <div style={{ whiteSpace: "pre-line" }}>{subtitle.desc}</div>
              )}

              {/* 이미지가 있는 경우 */}
              {subtitle.img && (
                <img src={`/images/${subtitle.img}`} alt={subtitle.sub_name} />
              )}

              {/* 코드가 있는 경우 */}
              {subtitle.code && (
                <pre>
                  <code>{decodeHtmlEntities(subtitle.code)}</code>
                </pre>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default C;
