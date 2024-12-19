// src/pages/study/C.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep, resetStudy } from "../../redux/studySlice";
import { Link } from "react-router-dom";

const C = () => {
  const dispatch = useDispatch();
  const { levelId, learnData } = useSelector((state) => state.study);

  // const handlePrevious = () => {
  //   dispatch(setCurrentStep(2));
  // };

  const handleReset = () => {
    dispatch(resetStudy());
  };

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
        <Link
          to="/aaa/level"
          onClick={() => dispatch(setCurrentStep(2))}
          className="mr-2"
        >
          이전
        </Link>
        <Link to="/aaa/stage" onClick={handleReset}>
          처음으로
        </Link>
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
