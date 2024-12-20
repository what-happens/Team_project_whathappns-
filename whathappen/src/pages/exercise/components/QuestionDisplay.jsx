import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Button from "../../../components/Button";
export default function QuestionDisplay() {
  const [isDisplayQuestion, setIsDisplayQuestion] = useState(true);
  const { parsedData, selectedQid, questions, type, subCode } = useSelector(
    (state) => state.exercise
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
        <Question>
          {questions.find((question) => question.q_id === selectedQid).q_title}
        </Question>
      );
    }
    return <Question>문제를 보시려면 코드의 버튼을 눌러주세요</Question>;
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
      srcDoc = generateIframeContent(parsedData.cssCode, subCode);
    } else if (type === "html") {
      srcDoc = generateIframeContent(subCode, parsedData.htmlCode);
    }
    return <StyledIframe srcDoc={srcDoc} />;
  };

  return (
    <QuestionContainer>
      <ButtonWrapper>
        <Button onClick={onClickDisplayQuestion}>문제 보기</Button>
        <Button onClick={onClickDisplayAnswer}>정답 화면 보기</Button>
      </ButtonWrapper>
      <Content>
        {isDisplayQuestion ? displayQuestion() : displayCorrect()}
      </Content>
    </QuestionContainer>
  );
}

const QuestionContainer = styled.section`
  width: 100%;
  height: 100%;
  border: 1px solid var(--main-color);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 8rem;
  padding: 2rem;
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 8rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Question = styled.p`
  font-size: 2.4rem;
  line-height: 2.4rem;
  word-break: keep-all;
`;
const StyledIframe = styled.iframe`
  width: 100%;
  height: 90%;
  /* 웹킷 기반 브라우저 */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
