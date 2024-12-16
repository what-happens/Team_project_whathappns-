import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../data/yejin/learn(stage01-02).json";
import back from "../../assets/back_link.png";

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 10rem 7rem;
`;

const HeaderContainer = styled.header`
  width: 20%;
  border: 1px solid var(--main-color);
  border-radius: 20px;
  /* overflow-y: scroll; */
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
  font-size: 3rem;
  font-weight: 700;
`;

const MenuItem = styled.li`
  margin: 0;
  padding: 1.5rem;
  list-style: none;

  font-size: 2rem;
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
  width: 80%;
  padding: 0 2rem;
  position: relative;
  overflow-y: scroll;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 15px;
  border-radius: 5px;
`;
const Title = styled.h3`
  font-size: 3rem;
  font-weight: 700;

  color: var(--main-color);
`;

const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 2.8rem;

  white-space: pre-wrap;
`;

const Image = styled.img`
  height: 20rem;
  object-fit: contain;
  border: 1px solid black;
`;

const CodeBlock = styled.div`
  background-color: #f1f4ff;
  border-radius: 2rem;
  pre {
    padding: 2rem;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2.8rem;
  }
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
    if (activeLevel < data.length - 1) {
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
          {data.map((level, index) => (
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
        {data[activeLevel].subtitles.map((subtitle) => {
          const hasCode = subtitle.code && subtitle.code.trim() !== "";
          const hasImage = subtitle.img && subtitle.img.trim() !== "";
          let imageUrl = null;

          if (hasImage) {
            try {
              imageUrl = require(`../../assets/${subtitle.img}`);
            } catch (error) {
              // eslint-disable-next-line no-console
              console.error("Image not found:", subtitle.img);
            }
          }

          return (
            <ContentItem key={subtitle.id}>
              <Title>{subtitle.sub_name}</Title>
              <Description>{subtitle.desc}</Description>
              {hasImage && <Image src={imageUrl} alt="이미지" />}
              {hasCode && (
                <CodeBlock>
                  <pre
                    dangerouslySetInnerHTML={{
                      __html: subtitle.code,
                    }}
                  ></pre>
                </CodeBlock>
              )}
            </ContentItem>
          );
        })}

        <NavigationButtons>
          <Button onClick={handlePrevLevel} disabled={activeLevel === 0}>
            &lt;
          </Button>
          <Button
            onClick={handleNextLevel}
            disabled={activeLevel === data.length - 1}
          >
            &gt;
          </Button>
        </NavigationButtons>
      </ContentContainer>
    </Container>
  );
};

export default LevelNavigation;
