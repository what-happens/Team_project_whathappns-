import React from "react";
import { Link, useParams } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import media from "./media";
import CardSlider from "./components/CardSlider";
import filed from "../../assets/study-state-background.svg";
import { X } from "lucide-react";

export default function StudyStage() {
  const { stageId } = useParams();
  const stageInfo = String(
    isNaN(Number(stageId)) ? "not available." : Number(stageId) + 1
  ).padStart(2, "0");

  return (
    <ThemeProvider theme={{ ...theme, ...media }}>
      <Container>
        <h1 className="sr-only">학습 과정 페이지</h1>
        <Header>
          <BackLink to="/study">
            <StyledX />
          </BackLink>
          <Title>STAGE {stageInfo}</Title>
        </Header>
        <CardSlider></CardSlider>
      </Container>
    </ThemeProvider>
  );
}

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
    top: 2rem;
    left: 2rem;
    `};
  position: fixed;
  top: 2rem;
  left: 7rem;
  text-decoration: none;
  outline: none;
  color: #c4c4c4;
  cursor: pointer;
  &:hover {
    color: #ff2e62;
  }
`;

const StyledX = styled(X)`
  ${({ theme }) => theme.mobile`
    width: 3.5rem;
    height: 3.5rem;
    `};
  width: 5rem;
  height: 5rem;
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
