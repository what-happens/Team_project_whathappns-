import React from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import media from "./media";
import CardSlider from "./components/CardSlider";
import back from "../../assets/back_link.png";
import filed from "../../assets/study-state-background.svg";

const Container = styled.div`
  ${({ theme }) => theme.laptop`
    gap: 2rem;
  `};
  ${({ theme }) => theme.tablet`
    gap: 2rem;
  `};
  ${({ theme }) => theme.mobile`
    gap: 2rem;
  `};
  background-image: url(${filed});
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  gap: 5rem;
  position: relative;
`;

const BackLink = styled(Link)`
  ${({ theme }) => theme.mobile`
    width: 4.2rem;
    height: 4.2rem;
    margin: 3rem;
    `};
  width: 4rem;
  height: 4rem;
  margin: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  background-image: url(${back});
  background-size: contain;
  text-decoration: none;
  outline: none;
`;

const Header = styled.header`
  color: var(--main-color);
  h2 {
    ${({ theme }) => theme.tablet`
      font-size: ${({ theme }) => theme.fontSizes.xl};
    `};
    ${({ theme }) => theme.mobile`
      font-size: ${({ theme }) => theme.fontSizes.lg};
    `};

    font-size: 6.5rem;
    font-family: "GmarketSansBold";
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: white;
  font-weight: 700;
`;

export default function LearningCourse() {
  return (
    <ThemeProvider theme={{ ...theme, ...media }}>
      <Container>
        <h1 className="sr-only">학습 과정 페이지</h1>
        <Header>
          <BackLink to="/study" />
          <Title>STAGE 01</Title>
        </Header>
        <CardSlider></CardSlider>
      </Container>
    </ThemeProvider>
  );
}
