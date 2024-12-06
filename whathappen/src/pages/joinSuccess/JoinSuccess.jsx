import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/what_happns_logo_b.png";
import icon from "../../assets/join_success_icon.png";
import Button from "../../components/Button";

export default function JoinSuccess() {
  return (
    <>
      <Container>
        <Icon />
        <Title>회원가입 완료!</Title>
        <Text>
          환영합니다! 회원가입이 성공적으로 완료되었습니다!<br></br>
          로그인 후 다양한 서비스를 제공 받으세요!
        </Text>
        <ButtonWarp>
          <Link to="/">
            <Button backgroundColor="gray">메인으로 가기</Button>
          </Link>
          <Link to="/login">
            <Button>로그인 하기</Button>
          </Link>
        </ButtonWarp>
        <Link to="/">
          <Logo />
        </Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  padding: 15rem 20rem 20rem 20rem;
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: var(--main-color);
`;

const Text = styled.p`
  font-size: 2.8rem;
  line-height: 3.2rem;
  font-weight: 300;
  color: #333;
  text-align: center;
`;
const ButtonWarp = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 5rem;
`;

const Logo = styled.div`
  background-image: url(${logo});
  width: 17.6rem;
  height: 4.3rem;
  background-size: cover;
`;

const Icon = styled.div`
  background-image: url(${icon});
  width: 13.8rem;
  height: 13.8rem;
  background-size: cover;
`;
