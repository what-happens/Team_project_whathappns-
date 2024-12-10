import React, { useState } from "react";
import Button from "../../components/Button";
import Logo from "../../assets/what_happns_logo_b.png";
import styled from "styled-components";
import { Google } from "./components/LoginSvg";
import Lock from "../../assets/Lock.svg";
import Person from "../../assets/Person.svg";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import loadingImg from "../../assets/loading2.gif";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

function Login() {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      dispatch(
        login({
          user: {
            email: result.user.email,
            displayName: result.user.displayName,
          },
        })
      );
      console.log("User data:", result.user);
      navigate("/");
    } catch (err) {
      console.error("Error during login:", err.message);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validationLogin = () => {
    let valid = true;

    if (idValue === "") {
      setIdError("아이디를 입력 해주세요.");
      valid = false;
    } else if (!emailRegex.test(idValue)) {
      setIdError("아이디 형식이 올바르지 않습니다.");
      valid = false;
    } else {
      setIdError("");
    }

    if (pwValue === "") {
      setPwError("패스워드를 입력 해주세요.");
      valid = false;
    } else {
      setPwError("");
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validationLogin()) {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:5000/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: idValue,
            password: pwValue,
          }),
        });

        if (response.ok) {
          const userData = await response.json();
          dispatch(
            login({
              user: {
                email: idValue,
                ...userData,
              },
            })
          );
          navigate("/");
          console.log("로그인성공");
        } else {
          const errorData = await response.json();
          setIdError(errorData.message || "로그인 실패");
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

  return (
    <>
      <LoginContents>
        <Warp $flexDirection="column" $gap="2rem" $margin="0 0 2rem 0">
          <h2 style={{ fontSize: "4.8rem", fontWeight: "700" }}>Login</h2>
          <span style={{ fontSize: "3.6rem", fontWeight: "500" }}>
            어서오세요!
          </span>
        </Warp>
        <Form
          action="submit"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="on"
        >
          <Warp $flexDirection="column" $gap="1rem" $margin="0 0 2rem 0">
            <InputIconEmail>
              <Input
                type="email"
                value={idValue}
                onChange={handleIdChange}
                placeholder="E-mail"
                required
                autoComplete="username"
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
                required
                autoComplete="current-password"
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
        <Warp $flexDirection="row" $gap="1.5rem" $margin="2rem 0 2rem 0">
          <SocialLogin
            $bg="white"
            $border="1px solid #C4C4C4"
            onClick={handleGoogleLogin}
          >
            <Google />
          </SocialLogin>
        </Warp>
        <Link to="/">
          <LogoContent />
        </Link>
      </LoginContents>
      {loading && (
        <>
          <LoadingImg />
          <LoadingPage></LoadingPage>
        </>
      )}
    </>
  );
}

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
  flex-direction: ${(props) => props.$flexDirection};
  gap: ${(props) => props.$gap};
  margin: ${(props) => props.$margin};
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

const LoadingPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 20;
`;

const LoadingImg = styled.div`
  background-image: url(${loadingImg});
  position: absolute;
  top: 28%;
  left: 42%;
  width: 30rem;
  height: 30rem;
  background-size: cover;
  background-position: center;
  z-index: 30;
`;

export default Login;
