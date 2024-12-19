import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import media from "./media";
import { Link } from "react-router-dom";
// import StageContainer from "./components/StageContainer";
import backGround from "../../assets/quiz-page-background3.svg";
import PropTypes from "prop-types";
import metaStage0 from "../../data/stage0/meta.json";
import metaStage1 from "../../data/stage1/meta.json";
import metaStage2 from "../../data/stage2/meta.json";
import metaStage3 from "../../data/stage3/meta.json";
import metaStage4 from "../../data/stage4/meta.json";
import metaStage5 from "../../data/stage5/meta.json";

export default function StudyLanding({ onStageIdSet }) {
  const stageLinks = [
    { id: 0, data: metaStage0 },
    { id: 1, data: metaStage1 },
    { id: 2, data: metaStage2 },
    { id: 3, data: metaStage3 },
    { id: 4, data: metaStage4 },
    { id: 5, data: metaStage5 },
  ];

  const handleStageSelect = (stageLink) => {
    onStageIdSet(stageLink.id, stageLink.data);
  };

  return (
    <ThemeProvider theme={{ ...theme, ...media }}>
      <Container>
        <Header>
          <h1 className="sr-only">학습 스테이지 페이지</h1>
          <BackLink to="/">메인으로</BackLink>
        </Header>

        <StudySection>
          <SectionTitle>
            간단하고 쉽게! <br /> 다양한 기능을 함께 만들어요!
          </SectionTitle>
          {stageLinks.map((stageLink) => (
            <button
              key={stageLink.id}
              onClick={() => handleStageSelect(stageLink)}
            >
              Stage {stageLink.id}로 이동
            </button>
          ))}
          {/* <StageContainer></StageContainer> */}
        </StudySection>
      </Container>
    </ThemeProvider>
  );
}

StudyLanding.propTypes = {
  onStageIdSet: PropTypes.func.isRequired,
};

const Container = styled.div`
  ${({ theme }) => theme.tablet`
      padding: 0.3rem;
  `};
  width: 100vw;
  height: 100vh;
  background-image: url(${backGround});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Header = styled.header`
  ${({ theme }) => theme.mobile`
    margin: 2rem;
  `};
  position: fixed;
  top: 0;
  left: 0;
  margin: 4rem;
`;

const BackLink = styled(Link)`
  ${({ theme }) => theme.laptop`
    font-size: ${({ theme }) => theme.fontSizes.title};
    padding-left: 2.3rem;
  `};
  ${({ theme }) => theme.tablet`
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
    padding-left: 2rem;
  `};
  ${({ theme }) => theme.mobile`
    font-size: ${({ theme }) => theme.fontSizes.base};
    padding-left: 1.5rem;
  `};
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 2.5rem;
  font-size: 2rem;
  line-height: 4rem;
  color: #fff;
  text-decoration: none;
  outline: none;

  &::before {
    ${({ theme }) => theme.laptop`
      width: 1.3rem;
      height: 1.3rem;
    `};
    ${({ theme }) => theme.tablet`
      width: 0.9rem;
      height: 0.9rem;
      border-width: 0.4rem 0.4rem 0 0;
    `};
    ${({ theme }) => theme.mobile`
      width: 0.6rem;
      height: 0.6rem;
      border-width: 0.3rem 0.3rem 0 0;
    `};
    position: absolute;
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    left: 0;
    top: 50%;
    border: solid #fff;
    border-width: 0.3rem 0.3rem 0 0;
    transform: translateY(-50%) rotate(225deg);
  }
`;

const StudySection = styled.section`
  /* ${({ theme }) => theme.laptop`
  `};
  ${({ theme }) => theme.tablet`
    width: 3rem;
  `};
  ${({ theme }) => theme.mobile`
    width: 3rem;
  `};
  height: 80rem; */
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  ${({ theme }) => theme.laptop`
      font-size: ${({ theme }) => theme.fontSizes.lg};
      line-height: 6rem;
      margin-bottom: 1rem;
  `};
  ${({ theme }) => theme.tablet`
      font-size: ${({ theme }) => theme.fontSizes.ml};
      line-height: 5rem;
      margin-bottom: 1rem;
  `};
  ${({ theme }) => theme.mobile2`
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 4rem;
    margin-bottom: 1rem;
  `};
  ${({ theme }) => theme.mobile`
    font-size: ${({ theme }) => theme.fontSizes.title};
    line-height: 3.5rem;
    margin-bottom: 1rem;
  `};
  text-align: center;
  color: #fff;
  font-size: 5rem;
  font-weight: 700;
  line-height: 7rem;
  margin-bottom: 5rem;
`;
