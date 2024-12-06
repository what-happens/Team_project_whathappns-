import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import Question from "./components/Question";
import UserDisplay from "./components/UserDisplay";
import styled from "styled-components";
import DragableBar from "./components/DragableBar";
import BlankProblem from "./components/BlankProblem";
import BlankOption from "./components/BlankOption";
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

const dummyQuiz = [
  {
    stage: 1,
    question:
      "|=<h1  problem_id='0' incorrect_answers='header,span,div'>명작 영화 소개</h1>=|<h2>Psycho(1960) - 스릴러</h2><img src='#' alt='싸이코 포스터'/>|=<p problem_id='1' incorrect_answers='a,header,meta'>앨프리드 히치콕의 대표작 중 하나로, 로버트 블록이 쓴 동명 소설을 바탕으로 만든 영화.</p>=|<a href='#'>출처: 네이버 영화</a>",
  },
];

export default function Exercise() {
  const [totalWidth, setTotalWidth] = useState(144);
  const [totalHeight, setTotalHeight] = useState(80);
  const [editorWidth, setEditorWidth] = useState(40);
  const [renderWidth, setRenderWidth] = useState(60);
  const [editorItem, setEditorItem] = useState([]);
  const [problems, setProblems] = useState([]); //문제 관리
  const [selectedProblemId, setSelectedProblemId] = useState(null); //id를 값으로 받음
  const [isShow, setIsShow] = useState(false); //버튼 모달 관리
  //const [answer, setAnswer] = useState([]);
  console.log(setTotalWidth, setTotalHeight, isShow, selectedProblemId);

  const selectedProblem = problems.find(
    (problem) => problem.id === selectedProblemId
  );

  const handleDrag = (delta) => {
    setEditorWidth((prev) => Math.max(10, Math.min(prev + delta, 90))); // 최소 10%, 최대 90%
    setRenderWidth((prev) => Math.max(10, Math.min(prev - delta, 90))); // 나머지 영역 계산
  };

  const paresProblem = (data) => {
    //함수 이름 변경
    const pattern = /\|=(.*?)=\|/gis;
    const segements = data.split(pattern);
    const editorFiles = [];
    const problemArr = [];

    segements.forEach((segement, idx) => {
      if (!(idx % 2)) {
        if (segement.trim()) {
          editorFiles.push(<pre key={idx}>{segement}</pre>);
        }
      } else {
        const { tagName, attributes, content } = textToHtml(segement);
        if (!tagName || !attributes.problem_id) return;
        const id = parseInt(attributes.problem_id);
        const problem = {
          id: id,
          correct_answer: `<${tagName}>${content}</${tagName}>`,
          incorrect_answer: attributes.incorrect_answers.map(
            (answer) => `<${answer}>${content}</${answer}>`
          ),
        };

        problemArr.push(problem);

        editorFiles.push(
          <BlankProblem
            key={idx}
            problem={problem}
            onSelect={setSelectedProblemId}
            setIsShow={setIsShow}
          />
        );
      }
    });
    return { editorFiles, problemArr };
  };

  const textToHtml = (htmlText) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");
    const element = doc.body.firstChild;

    if (!element) {
      return { tagName: "", attributes: {}, content: "" }; // 빈 결과 반환
    }

    const tagName = element.tagName.toLowerCase();
    const attributes = Array.from(element.attributes).reduce((acc, attr) => {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
    const content = element.textContent;

    if (attributes.incorrect_answers) {
      attributes.incorrect_answers = attributes.incorrect_answers.split(",");
    }
    return { tagName, attributes, content };
  };

  useEffect(() => {
    const { editorFiles, problemArr } = paresProblem(dummyQuiz[0].question);
    setEditorItem([...editorFiles]);
    setProblems([...problemArr]);
  }, []);

  return (
    <>
      <ExerciseContainer $width={totalWidth} $height={totalHeight}>
        <Editor width={editorWidth} editorItem={editorItem} />
        <DragableBar vertical={true} onDrag={handleDrag} />
        <div style={{ width: `${renderWidth}%`, height: "100%" }}>
          <Question height={50} />
          <HorizontalDivide />
          <UserDisplay height={50} />
        </div>
      </ExerciseContainer>
      {isShow && (
        <BlankOption problem={selectedProblem} setIsShow={setIsShow} />
      )}
    </>
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
