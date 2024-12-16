import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import levelData from "./levelDate.json";
import back from "../../assets/back_link.png";

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 10rem 7rem;
`;

const HeaderContainer = styled.header`
  width: 30rem;
  border: 1px solid var(--main-color);
  border-radius: 20px;
`;

const BackLink = styled(Link)`
  position: fixed;
  top: 2rem;
  left: 7rem;
  background-image: url(${back});
  width: 5rem;
  height: 5rem;

  background-size: contain;
  text-decoration: none;
  outline: none;
`;

// start MenuContainer

const MenuTitle = styled.h2`
  color: var(--main-color);
  padding: 3rem 1.5rem;
  font-size: 3.2rem;
  font-weight: 700;
`;

const MenuItem = styled.li`
  margin: 0;
  padding: 15px;
  list-style: none;

  font-size: 2.4rem;
  font-weight: 500;

  cursor: pointer;
  background-color: ${(props) =>
    props.active ? "var(--main-color)" : "transparent"};
  color: ${(props) => (props.active ? "#ffffff" : "#000")};
  &:hover {
    background-color: var(--main-color);
  }
  transition: background-color 0.3s ease;
`;
// end MenuContainer

// start ContentContainer
const ContentContainer = styled.main`
  flex-grow: 1;
  padding: 20px;
  border: 1px solid black;
  position: relative;
  overflow-y: scroll;
`;

const ContentItem = styled.div`
  margin-bottom: 2rem;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 5px;
`;
// end ContentContainer

// start NavigationButtons
const NavigationButtons = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  transform: translateX(-50%);
  display: flex;
  height: 5rem;
  gap: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  background-color: #fff;
  border: 1px solid var(--main-color);
  border-radius: 1rem;
  color: var(--main-color);
  cursor: pointer;
  &:disabled {
    /* background-color: #cccccc; */
    cursor: not-allowed;
  }
  &:hover {
    background-color: var(--main-color);
    color: #fff;
  }
`;
// end NavigationButtons

const LevelNavigation = () => {
  const [activeLevel, setActiveLevel] = useState(0);

  const handlePrevLevel = () => {
    if (activeLevel > 0) {
      setActiveLevel(activeLevel - 1);
    }
  };

  const handleNextLevel = () => {
    if (activeLevel < levelData.length - 1) {
      setActiveLevel(activeLevel + 1);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <h1 className="sr-only">학습 페이지</h1>
        <BackLink />
        <nav>
          <MenuTitle>Level 01</MenuTitle>
          <h3 className="sr-only">목차</h3>
          {levelData.map((level, index) => (
            <MenuItem
              key={level.id}
              active={activeLevel === index}
              onClick={() => setActiveLevel(index)}
            >
              {level.title}
            </MenuItem>
          ))}
        </nav>
      </HeaderContainer>

      <ContentContainer>
        {levelData[activeLevel].subtitles.map((subtitle) => (
          <ContentItem key={subtitle.id}>
            <h3>{subtitle.title}</h3>
            <pre>
              <code>{subtitle.content}</code>
            </pre>
          </ContentItem>
        ))}

        <NavigationButtons>
          <Button onClick={handlePrevLevel} disabled={activeLevel === 0}>
            &lt;
          </Button>
          <Button
            onClick={handleNextLevel}
            disabled={activeLevel === levelData.length - 1}
          >
            &gt;
          </Button>
        </NavigationButtons>
      </ContentContainer>
    </Container>
  );
};

export default LevelNavigation;
