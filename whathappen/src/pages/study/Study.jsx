import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import media from "./media";

import { Link } from "react-router-dom";
import StageContainer from "./components/StageContainer";

const Container = styled.div`
  ${({ theme }) => theme.tablet`
      padding: 0.3rem;
  `};
  height: 100vh;
  background-color: var(--main-color);

  display: flex;
  justify-content: center;
  align-items: center;
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

  font-size: 3rem;
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
  ${({ theme }) => theme.laptop`
      font-size: ${({ theme }) => theme.fontSizes.lg};
      line-height: 6rem;
      margin-bottom: 1rem;
  `};
  ${({ theme }) => theme.tablet`
      font-size: ${({ theme }) => theme.fontSizes.md};
      line-height: 4.2rem;
      margin-bottom: 1rem;
  `};
  ${({ theme }) => theme.mobile`
    font-size: ${({ theme }) => theme.fontSizes.title};
    line-height: 3.5rem;
    margin-bottom: 1rem;
  `};
  text-align: center;
  color: #fff;
  font-size: 6rem;
  font-weight: 700;
  line-height: 7rem;
  margin-bottom: 5rem;
`;

export default function Study() {
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
          <StageContainer></StageContainer>
        </StudySection>
      </Container>
    </ThemeProvider>
  );
}
