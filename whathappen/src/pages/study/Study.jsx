import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IconStage1 from "../../assets/icon_stage1.png";
import IconStage2 from "../../assets/icon_stage2.png";
import IconStage3 from "../../assets/icon_stage3.png";
import IconStage4 from "../../assets/icon_stage4.png";
import IconStage5 from "../../assets/icon_stage5.png";
import IconStage6 from "../../assets/icon_stage6.png";
import IconStage7 from "../../assets/icon_stage7.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4rem;
  height: 100vh;

  position: relative;
  background-color: var(--main-color);
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  margin: 4rem;
`;

const BackLink = styled(Link)`
  font-size: 3rem;
  color: #fff;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 2.5rem;
  text-decoration: none;
  outline: none;

  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    left: 0;
    top: 50%;
    border: solid #fff;
    border-width: 0.5rem 0.5rem 0 0;
    transform: translateY(-50%) rotate(225deg);
  }
`;

const StudySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 5rem;
  color: #fff;
  margin-bottom: 5rem;
`;

const StageContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
`;

const StageLink = styled.a`
  width: 200px;
  height: 200px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const stageIcons = [
  IconStage1,
  IconStage2,
  IconStage3,
  IconStage4,
  IconStage5,
  IconStage6,
  IconStage7,
];

export default function Study() {
  return (
    <Container>
      <Header>
        <h1 className="sr-only">학습 스테이지 페이지</h1>
        <BackLink to="/">메인으로</BackLink>
      </Header>

      <StudySection>
        <SectionTitle>
          간단하고 쉽게! <br /> 다양한 기능을 함께 만들어요!
        </SectionTitle>

        <StageContainer>
          {stageIcons.slice(0, 4).map((icon, index) => (
            <StageLink
              key={index}
              href="#"
              style={{ backgroundImage: `url(${icon})` }}
            />
          ))}
        </StageContainer>

        <StageContainer>
          {stageIcons.slice(4).map((icon, index) => (
            <StageLink
              key={index + 4}
              href="#"
              style={{ backgroundImage: `url(${icon})` }}
            />
          ))}
        </StageContainer>
      </StudySection>
    </Container>
  );
}
