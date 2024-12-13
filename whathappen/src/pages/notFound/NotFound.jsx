import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import error404 from "../../assets/error404.png";
import potato from "../../assets/error_sad_potato.png";
import obstacle from "../../assets/error_obstacle.png";
import { Link } from "react-router-dom";

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
  gap: 1rem;
  font-size: 2rem;
  font-weight: 300;
  color: #2e5dff;
`;

const GameWrapper = styled.div`
  border: 0.2rem solid #2e5dff;
  padding: 2rem;
  border-radius: 1rem;
`;

const GameContainer = styled.div`
  width: 60rem;
  height: 20rem;
  border-bottom: 0.2rem solid #2e5dff;
  position: relative;
  overflow: hidden;
  background-color: rgba(46, 93, 254, 0.05);
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
`;

const Obstacle = styled.img`
  width: 2rem;
  height: 2.5rem;
  position: absolute;
  bottom: 1rem;
  left: ${(props) => props.$position}px;
  object-fit: contain;
`;

const ScoreBoard = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: #2e5dff;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 0.5rem;
`;

const GameOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 700;
  color: #2e5dff;
  text-align: center;
  padding: 2rem 3rem;
  border-radius: 1rem;
  z-index: 10;
`;

const NotFound = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [jumpHeight, setJumpHeight] = useState(0);
  const [obstaclePosition, setObstaclePosition] = useState(600);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(5);

  const jump = useCallback(() => {
    if (!isJumping && gameStarted && !gameOver) {
      setIsJumping(true);
      setJumpHeight(-140); // 점프 높이 증가

      setTimeout(() => {
        setJumpHeight(0);
        setTimeout(() => {
          setIsJumping(false);
        }, 400); // 착지 시간 증가
      }, 400); // 체공 시간 증가
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
            return 600;
          }

          // 충돌 감지 로직 개선
          const characterBottom = jumpHeight;
          const characterLeft = 50; // Character의 left 위치
          const characterRight = characterLeft + 50; // Character의 width
          const obstacleLeft = prev;
          const obstacleRight = prev + 20;

          if (
            obstacleLeft < characterRight - 20 && // 여유 공간 추가
            obstacleRight > characterLeft + 20 && // 여유 공간 추가
            characterBottom > -50 // 점프 높이가 충분하지 않을 때만 충돌
          ) {
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
        <span>죄송합니다, 찾을 수 없는 페이지입니다.</span>
        <span>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</span>
      </NotFoundMsg>
      <GameWrapper>
        <GameContainer>
          {!gameStarted && !gameOver && (
            <GameOverlay>PRESS SPACE TO START</GameOverlay>
          )}
          {gameOver && <GameOverlay>GAMEOVER</GameOverlay>}
          <Character src={potato} alt="캐릭터" $jump={jumpHeight} />
          <Obstacle src={obstacle} alt="장애물" $position={obstaclePosition} />
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
