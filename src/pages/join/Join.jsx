import React, { useState } from "react";
import Button from "../../components/Button";
import Logo from "../../assets/what_happns_logo_b.png";
import styled, { keyframes } from "styled-components";
import { Google } from "./components/JoinSvg";
import { useNavigate } from "react-router-dom";
import loadingImg from "../../assets/loading_Img.svg";
import { Link } from "react-router-dom";
import { media } from "../../styles/MideaQuery";

export default function Join() {
  const [nameValue, setNameValue] = useState("");
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const [nameError, setNameError] = useState("");
  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");

  const [loading, setLoading] = useState(false);

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
      try {
        setLoading(true);

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/user/signup`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: idValue,
              password: pwValue,
              name: nameValue,
            }),
          }
        );

        if (response.ok) {
          navigate("/joinsuccess");
        } else {
          setIdError("현재 사용중인 이메일 입니다.");
        }
      } catch (error) {
        console.error("Error:", error);
        setIdError("서버 통신 중 오류가 발생했습니다");
      } finally {
        setLoading(false);
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
        <Warp $flexDirection="column" $gap="2rem" $margin="0 0 2rem 0">
          <JoinTitle>Join</JoinTitle>
          <JoinText>환영합니다!!</JoinText>
        </Warp>
        <Form
          action="submit"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="on"
        >
          <InputWarp>
            <Input
              type="text"
              placeholder="이름 ( 한글만 입력 가능 )"
              value={nameValue}
              onChange={handleNameChange}
              required
              autoComplete="name"
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
              autoComplete="email"
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
              autoComplete="current-password"
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
            smallStyles={{
              width: "38rem",
            }}
            xsmallStyles={{
              width: "30rem",
            }}
          >
            가입하기
          </Button>
        </Form>
        <p style={{ fontSize: "1.2rem" }}>
          이미 계정이 있으신가요?{" "}
          <Link to="/login">
            <span
              style={{
                color: "var(--main-color)",
                textDecoration: "underline",
              }}
            >
              로그인
            </span>
          </Link>
        </p>
        <SnsWarp>
          <SocialLogin $bg="white" $border="1px solid #C4C4C4">
            <Google />
          </SocialLogin>
        </SnsWarp>

        <Link to="/">
          <LogoContent />
        </Link>
      </JoinContents>
      {loading && (
        <>
          <LoadingImg />
          <LoadingText>Loading...</LoadingText>
          <LoadingPage></LoadingPage>
        </>
      )}
    </>
  );
}
const JoinTitle = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
  ${media.small`
    font-size: 3.8rem;
  `}
`;
const JoinText = styled.span`
  font-size: 3.6rem;
  font-weight: 500;
  ${media.small`
    font-size: 2.6rem;
  `}
`;

const JoinContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100vh;
  padding: 22rem, 74rem, 4.3rem;
  margin-top: 8rem;
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
  width: 100%;
  height: 3rem;
  border: 1px solid #c4c4c4;
  border-radius: 15px;
  ${media.small`
    font-size:1.3rem;
  `}
`;

const InputWarp = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const Warp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.$flexDirection};
  gap: ${(props) => props.$gap};
  margin: ${(props) => props.$margin};
`;

const SnsWarp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SocialLogin = styled.a`
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => props.$bg};
  border-radius: 50px;
  border: ${(props) => props.$border};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 20;
`;

const roll = keyframes`
  0% {

            transform: rotate(0);
  }
  100% {
            transform: rotate(360deg);
  }
`;
const LoadingImg = styled.div`
  background-image: url(${loadingImg});
  position: absolute;
  top: 33%;
  left: 45%;
  width: 15rem;
  height: 15rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform-origin: center center;
  animation: ${roll} 0.8s linear infinite;
  z-index: 30;
  ${media.small`
    left: 38%;
  `}
  ${media.medium`
    left: 41%;
  `}
  ${media.xsmall`
    left: 30%;
  `}
`;
const LoadingText = styled.p`
  position: absolute;
  top: 52%;
  left: 43%;
  font-weight: 700;
  font-size: 5rem;
  z-index: 30;
  ${media.small`
    left: 30%;
  `}
  ${media.medium`
    left: 35%;
  `}
  ${media.xsmall`
    left: 15%;
  `}
`;
