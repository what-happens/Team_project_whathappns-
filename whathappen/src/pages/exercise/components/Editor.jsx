import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const dummyQuiz = [
  {
    stage: 1,
    question:
      "<h1>명작 영화 소개</h1>|=<h2 problemid=1' incorrect='h1,span,div'>Psycho(1960) - 스릴러</h2>=|<img src='#' alt='싸이코 포스터'/>|=<p problemid='2'>앨프리드 히치콕의 대표작 중 하나로, 로버트 블록이 쓴 동명 소설을 바탕으로 만든 영화.</p>=|<a href='#'>출처: 네이버 영화</a>",
  },
];

export default function Editor({ width }) {
  const [seperatorFlag, setSeperatorFlag] = useState(false); // 파싱 중에 문제가 먼저 나오는지의 여부
  const [problem, setProblem] = useState([]); //Quiz 데이터를 파싱하여 문제로 만든다.
  const [question, setQuestion] = useState([]); //Quiz 데이터 중 문제가 아닌 부분

  const paresProblem = (data) => {
    //함수 이름 변경
    const pattern = /\|=(.*?)=\|/gis;
    const segements = data.split(pattern);
    const seperateProblem = [];
    const seperateQuestion = [];

    segements.forEach((segement, idx) => {
      if (!(idx % 2)) {
        if (segement) {
          seperateQuestion.push(segement);
        }
      } else {
        //<BlankProblem />
        seperateProblem.push(segement);
      }
    });
    return { seperateProblem, seperateQuestion };
  };

  console.log(seperatorFlag, problem, question);
  useEffect(() => {
    const { seperateProblem, seperateQuestion } = paresProblem(
      dummyQuiz[0].question
    );

    setSeperatorFlag(dummyQuiz[0].question.startsWith("|="));
    setProblem([...seperateProblem]);
    setQuestion([...seperateQuestion]);
  }, []);

  return (
    <EditorContainer $width={width}>
      <p>파일</p>
    </EditorContainer>
  );
}

const EditorContainer = styled.section`
  width: ${(props) => props.$width}%;
  height: 100%;
  border: 1px solid var(--main-color);
  border-radius: 20px 0 0 20px;
`;

Editor.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
