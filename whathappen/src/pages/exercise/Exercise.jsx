import React, { useState } from "react";
import Editor from "./components/Editor";
import Question from "./components/Question";
import UserDisplay from "./components/UserDisplay";
import styled from "styled-components";
import DragableBar from "./components/DragableBar";
/* 
const problems = [
  {
    id: 0,
    correct_answer: "<button>Like</button>",
    incorrect_answer: ["<p>Like</p>", "<a>Like</a>", "<em>Like</em>"],
  },
  {
    id: 1,
    correct_answer: "<button>unLike</button>",
    incorrect_answer: ["<p>unLike</p>", "<a>unLike</a>", "<em>unLike</em>"],
  },
]; */

export default function Exercise() {
  const [totalWidth, setTotalWidth] = useState(144);
  const [totalHeight, setTotalHeight] = useState(80);
  const [editorWidth, setEditorWidth] = useState(40);
  const [renderWidth, setRenderWidth] = useState(60);

  const handleDrag = (delta) => {
    setEditorWidth((prev) => Math.max(10, Math.min(prev + delta, 90))); // 최소 10%, 최대 90%
    setRenderWidth((prev) => Math.max(10, Math.min(prev - delta, 90))); // 나머지 영역 계산
  };

  console.log(setTotalWidth, setTotalHeight);
  /*const [selectedProblemId, setSelectedProblemId] = useState(null); //id를 값으로 받음
  const [isShow, setIsShow] = useState(false);

  const selectedProblem = problems.find(
    (problem) => problem.id === selectedProblemId
  );*/
  return (
    <ExerciseContainer $width={totalWidth} $height={totalHeight}>
      <Editor width={editorWidth} />
      <DragableBar vertical={true} onDrag={handleDrag} />
      <div style={{ width: `${renderWidth}%`, height: "100%" }}>
        <Question height={50} />
        <HorizontalDivide />
        <UserDisplay height={50} />
      </div>
      {/* {isShow && <BlankOption problem={selectedProblem} />} */}
    </ExerciseContainer>
  );
}

const ExerciseContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;
  border-radius: 1rem;
  width: ${(props) => props.$width}rem;
  height: ${(props) => props.$height}rem;
  border: 1px solid #c4c4c4;
`;

const HorizontalDivide = styled.div`
  height: 8px;
  width: 100%;
  background-color: black;
  cursor: pointer;
`;
