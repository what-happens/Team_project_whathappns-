import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import ToggleMenu from "./components/ToggleMenu";
import LearnSection from "./components/LearnSection";
import back from "../../assets/back_link.png";

const Wrap = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const BackLink = styled(Link)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background-image: url(${back});
  width: 5rem;
  height: 5rem;
  background-size: contain;
  text-decoration: none;
  outline: none;
`;

const NextLink = styled(Link)`
  position: fixed; /* 화면에 고정 */
  font-size: 3rem;
  color: black;
  bottom: 2rem; /* 화면 아래에서 간격 */
  right: 2rem; /* 화면 오른쪽에서 간격 */
  text-decoration: none;
  outline: none;

  text-decoration: none;
  outline: none;
  span {
    font-weight: bold;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6rem;
  height: 100%;
  padding: 12rem 3rem;
`;

const NavContent = styled.div`
  width: 30rem;
  height: 100%;
  border: 1px solid var(--main-color);
  border-radius: 2rem;
  padding: 5rem 2rem;

  h2 {
    color: var(--main-color);
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 3.5rem;
    margin-bottom: 3rem;
  }
`;

export default function LearningPage() {
  return (
    <Wrap>
      <header>
        <h1 className="sr-only">학습 페이지</h1>
        <BackLink />
      </header>
      <Container>
        <NavContent>
          <h2>Level 01</h2>
          <ToggleMenu></ToggleMenu>
        </NavContent>
        <LearnSection></LearnSection>
      </Container>
      <NextLink>
        다음으로 <span>&gt;</span>
      </NextLink>
    </Wrap>
  );
}
