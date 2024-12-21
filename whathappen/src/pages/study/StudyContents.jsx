import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import media from "./media";
import { Menu, AlignRight } from "lucide-react";

import back from "../../assets/back_link.png";

const LearningPage = () => {
  const { stageId, levelId } = useParams();
  const navigate = useNavigate();
  const [learnData, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeLevel, setActiveLevel] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isVisible = Number(stageId) === 0 && Number(levelId) === 0;

  const loadStageData = async (stageId, levelId) => {
    try {
      setIsLoading(true);
      setError(null);

      // 유효한 stageId 체크 (예: 숫자만 허용)
      if ((!stageId && levelId) || !/^\d+$/.test(stageId && levelId)) {
        throw new Error("Invalid stage ID");
      }

      const module = await import(
        `../../data/stage${stageId}/learn${levelId}.json`
      );

      // JSON 데이터가 예상한 형식인지 검증
      if (!module.default || typeof module.default !== "object") {
        throw new Error("Invalid data format");
      }

      setData(module.default);
      setIsLoading(false);
    } catch (err) {
      console.error("Error loading stage data:", err);

      // 에러 종류에 따른 처리
      if (err.code === "MODULE_NOT_FOUND") {
        navigate("/NotFound", { replace: true });
      } else if (err.message === "Invalid stage ID") {
        setError("Invalid stage ID provided");
        navigate("/NotFound", { replace: true });
      } else {
        setError("Failed to load stage data");
        navigate("/NotFound", { replace: true });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadStageData(stageId, levelId);
  }, [stageId, levelId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  if (!learnData) {
    return null;
  }

  const handlePrevLevel = () => {
    if (activeLevel > 0) {
      setActiveLevel(activeLevel - 1);
    }
  };

  const handleNextLevel = () => {
    if (activeLevel < learnData.length - 1) {
      setActiveLevel(activeLevel + 1);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (index) => {
    setActiveLevel(index);
    setIsMenuOpen(false);
  };

  return (
    <ThemeProvider theme={{ ...theme, ...media }}>
      <MobileContainer>
        <BackLink to={`/study/${stageId}`} className="mr-2" />
        <MobileLevelTitle>{learnData[activeLevel].title}</MobileLevelTitle>
        <HamburgerButton onClick={toggleMenu}>
          {isMenuOpen ? (
            <AlignRight size={24} color="#2E5DFF" />
          ) : (
            <Menu size={24} color="#C4C4C4" />
          )}
        </HamburgerButton>
      </MobileContainer>

      <Container>
        <HeaderContainer isOpen={isMenuOpen}>
          <BackLink to={`/study/${stageId}`} className="mr-2" />
          <h1 className="sr-only">학습 페이지</h1>
          <MenuTitle>Level 01</MenuTitle>
          <div>
            <h3 className="sr-only">목차</h3>
            <nav>
              {learnData.map((level, index) => (
                <MenuItem
                  key={level.level_id}
                  active={activeLevel === index}
                  onClick={() => handleMenuItemClick(index)}
                >
                  {level.title}
                </MenuItem>
              ))}
            </nav>
          </div>
        </HeaderContainer>

        <ContentContainer>
          {learnData[activeLevel].subtitles.map((subtitle) => {
            const hasCode = subtitle.code && subtitle.code.trim() !== "";
            const hasImage = subtitle.img && subtitle.img.trim() !== "";
            const hasLink = subtitle.link && subtitle.link.trim() !== "";
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
              <ContentItem key={subtitle.sub_id}>
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
                {hasLink && (
                  <ExternalLink
                    href={subtitle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    isVisible={isVisible}
                  >
                    books.weniv.co.kr
                  </ExternalLink>
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
              disabled={activeLevel === learnData.length - 1}
            >
              &gt;
            </Button>
          </NavigationButtons>
        </ContentContainer>
      </Container>
    </ThemeProvider>
  );
};

export default LearningPage;

// start MobileContainer
const MobileContainer = styled.div`
  ${({ theme }) => theme.laptop`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #f8f8f8;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 110;
  `};
  display: none;
`;

const MobileLevelTitle = styled.h2`
  ${({ theme }) => theme.laptop`
      display: block;
      font-size: 2rem;
      font-weight: 700;
      color: var(--main-color);
      font-size: ${({ theme }) => theme.fontSizes.title};
    `};
  display: none;
`;

const HamburgerButton = styled.button`
  ${({ theme }) => theme.laptop`
    display: block;
    background: none;
    border: none;
    cursor: pointer;
  `};
  display: none;
`;

const BackLink = styled(Link)`
  ${({ theme }) => theme.laptop`
    position: static;
    width: 3rem;
    height: 3rem;
  `};

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
// MobileHeader

// start Container
const Container = styled.div`
  ${({ theme }) => theme.laptop`
    flex-direction: column;
    padding: 5rem 2rem;
  `};
  ${({ theme }) => theme.tablet`
    padding: 3rem 0rem;
  `};
  ${({ theme }) => theme.mobile`
    padding: 3rem 0rem;
  `};
  display: flex;
  height: 100vh;
  padding: 10rem 7rem;
  overflow-x: hidden;
`;

const HeaderContainer = styled.header`
  ${({ theme }) => theme.laptop`
    position: fixed;
    top: 5rem;
    right: 0;
    z-index: 100;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    border: none;
    max-height: 70vh;
  
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `};
  width: 40rem;
  border: 1px solid var(--main-color);
  border-radius: 20px;
  transition: all 0.3s ease;
`;

const MenuTitle = styled.h2`
  ${({ theme }) => theme.tesktop`
    font-size: 2.5rem;
  `};
  ${({ theme }) => theme.laptop`
    padding: 1.5rem;
    text-align: center;
  `};
  ${({ theme }) => theme.tablet`
    font-size: 2.5rem;
  `};
  ${({ theme }) => theme.mobile`
    font-size: 2rem;
  `};
  color: var(--main-color);
  padding: 3rem;
  font-size: 3rem;
  font-weight: 700;
`;

const MenuItem = styled.li`
  ${({ theme }) => theme.tesktop`
    font-size: 1.6rem;
  `};
  ${({ theme }) => theme.laptop`
    background-color: ${(props) =>
      props.active ? "var(--main-color)" : "transparent"};
    color: ${(props) => (props.active ? "#ffffff" : "#000")};
  `};
  ${({ theme }) => theme.tablet`
    font-size: 1.8rem;
  `};
  ${({ theme }) => theme.mobile`
    font-size: 1.5rem;
  `};

  margin: 0;
  padding: 0 3rem;
  list-style: none;
  font-size: 2rem;
  line-height: 5rem;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#7392FF" : "transparent")};
  color: ${(props) => (props.active ? "#ffffff" : "#000")};
  &:hover {
    background-color: var(--main-color);
    color: #ffffff;
  }
  transition: background-color 0.3s ease;
`;
// end Container

// start ContentContainer
const ContentContainer = styled.main`
  ${({ theme }) => theme.laptop`
    width: 100%;
    padding: 2.5rem 1rem;
  `};
  width: 100%;
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
  ${({ theme }) => theme.laptop`
    font-size: ${({ theme }) => theme.fontSizes.title};
  `};
  font-size: 3rem;
  font-weight: 700;
  margin-top: 2rem;

  color: var(--main-color);
`;

const Description = styled.p`
  ${({ theme }) => theme.laptop`
    font-size: 1.5rem;
  `};
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 2.8rem;

  white-space: pre-wrap;
`;

const Image = styled.img`
  ${({ theme }) => theme.mobile`
    height: 20rem;
  `};
  height: 30rem;
  object-fit: contain;
`;

const CodeBlock = styled.div`
  background-color: #f1f4ff;
  border-radius: 2rem;
  overflow-x: auto;
  pre {
    ${({ theme }) => theme.laptop`
      font-size: 1.5rem;
    `};
    ${({ theme }) => theme.mobile`
      font-size: 1.5rem;
    `};
    padding: 2rem;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2.8rem;
    white-space: pre-wrap;
  }
`;

const ExternalLink = styled.a
  .withConfig({
    shouldForwardProp: (prop) => prop !== "isVisible", // 'isVisible' prop이 DOM에 전달되지 않도록 필터링
  })
  .attrs({
    target: "_blank",
    rel: "noopener noreferrer",
  })`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  background-color: #f1f4ff;
  color: #333;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 5rem;
  padding-left: 2rem;
  border-radius: 10px;

  &:hover {
    color: var(--main-color);
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
    cursor: not-allowed;
  }
  &:hover {
    background-color: var(--main-color);
    color: #fff;
  }
`;
