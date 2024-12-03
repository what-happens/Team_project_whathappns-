import React, { useState } from "react";
import Button from "../../components/Button";
import Logo from "../../assets/what_happns_logo_b.png";
import styled from "styled-components";
import { Github, Google } from "./components/JoinSvg";
import { useSignup } from "./../../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import loadingImg from "../../assets/loading.gif";

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

const LoadingPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;

const LoadingImg = styled.div`
  background-image: url(${loadingImg});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  width: 20rem;
  height: 20rem;
  top: 40%;
  left: 47%;
  z-index: 30;
`;

export default function Join() {
  const [nameValue, setNameValue] = useState("");
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const [nameError, setNameError] = useState("");
  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");

  const [loading, setLoading] = useState(false);
  const { signup, error } = useSignup();

  const navigate = useNavigate();

  const nameRegex = /^[가-힣]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\]:;"'<>,.?/\\|`~]).{8,16}$/;

  const validationJoin = () => {
    let valid = true;

    if (idValue === "") {
      setIdError("필수 정보입니다.");
      valid = false;
    } else if (!emailRegex.test(idValue)) {
      setIdError("올바르지 않은 형식의 이메일 입니다.");
      valid = false;
    } else {
      setIdError("");
    }

    if (pwValue === "") {
      setPwError("필수 정보입니다.");
      valid = false;
    } else if (!passwordRegex.test(pwValue)) {
      setPwError(
        "비밀번호는 8~16자 대소문자 , 숫자, 특수기호를 포함 해야합니다."
      );
      valid = false;
    } else {
      setPwError("");
    }

    if (nameValue === "") {
      setNameError("필수 정보입니다.");
      valid = false;
    } else if (!nameRegex.test(nameValue)) {
      setNameError("한글만 입력이 가능합니다.");
      valid = false;
    } else {
      setNameError("");
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validationJoin()) {
      setLoading(true);

      const signupSuccess = await signup(idValue, pwValue, nameValue);

      if (signupSuccess) {
        setLoading(false);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setLoading(false);
        setIdError(error);
      }
    }
  };

  const handleIdChange = (e) => {
    setIdValue(e.target.value);
    setIdError("");
  };
  const handlePasswordChange = (e) => {
    setPwValue(e.target.value);
    setPwError("");
  };
  const handleNameChange = (e) => {
    setNameValue(e.target.value);
    setNameError("");
  };

  return (
    <>
      <JoinContents>
        <Warp flexDirection="column" gap="2rem" margin="0 0 2rem 0">
          <h2 style={{ fontSize: "4.8rem", fontWeight: "700" }}>Join</h2>
          <span style={{ fontSize: "3.6rem", fontWeight: "500" }}>
            환영합니다!
          </span>
        </Warp>
        <Form action="submit" onSubmit={handleSubmit} noValidate>
          <InputWarp>
            <Input
              type="text"
              placeholder="이름"
              value={nameValue}
              onChange={handleNameChange}
              required
            />
          </InputWarp>
          <div
            style={{
              color: "#eb4335",
              fontSize: "1.2rem ",
              fontWeight: "300",
            }}
          >
            {nameError}
          </div>
          <InputWarp>
            <Input
              type="email"
              placeholder="이메일"
              value={idValue}
              onChange={handleIdChange}
              required
            />
          </InputWarp>
          <div
            style={{
              color: "#eb4335",
              fontSize: "1.2rem ",
              fontWeight: "300",
            }}
          >
            {idError}
          </div>
          <InputWarp>
            <Input
              type="password"
              placeholder="비밀번호 ( 8~16자의 영문 , 숫자 , 특수기호 )"
              value={pwValue}
              onChange={handlePasswordChange}
              required
            />
          </InputWarp>
          <div
            style={{
              color: "#eb4335",
              fontSize: "1.2rem ",
              fontWeight: "300",
            }}
          >
            {pwError}
          </div>
          <Button
            width="43rem"
            borderRadius="10px"
            padding="1.5rem"
            type="submit"
          >
            가입하기
          </Button>
        </Form>

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
      {loading && (
        <>
          <LoadingImg />
          <LoadingPage></LoadingPage>
        </>
      )}
    </>
  );
}
