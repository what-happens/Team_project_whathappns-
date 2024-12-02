import styled from "styled-components";
// import selectArrow from "../../../assets/img/selectArrow.png";

const SelectBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectBox = styled.button`
  all: unset;
  width: 41.8rem;
  height: 10.1rem;
  font-size: 4rem;
  font-weight: 400;
  color: #b3b3b3;
  border: 3px solid #2e5dff;
  border-radius: 10px;
  margin-bottom: ${(props) => props.marginBottom};
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const AllowImg = styled.img``

const SelectItemWrap = styled.div`
  border: 3px solid #2e5dff;
  border-radius: 10px;
  position: absolute;
  z-index: 999;
  margin-top: ${(props) => props.marginTop};
  background-color: #fff;
`;

const SelectItem = styled.div`
  width: 41.8rem;
  height: 10.1rem;
  font-size: 4rem;
  font-weight: 400;
  color: #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid#2e5dff;
`;

const quizTypes = ["HTML", "CSS"];
const questionCount = [5, 10, 15, 20];

export function Select() {
  return (
    <SelectBoxWrap>
      <SelectBox marginBottom="1.4rem">
        <span>HTML</span>
      </SelectBox>
      <SelectItemWrap marginTop="11rem">
        {quizTypes.map((type, index) => (
          <SelectItem key={index}>{type}</SelectItem>
        ))}
      </SelectItemWrap>
      <SelectBox>
        <span>5 문제</span>
      </SelectBox>
      <SelectItemWrap marginTop="-3rem">
        {questionCount.map((count, index) => (
          <SelectItem key={index}>{count} 문제</SelectItem>
        ))}
      </SelectItemWrap>
    </SelectBoxWrap>
  );
}
