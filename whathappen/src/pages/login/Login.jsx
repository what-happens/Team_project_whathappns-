import React, { useState } from "react";
import Button from "../../components/Button";
import Logo from "../../assets/what_happns_logo_b.png";
import styled from "styled-components";
import { Github, Google } from "./components/LoginSvg";
import Lock from "../../assets/Lock.svg";
import Person from "../../assets/Person.svg";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

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
  width: 43rem;
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
const InputIconPassword = styled.div`
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
  const handleGoogleSign = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");

  // e-mail 정규 표현식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\]:;"'<>,.?/\\|`~]).{8,16}$/;

  const validationLogin = () => {
    let valid = true;

    if (!emailRegex.test(idValue)) {
      setIdError("이메일 형식이 올바르지 않습니다.");
      valid = false;
    } else {
      setIdError("");
    }

    if (!passwordRegex.test(pwValue)) {
      setPwError("패스워드가 올바르지 않습니다.");
      valid = false;
    } else {
      setPwError("");
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validationLogin();
  };

  const handleIdChange = (e) => {
    setIdValue(e.target.value);
    setIdError("");
  };
  const handlePasswordChange = (e) => {
    setPwValue(e.target.value);
    setPwError("");
  };

  return (
    <LoginContents>
      <Warp flexDirection="column" gap="2rem" margin="0 0 2rem 0">
        <h2 style={{ fontSize: "4.8rem", fontWeight: "700" }}>Login</h2>
        <span style={{ fontSize: "3.6rem", fontWeight: "500" }}>
          어서오세요!
        </span>
      </Warp>
      <Form action="submit" onSubmit={handleSubmit}>
        <Warp flexDirection="column" gap="1rem" margin="0 0 2rem 0">
          <InputIconEmail>
            <Input
              type="email"
              value={idValue}
              onChange={handleIdChange}
              placeholder="E-mail"
            />
            <div
              style={{
                padding: "1rem",
                color: "red",
                fontSize: "1.2rem ",
                fontWeight: "300",
              }}
            >
              {idError}
            </div>
          </InputIconEmail>
          <InputIconPassword>
            <Input
              type="password"
              value={pwValue}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
            <div
              style={{
                padding: "1rem",
                color: "red",
                fontSize: "1.2rem ",
                fontWeight: "300",
              }}
            >
              {pwError}
            </div>
          </InputIconPassword>
        </Warp>
        <Button width="43rem" borderRadius="10px" type="submit">
          로그인
        </Button>
      </Form>

      <Link to="/join">
        <Button
          backgroundColor="white"
          border="1px solid #2e5dfe"
          width="43rem"
          borderRadius="10px"
          color="blue"
        >
          회원가입
        </Button>
      </Link>
      <Warp flexDirection="row" gap="1.5rem" margin="2rem 0 2rem 0 ">
        <SocialLogin bg="black">
          <Github />
        </SocialLogin>
        <SocialLogin
          bg="whte"
          border="1px solid #C4C4C4"
          onClick={handleGoogleSign}
        >
          <Google />
        </SocialLogin>
      </Warp>
      <LogoContent />
    </LoginContents>
  );
}
