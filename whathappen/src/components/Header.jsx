import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BlackLogo from "../assets/what_happns_logo_white_blue.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { logout } from "../redux/authSlice";
import { media } from "../styles/MideaQuery";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      navigate("/");
    } catch (err) {
      return;
    }
  };
  const renderDesktopLoggedIn = () => (
    <>
      <Link to="/">
        <Logo>이게되네?</Logo>
      </Link>
      <nav>
        <NavContainer>
          <Link to="/quizpage">
            <NavItem>퀴즈풀기</NavItem>
          </Link>
          <Link to="study">
            <NavItem>학습하기</NavItem>
          </Link>
          <Link to="/review">
            <NavItem>복습노트</NavItem>
          </Link>
          <Link to="/mypage">
            <NavItem>마이페이지</NavItem>
          </Link>
          <li>
            <Button
              padding="1rem 4rem"
              fontSize="small"
              borderRadius="5rem"
              onClick={handleLogout}
            >
              로그아웃
            </Button>
          </li>
        </NavContainer>
      </nav>
    </>
  );

  const renderMobileLoggedIn = () => (
    <>
      <MobileHeader toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Button
        padding="1rem 3rem"
        fontSize="small"
        borderRadius="5rem"
        onClick={handleLogout}
      >
        로그아웃
      </Button>
    </>
  );

  const renderLoggedOut = () => (
    <>
      <Link to="/">
        <Logo>이게되네?</Logo>
      </Link>
      <Link to="/login">
        <Button padding="1rem 3rem" fontSize="small" borderRadius="5rem">
          로그인
        </Button>
      </Link>
    </>
  );
  return (
    <HeaderContainer>
      {!isLoggedIn && renderLoggedOut()}
      {isLoggedIn && isMobile && renderMobileLoggedIn()}
      {isLoggedIn && !isMobile && renderDesktopLoggedIn()}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  box-sizing: border-box;
  padding: 2rem 6rem 2rem 13rem;
  background-color: #333333;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;
  ${media.medium`
    box-shadow: none;
    background-color: #fff;
    padding: 1rem;
    position: absolute;
  `}
`;

const Logo = styled.h1`
  width: 18rem;
  height: 6rem;
  background-image: url(${BlackLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;
  ${media.medium`
    display: none;
  `}
`;

const NavContainer = styled.ul`
  display: flex;
  gap: 5rem;
  align-items: center;
`;

const NavItem = styled.li`
  font-size: 1.8rem;
  color: white;
  text-decoration: none;
`;
