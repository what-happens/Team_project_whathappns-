import React from "react";
import Button from "../../components/Buttton";
import Logo from "../../assets/what_happns_logo_b.png";
import styled from "styled-components";
import { Github, Google } from "./components/LoginSvg";

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
  padding: 1.7rem 0 1.7rem 1.5rem;
  font-size: 1rem;
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
export default function Login() {
  return (
    <LoginContents>
      <Warp flexDirection="column" gap="2rem">
        <h2 style={{ fontSize: "4.8rem", fontWeight: "700" }}>Login</h2>
        <span style={{ fontSize: "3.6rem", fontWeight: "500" }}>
          어서오세요!
        </span>
      </Warp>
      <Form action="submit">
        <Input type="text" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />
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
      <Warp flexDirection="row" gap="2rem">
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
