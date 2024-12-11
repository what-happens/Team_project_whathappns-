import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import selectArrow from "../../../assets/selectArrow.png";
import { media } from "../../../styles/MideaQuery";

const SelectBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const selectCommonStyle = css`
  width: 30rem;
  height: 7rem;
  font-size: 2.5rem;
  background-color: white;
  color: var(--main-color);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.medium`
    width: 28.5rem;
  height: 6.5rem;
  font-size: 2.7rem;
`}

  ${media.small`
    width: 23rem;
  height: 6rem;
  font-size: 2.4rem;
`}
`;

const SelectBox = styled.button`
  all: unset;
  ${selectCommonStyle};
  border-radius: 15px;
  margin-bottom: ${(props) => props.marginBottom};
  background-image: url(${selectArrow});
  background-repeat: no-repeat;
  background-position: left 2rem center;
  background-size: 10%;
`;

const SelectItemWrap = styled.div`
  border: 3px solid var(--main-color);
  border-radius: 10px;
  position: absolute;
  z-index: 999;
  margin-top: ${(props) => props.marginTop};
  background-color: #fff;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  ${media.medium`
    margin-top: ${(props) => props.mediumMarginTop || props.marginTop};
  `}

  ${media.small`
    margin-top: ${(props) => props.smallMarginTop || props.marginTop};
  `}
`;

const SelectItem = styled.div`
  ${selectCommonStyle};
  border-radius: 20px;
  &:hover {
    background-color: var(--main-color);
    color: white;
    border-radius: 0;
  }
`;

const quizTypes = ["HTML", "CSS"];
const questionCount = [5, 10, 15, 20];

export function Select() {
  const [isQuizTypeOpen, setQuizTypeOpen] = useState(false);
  const [isQuestionCountOpen, setQuestionCountOpen] = useState(false);
  const [selectedQuizType, setSelectedQuizType] = useState("HTML");
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(5);

  const quizTypeRef = useRef(null);
  const questionCountRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (quizTypeRef.current && !quizTypeRef.current.contains(event.target)) {
        setQuizTypeOpen(false);
      }
      if (
        questionCountRef.current &&
        !questionCountRef.current.contains(event.target)
      ) {
        setQuestionCountOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SelectBoxWrap>
      <SelectBox
        marginBottom="1.4rem"
        onClick={() => setQuizTypeOpen(!isQuizTypeOpen)}
      >
        <span>{selectedQuizType}</span>
      </SelectBox>
      <div ref={quizTypeRef}>
        <SelectItemWrap marginTop="-0.9rem" isVisible={isQuizTypeOpen}>
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
      </div>
      <SelectBox onClick={() => setQuestionCountOpen(!isQuestionCountOpen)}>
        <span>{selectedQuestionCount} 문제</span>
      </SelectBox>
      <div ref={questionCountRef}>
        <SelectItemWrap
          marginTop="-22rem"
          mediumMarginTop="-20rem"
          smallMarginTop="-16rem"
          isVisible={isQuestionCountOpen}
        >
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
      </div>
    </SelectBoxWrap>
  );
}
