import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Button from "../../../components/Button";
export default function QuestionDisplay({ height }) {
  const [isDisplayQuestion, setIsDisplayQuestion] = useState(true);
  const { parsedData, selectedQid, questions, type, subcode } = useSelector(
    (state) => state.learn
  );

  const onClickDisplayQuestion = () => {
    setIsDisplayQuestion(true);
  };

  const onClickDisplayAnswer = () => {
    setIsDisplayQuestion(false);
  };

  const displayQuestion = () => {
    if (selectedQid !== null) {
      return (
        <p>
          {questions.find((question) => question.q_id === selectedQid).q_title}
        </p>
      );
    }
    return <p>문제를 보시려면 코드의 버튼을 눌러주세요</p>;
  };

  const generateIframeContent = (cssCode, htmlCode) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode} 
      </body>
      </html>
    `;
  };

  const displayCorrect = () => {
    let srcDoc = "";
    if (type === "css") {
      srcDoc = generateIframeContent(parsedData.cssCode, subcode);
    } else if (type === "html") {
      srcDoc = generateIframeContent(subcode, parsedData.htmlCode);
    }
    return <iframe srcDoc={srcDoc} width={600} height={400} />;
  };

  return (
    <QuestionContainer $height={height}>
      <div>
        <Button onClick={onClickDisplayQuestion}>문제 보기</Button>
        <Button onClick={onClickDisplayAnswer}>정답 화면 보기</Button>
      </div>
      {isDisplayQuestion ? displayQuestion() : displayCorrect()}
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
