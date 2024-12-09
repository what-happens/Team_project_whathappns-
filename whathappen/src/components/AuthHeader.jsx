import React, { useState, useEffect } from "react";
import AuthNav from "./AuthNav";
import styled from "styled-components";
import logo from "../assets/what_happns_logo_b.png";
import menu from "../assets/header_menu_icon.svg";
import logout from "../assets/header_logoutbtn_icon.svg";
import exit from "../assets/exit_btn.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "./Button";
// dahyung:반응형 헤더(햄버거 메뉴) 수정
import { media } from "../styles/MideaQuery";

export default function AuthHeader() {
  const navigate = useNavigate();
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

  const handleLogout = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header>
        {isMobile ? (
          <>
            <MobileMenuBtn onClick={toggleMenu}>
              <img src={menu} alt="메뉴 열기" />
            </MobileMenuBtn>
            <MobileMenu isOpen={isMenuOpen}>
              <CloseBtn onClick={toggleMenu}>
                <img src={exit} alt="나가기" />
              </CloseBtn>
              <Logo>
                <Link to="/">
                  <img
                    src={logo}
                    alt="What Happens 로고"
                    title="메인페이지로 이동"
                  />
                </Link>
              </Logo>
              <AuthNav />
              <MobileLogoutBtn type="button" onClick={handleLogout}>
                <img src={logout} alt="로그아웃" />
                로그아웃
              </MobileLogoutBtn>
            </MobileMenu>
            <Overlay isOpen={isMenuOpen} onClick={toggleMenu} />
          </>
        ) : (
          <>
            <Logo>
              <Link to="/">
                <img
                  src={logo}
                  alt="What Happens 로고"
                  title="메인페이지로 이동"
                />
              </Link>
            </Logo>
            <AuthNav />
            <Button type="button" onClick={handleLogout}>
              로그아웃
            </Button>
          </>
        )}
      </Header>
      <Outlet />
    </>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 6rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 10px;
  z-index: 1000;
  background-color: white;
  ${media.medium`
    padding: 2rem;
    justify-content: ;
    box-shadow: none;
    border: none;
  `}
`;

const Logo = styled.h1`
  width: 18rem;
  img {
    width: 100%;
    height: 100%;
  }
  ${media.medium`
    position: absolute;
    top: 9rem;
  `}
`;

const MobileMenuBtn = styled.button`
  /* position: absolute; */
  margin-top: 3rem;
  margin-left: 1rem;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  img {
    width: 5rem;
    height: 5rem;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 32rem;
  height: 100vh;
  background: white;
  border: none;
  transition: left 0.3s ease;
  z-index: 1000;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  img {
    width: 5rem;
    height: 5rem;
  }
`;

const MobileLogoutBtn = styled.button`
  margin-top: auto;
  margin-bottom: 2rem;
  border: none;
  font-family: "Gmarket Sans";
  font-size: 2.4rem;
  font-weight: 500;
  background: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.8rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;
