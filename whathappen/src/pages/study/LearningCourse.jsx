import React from "react";
// import { Link } from "react-router-dom";
// import CardSlider from "./components/CardSlider";
import CardSlider from "./components/CardSlider";
import styled from "styled-components";
import { Link } from "react-router-dom";
import back from "../../assets/back_link.png";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  position: relative;
`;

const Header = styled.header`
  color: var(--main-color);
  h2 {
    font-size: 6.5rem;
    font-family: "GmarketSansBold";
    text-align: center;
  }
`;

const BackLink = styled(Link)`
  width: 5rem;
  height: 5rem;
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

export default function LearningCourse() {
  return (
    <Container>
      <h1 className="sr-only">학습 페이지</h1>
      <Header>
        <BackLink />
        <h2>Stage 01</h2>
      </Header>
      <CardSlider></CardSlider>
    </Container>
  );
}
