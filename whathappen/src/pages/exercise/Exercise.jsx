import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";
import QuestionDisplay from "./components/QuestionDisplay";
import UserDisplay from "./components/UserDisplay";
import styled from "styled-components";
import DragableBar from "./components/DragableBar";
import { fetchJson } from "../../utils/fetchJson";
import useExercise from "../../hooks/useExercise";
// import Button from "../../components/Button";
export default function Exercise() {
  const [totalWidth, setTotalWidth] = useState(144);
  const [totalHeight, setTotalHeight] = useState(80);
  const [editorWidth, setEditorWidth] = useState(40);
  const [renderWidth, setRenderWidth] = useState(60);
  const { setExerciseCode, setExerciseQuestions } = useExercise();

  console.log([setTotalWidth, setTotalHeight]);

  const handleDrag = (delta) => {
    setEditorWidth((prev) => Math.max(10, Math.min(prev + delta, 90))); // 최소 10%, 최대 90%
    setRenderWidth((prev) => Math.max(10, Math.min(prev - delta, 90))); // 나머지 영역 계산
  };

  useEffect(() => {
    // 비동기 작업을 처리하는 함수
    const loadJsonData = async () => {
      try {
        const json = await fetchJson(0, 0, "level");
        setExerciseCode(json.default.code); // import는 .default로 접근해야 함
        setExerciseQuestions(json.default.questions);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    loadJsonData();
    // 비동기 함수 호출
  }, []);

  return (
    <>
      <ExerciseContainer $width={totalWidth} $height={totalHeight}>
        <Editor width={editorWidth} />
        <DragableBar vertical={true} onDrag={handleDrag} />
        <div style={{ width: `${renderWidth}%`, height: "100%" }}>
          <QuestionDisplay height={50} />
          <HorizontalDivide />
          <UserDisplay height={48} />
        </div>
      </ExerciseContainer>
    </>
  );
}

const ExerciseContainer = styled.section`
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin: 5rem auto;
  border-radius: 2rem;
  width: ${(props) => props.$width}rem;
  height: ${(props) => props.$height}rem;
  /* border: 1px solid #c4c4c4; */
  width: min(90vw, 120rem); // 화면의 90% 또는 최대 120rem
  height: min(80vh, 70rem); // 화면의 80% 또는 최대 70rem
`;

const HorizontalDivide = styled.div`
  height: ${(props) => props.$height}rem;
  height: 13px;
  width: 100%;
  background-color: white;
  border: 1px solid #2e5dfe;
  cursor: pointer;
`;
