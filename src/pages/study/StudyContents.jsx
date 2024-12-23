import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import media from "./media";
import { Menu, AlignRight, X } from "lucide-react";
import useExercise from "../../hooks/useExercise";
import ConfirmModal from "../quizResult/components/ConfirmModal";

const LearningPage = () => {
  const { stageId, levelId } = useParams();
  const navigate = useNavigate();
  const [learnData, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeLevel, setActiveLevel] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const isVisible = Number(stageId) === 0 && Number(levelId) === 0;
  const { resetExercise } = useExercise();
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
      topScroll();
    }
  };

  const handleNextLevel = () => {
    if (activeLevel < learnData.length - 1) {
      setActiveLevel(activeLevel + 1);
      topScroll();
    }
  };

  const topScroll = () => {
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (index) => {
    setActiveLevel(index);
    setIsMenuOpen(false);
    topScroll();
  };

  const closeConfirmModal = () => {
    setIsShow(false);
  };

  const openConfirmModal = () => {
    setIsShow(true);
  };

  const onConfirmModal = () => {
    navigate("/study");
    resetExercise();
  };

  return (
    <ThemeProvider theme={{ ...theme, ...media }}>
      <MobileContainer>
        <BackLink
          to={`/study/${stageId}`}
          className="mr-2"
          type="button"
          onClick={openConfirmModal}
        >
          <StyledX />
        </BackLink>
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
        {isShow && (
          <ConfirmModal
            isOpen={isShow}
            onConfirm={onConfirmModal}
            onClose={closeConfirmModal}
          />
        )}
        <HeaderContainer isOpen={isMenuOpen}>
          <BackLink
            to={`/study/${stageId}`}
            className="mr-2"
            type="button"
            onClick={openConfirmModal}
          >
            <StyledX />
          </BackLink>
          <h1 className="sr-only">학습 페이지</h1>
          <MenuTitle>Level 01</MenuTitle>
          <div
            style={{
              height: "100%",
            }}
          >
            <h3 className="sr-only">목차</h3>
            <nav
              style={{
                height: "100%",
                padding: "0",
                margin: "0",
                position: "relative",
              }}
            >
              <ol
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  height: "100%",
                }}
              >
                {learnData.map((level, index) => (
                  <MenuItem
                    key={level.level_id}
                    active={activeLevel === index}
                    onClick={() => handleMenuItemClick(index)}
                  >
                    {level.title}
                  </MenuItem>
                ))}
                <MenuLink>
                  <ExerciseLink to={`/exercise/${stageId}/${levelId}`}>
                    실습하러 가기 GO!
                  </ExerciseLink>
                </MenuLink>
              </ol>
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

const BackLink = styled.button`
  ${({ theme }) => theme.laptop`
    position: static;
  `};
  background-color: transparent;
  border: none;
  position: fixed;
  top: 2rem;
  left: 7rem;
  color: #c4c4c4;
  text-decoration: none;
  outline: none;
  &:hover {
    color: #ff2e62;
  }
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

const StyledX = styled(X)`
  ${({ theme }) => theme.mobile`
    width: 3.5rem;
    height: 3.5rem;
    `};
  width: 5rem;
  height: 5rem;
`;

const HeaderContainer = styled.header`
  ${({ theme }) => theme.laptop`
    position: fixed;
    top: 5rem;
    right:0;
    z-index: 100;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    border: none;
    max-height: 50vh;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `};
  ${({ theme }) => theme.mobile`
    width: 25rem;
  `};
  width: 40rem;
  height: 100%;
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
  background-color: ${(props) =>
    props.active ? "var(--main-color)" : "transparent"};
  color: ${(props) => (props.active ? "#ffffff" : "#000")};
  &:hover {
    background-color: #7392ff;
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

const MenuLink = styled.li`
  ${({ theme }) => theme.laptop`
    bottom: 5rem;
  `};
  ${({ theme }) => theme.mobile`
    bottom: 5rem;
  `};
  display: block;
  position: absolute;
  bottom: 10rem;
  line-height: normal;
  padding: 2rem;
  width: 100%;
  list-style: none;
  margin-top: auto;
  text-align: center;
`;

const ExerciseLink = styled(Link)`
  ${({ theme }) => theme.mobile`
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  `};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 6rem;
  border-radius: 2rem;

  color: #fff;
  background: var(--main-color);

  cursor: pointer;
  display: block;
  text-decoration: none;
  outline: none;

  &:hover {
    color: #fff;
    background: #ff2e62;
  }
`;
