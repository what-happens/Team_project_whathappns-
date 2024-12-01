import React from "react";
import Button from "../../components/Button";
import Logo from "../../assets/what_happns_logo_b.png";
import styled from "styled-components";
import { Github, Google } from "./components/JoinSvg";

const JoinContents = styled.div`
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
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 3rem 0 3rem 2rem;
  box-sizing: border-box;
  font-size: 1.5rem;
  width: 42rem;
  height: 3rem;
  border: 1px solid #c4c4c4;
  border-radius: 15px;
`;
const InputWarp = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  &::after {
    content: " * ";
    color: #ff2e62;
    align-items: center;
    padding-left: 1rem;
  }
`;

const Warp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`;

const SnsWarp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function Join() {
  return (
    <JoinContents>
      <Warp flexDirection="column" gap="2rem" margin="0 0 2rem 0">
        <h2 style={{ fontSize: "4.8rem", fontWeight: "700" }}>Join</h2>
        <span style={{ fontSize: "3.6rem", fontWeight: "500" }}>
          환영합니다!
        </span>
      </Warp>
      <Form action="submit">
        <InputWarp>
          <Input type="text" placeholder="이름" />
        </InputWarp>
        <InputWarp>
          <Input type="email" placeholder="이메일" />
        </InputWarp>
        <InputWarp>
          <Input
            type="password"
            placeholder="비밀번호 ( 8~16자의 영문 , 숫자 , 특수기호 )"
          />
        </InputWarp>
      </Form>

      <Button width="43rem" borderRadius="10px" padding="1.5rem">
        가입하기
      </Button>

      <SnsWarp>
        <Button
          backgroundColor="white"
          border="1px solid #c4c4c4"
          width="43rem"
          borderRadius="10px"
          color="black"
          padding="1.5rem"
        >
          <Google />
          Google 계정으로 회원가입
        </Button>
        <Button
          backgroundColor="black"
          width="43rem"
          borderRadius="10px"
          color="white"
          padding="1.5rem"
        >
          <Github />
          Github 계정으로 회원가입
        </Button>
      </SnsWarp>

      <LogoContent />
    </JoinContents>
  );
}
