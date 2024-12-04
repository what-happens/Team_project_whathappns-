import { useState } from "react";
import styled, { css } from "styled-components";
import selectArrow from "../../../assets/selectArrow.png";

const SelectBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const selectCommonStyle = css`
  width: 33rem;
  height: 7rem;
  font-size: 3rem;
  font-weight: 400;
  color: #b3b3b3;
  border: 3px solid #2e5dff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectBox = styled.button`
  all: unset;
  ${selectCommonStyle};
  border-radius: 10px;
  margin-bottom: ${(props) => props.marginBottom};
  background-image: url(${selectArrow});
  background-repeat: no-repeat;
  background-position: left 2rem center;
  background-size: 10%;
`;

const SelectItemWrap = styled.div`
  border: 3px solid #2e5dff;
  border-radius: 10px;
  position: absolute;
  z-index: 999;
  margin-top: ${(props) => props.marginTop};
  background-color: #fff;
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

const SelectItem = styled.div`
  ${selectCommonStyle};
  border: 1px solid#2e5dff;
  &:hover {
    background-color: #edecec;
  }
`;

const quizTypes = ["HTML", "CSS"];
const questionCount = [5, 10, 15, 20];

export function Select() {
  const [isQuizTypeOpen, setQuizTypeOpen] = useState(false);
  const [isQuestionCountOpen, setQuestionCountOpen] = useState(false);
  const [selectedQuizType, setSelectedQuizType] = useState("HTML");
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(5);

  return (
    <SelectBoxWrap>
      {/* Quiz Type Selector */}
      <SelectBox
        marginBottom="1.4rem"
        onClick={() => setQuizTypeOpen(!isQuizTypeOpen)}
      >
        <span>{selectedQuizType}</span>
      </SelectBox>
      <SelectItemWrap marginTop="8rem" isVisible={isQuizTypeOpen}>
        {quizTypes.map((type, index) => (
          <SelectItem
            key={index}
            onClick={() => {
              setSelectedQuizType(type);
              setQuizTypeOpen(false);
            }}
          >
            {type}
          </SelectItem>
        ))}
      </SelectItemWrap>

      {/* Question Count Selector */}
      <SelectBox onClick={() => setQuestionCountOpen(!isQuestionCountOpen)}>
        <span>{selectedQuestionCount} 문제</span>
      </SelectBox>
      <SelectItemWrap marginTop="-2rem" isVisible={isQuestionCountOpen}>
        {questionCount.map((count, index) => (
          <SelectItem
            key={index}
            onClick={() => {
              setSelectedQuestionCount(count);
              setQuestionCountOpen(false);
            }}
          >
            {count} 문제
          </SelectItem>
        ))}
      </SelectItemWrap>
    </SelectBoxWrap>
  );
}
