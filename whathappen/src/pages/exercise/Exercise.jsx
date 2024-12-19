import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";
import QuestionDisplay from "./components/QuestionDisplay";
import styled from "styled-components";
import DragableBar from "./components/DragableBar";
import { fetchJson } from "../../utils/fetchJson";
import useExercise from "../../hooks/useExercise";
import { Link, useParams } from "react-router-dom";
import back from "../../assets/back_link.png";

// import Button from "../../components/Button";
export default function Exercise() {
  const [totalWidth, setTotalWidth] = useState(144);
  const [totalHeight, setTotalHeight] = useState(80);
  const [editorWidth, setEditorWidth] = useState(40);
  const [renderWidth, setRenderWidth] = useState(60);
  const {
    setExerciseCode,
    setExerciseQuestions,
    setExerciseType,
    setExerciseSubcode,
  } = useExercise();
  const { stage, level } = useParams();
  const handleDrag = (delta) => {
    setEditorWidth((prev) => Math.max(40, Math.min(prev + delta, 90))); // 최소 10%, 최대 90%
    setRenderWidth((prev) => Math.max(40, Math.min(prev - delta, 90))); // 나머지 영역 계산
  };

  console.log(setTotalHeight, setTotalWidth);
  useEffect(() => {
    // 비동기 작업을 처리하는 함수
    const loadJsonData = async () => {
      try {
        const json = await fetchJson(stage, level, "level");
        setExerciseCode(json.default.code); // import는 .default로 접근해야 함
        setExerciseQuestions(json.default.questions);
        setExerciseType(json.default.code_type);
        setExerciseSubcode(json.default.sub_code);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    loadJsonData();
    // 비동기 함수 호출
  }, []);

  return (
    <>
      <nav>
        <BackLink to="/study" />
      </nav>
      <ExerciseContainer $width={totalWidth} $height={totalHeight}>
        <Editor width={editorWidth} />
        <DragableBar vertical={true} onDrag={handleDrag} />
        <RightContainer style={{ width: `${renderWidth}%`, height: "100%" }}>
          <QuestionDisplay />
        </RightContainer>
      </ExerciseContainer>
      <ExerciseFooter>
        <nav>
          <StyledLink to={`/study/${stage}/${level}`}>&lt; 이전으로</StyledLink>
        </nav>
        <StyledLink>제출하기 &gt;</StyledLink>
      </ExerciseFooter>
    </>
  );
}

const ExerciseContainer = styled.main`
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
  overflow: hidden;
`;

const ExerciseFooter = styled.footer`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(90vw, 120rem); // 화면의 90% 또는 최대 120rem
`;

const RightContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  & > :first-child,
  & > :last-child {
    flex: 1;
    min-height: 0;
  }
`;

const BackLink = styled(Link)`
  width: 4rem;
  height: 4rem;
  margin: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  background-image: url(${back});
  background-size: contain;
  text-decoration: none;
  outline: none;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.6rem;
`;
