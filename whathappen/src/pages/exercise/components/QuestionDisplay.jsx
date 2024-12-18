import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Button from "../../../components/Button";
export default function QuestionDisplay({ height }) {
  const [displayQuestion, setDisplayQuestion] = useState(true);
  const { parsedData } = useSelector((state) => state.learn);
  const onClickDisplayQuestion = () => {
    setDisplayQuestion(true);
  };

  const onClickDisplayAnswer = () => {
    setDisplayQuestion(false);
  };
  return (
    <QuestionContainer $height={height}>
      <div>
        <Button onClick={onClickDisplayQuestion}>문제 보기</Button>
        <Button onClick={onClickDisplayAnswer}>정답 화면 보기</Button>
      </div>
      {displayQuestion ? (
        <p>문제를 보시려면 코드의 버튼을 눌러주세요</p>
      ) : (
        <iframe
          srcDoc={parsedData.htmlCode} // srcdoc 속성에 HTML 코드 삽입
          width="600"
          height="400"
          title="HTML Content"
        />
      )}
    </QuestionContainer>
  );
}

const QuestionContainer = styled.section`
  width: 100%;
  height: ${(props) => props.$height}%;
  border: 1px solid var(--main-color);
  border-radius: 0px 20px 0px 0px;
`;

QuestionDisplay.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
