import React from "react";
import Button from "../../components/Button";
import Logo from "../../assets/what_happns_logo_b.png";
import styled from "styled-components";
import { Github, Google } from "./components/LoginSvg";
import Lock from "../../assets/Lock.svg";
import Person from "../../assets/Person.svg";

const LoginContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100vh;
  padding: 22rem, 74rem, 4.3rem;
`;

const LogoContent = styled.div`
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 150px;
  height: 150px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 3rem 0 3rem 5rem;
  box-sizing: border-box;
  font-size: 1.5rem;
  width: 42rem;
  height: 3rem;
  border: 1px solid #c4c4c4;
  border-radius: 15px;
`;

const Warp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`;

const SocialLogin = styled.a`
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => props.bg};
  border-radius: 50px;
  border: ${(props) => props.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputIconEmail = styled.div`
  position: relative;

  &::before {
    content: "";
    background-image: url(${Person});
    width: 24px;
    height: 24px;
    display: block;
    background-size: cover;
    position: absolute;
    left: 2rem;
    top: 1.8rem;
  }
`;
const InputIconPass = styled.div`
  position: relative;

  &::before {
    content: "";
    background-image: url(${Lock});
    width: 24px;
    height: 24px;
    display: block;
    background-size: cover;
    position: absolute;
    left: 2rem;
    top: 1.8rem;
  }
`;
export default function Login() {
  return (
    <LoginContents>
      <Warp flexDirection="column" gap="2rem" margin="0 0 2rem 0">
        <h2 style={{ fontSize: "4.8rem", fontWeight: "700" }}>Login</h2>
        <span style={{ fontSize: "3.6rem", fontWeight: "500" }}>
          어서오세요!
        </span>
      </Warp>
      <Form action="submit">
        <InputIconEmail>
          <Input type="text" placeholder="E-mail" />
        </InputIconEmail>
        <InputIconPass>
          <Input type="password" placeholder="Password" />
        </InputIconPass>
      </Form>

      <Button width="43rem" borderRadius="10px">
        로그인
      </Button>

      <Button
        backgroundColor="white"
        border="1px solid #2e5dfe"
        width="43rem"
        borderRadius="10px"
        color="blue"
      >
        회원가입
      </Button>

      <Warp flexDirection="row" gap="1.5rem" margin="2rem 0 2rem 0 ">
        <SocialLogin bg="black">
          <Github />
        </SocialLogin>
        <SocialLogin bg="whte" border="1px solid #C4C4C4">
          <Google />
        </SocialLogin>
      </Warp>
      <LogoContent />
    </LoginContents>
  );
}
