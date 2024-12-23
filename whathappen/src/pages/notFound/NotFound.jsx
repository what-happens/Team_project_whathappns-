import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import error404 from "../../assets/error404.png";
import potato from "../../assets/error_sad_potato.png";
import obstacle1 from "../../assets/error_obstacle_1.png";
import obstacle2 from "../../assets/error_obstacle_2.png";
import { Link } from "react-router-dom";
import { media } from "../../styles/MideaQuery";

const NotFoundContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  gap: 2.5rem;
  position: relative;
`;

const NotFoundImg = styled.img`
  width: 20rem;
  height: 10rem;
  object-fit: contain;
`;

const NotFoundMsg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 300;
  color: #2e5dff;
  span {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  br {
    display: none;
  }
  ${media.xsmall`
    br{
      display: block;
    }
    .pc-only {
      display:none;
    }
  `}
`;

const GameWrapper = styled.div`
  border: 0.2rem solid #2e5dff;
  padding: 2rem;
  border-radius: 1rem;
  ${media.medium`
    display: none;
  `}
`;

const GameContainer = styled.div`
  width: 60rem;
  height: 20rem;
  border-bottom: 0.2rem solid #2e5dff;
  position: relative;
  overflow: hidden;
  background-color: rgba(46, 93, 254, 0.05);
  ${media.medium`
    display: none;
  `}
`;

const Character = styled.img`
  width: 5rem;
  height: 5rem;
  position: absolute;
  bottom: 1rem;
  left: 5rem;
  transform: translateY(${(props) => props.$jump}px);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  object-fit: contain;
  z-index: 9;
  ${media.medium`
    display: none;
  `}
`;

const Obstacle = styled.img`
  width: 2rem;
  height: 2.5rem;
  position: absolute;
  bottom: 1rem;
  left: ${(props) => props.$position}px;
  object-fit: contain;
  ${media.medium`
    display: none;
  `}
`;

const ScoreBoard = styled.div`
  position: absolute;
  right: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: #2e5dff;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 0.5rem;
  ${media.medium`
    display: none;
  `}
`;

const GameOverlay = styled.div`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 900;
  color: #2e5dff;
  text-align: center;
  border-radius: 1rem;
  z-index: 10;
  ${media.medium`
    display: none;
  `}
`;

const NotFound = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [jumpHeight, setJumpHeight] = useState(0);
  const [obstaclePosition, setObstaclePosition] = useState(600);
  const [currentObstacle, setCurrentObstacle] = useState(obstacle1);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(5);

  const getRandomObstacle = () => {
    return Math.random() < 0.5 ? obstacle1 : obstacle2;
  };

  const jump = useCallback(() => {
    if (!isJumping && gameStarted && !gameOver) {
      setIsJumping(true);
      setJumpHeight(-130);

      setTimeout(() => {
        setJumpHeight(0);
        setTimeout(() => {
          setIsJumping(false);
        }, 400);
      }, 400);
    }
  }, [isJumping, gameStarted, gameOver]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setSpeed(5);
    setObstaclePosition(600);
    setIsJumping(false);
    setJumpHeight(0);
    setCurrentObstacle(getRandomObstacle());
  };

  const checkCollision = (obstaclePosition) => {
    const characterBottom = jumpHeight;
    const characterLeft = 50;
    const characterRight = characterLeft + 50;
    const obstacleLeft = obstaclePosition;
    const obstacleRight = obstaclePosition + 20;

    return (
      obstacleLeft < characterRight - 20 &&
      obstacleRight > characterLeft + 20 &&
      characterBottom > -50
    );
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        if (!gameStarted || gameOver) {
          startGame();
        } else {
          jump();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [jump, gameStarted, gameOver]);

  useEffect(() => {
    let gameLoop;
    if (gameStarted && !gameOver) {
      gameLoop = setInterval(() => {
        setObstaclePosition((prev) => {
          if (prev <= -40) {
            setScore((s) => s + 10);
            setSpeed((s) => Math.min(s + 0.2, 12));
            setCurrentObstacle(getRandomObstacle());
            return 600;
          }
          if (checkCollision(prev)) {
            setGameOver(true);
            return prev;
          }
          return prev - speed;
        });
      }, 20);
    }

    return () => clearInterval(gameLoop);
  }, [gameStarted, gameOver, jumpHeight, speed]);

  return (
    <NotFoundContents>
      <NotFoundImg src={error404} alt="404 에러" />
      <NotFoundMsg>
        <span>
          죄송합니다, <br />
          찾을 수 없는 페이지입니다.
        </span>
        <span className="pc-only">
          요청하신 페이지의 주소가 <br />
          변경, 삭제되어 찾을 수 없습니다.
        </span>
      </NotFoundMsg>
      <GameWrapper>
        <GameContainer>
          {!gameStarted && !gameOver && (
            <GameOverlay>PRESS SPACE TO START</GameOverlay>
          )}
          {gameOver && <GameOverlay>GAMEOVER</GameOverlay>}
          <Character src={potato} alt="캐릭터" $jump={jumpHeight} />
          <Obstacle
            src={currentObstacle}
            alt="장애물"
            $position={obstaclePosition}
          />
          <ScoreBoard>점수: {score}</ScoreBoard>
        </GameContainer>
      </GameWrapper>
      <Link to="/">
        <Button
          backgroundColor="blue"
          color="white"
          padding="1rem 2rem"
          width="24rem"
          borderRadius="0"
          fontSize="small"
          fontFamily="GmarketSansMedium"
        >
          메인페이지로 이동
        </Button>
      </Link>
    </NotFoundContents>
  );
};
export default NotFound;
