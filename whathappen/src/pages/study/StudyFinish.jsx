import React from "react";
import styled from "styled-components";
import Icon from "../../assets/Icon_finish.png";
import Logo from "../../assets/logo_white.png";
import { Link } from "react-router-dom";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6rem;
  height: 100vh;
  background-color: var(--main-color);
  color: white;
`;

const LogoImage = styled.img`
  width: 30rem;
  height: 8rem;
  object-fit: contain;
`;

const FinishIcon = styled.img`
  width: 25rem;
  height: 20rem;
  object-fit: contain;
`;

const Title = styled.p`
  font-size: 6rem;
  font-weight: bold;
  line-height: 10rem;
`;

const Subtitle = styled.p`
  font-size: 4rem;
  font-weight: 100;
`;

const ActionLink = styled(Link)`
  background-color: #fff;
  color: var(--main-color);
  width: 40rem;
  font-size: 4rem;
  line-height: 10rem;
  text-decoration: none;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function StudyFinish() {
  return (
    <Container>
      <LogoImage src={Logo} alt="로고" />
      <h1 className="sr-only">학습 완료 페이지</h1>
      <FinishIcon src={Icon} alt="" />
      <div>
        <Title>학습을 완료하였습니다!!</Title>
        <Subtitle>다음 학습도 도전 해보세요!</Subtitle>
      </div>
      <ActionLink to="/">메인페이지로 이동</ActionLink>
    </Container>
  );
}
