import React, { useState, useEffect } from "react";
import AuthNav from "./AuthNav";
import styled from "styled-components";
import logo from "../assets/what_happns_logo_b.png";
// import menu from "../assets/header_menu_icon.svg";
// import logout from "../assets/header_logoutbtn_icon.svg";
// import exit from "../assets/exit_btn.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "./Button";
import { media } from "../styles/MideaQuery";
import MobileHeader from "./MobileHeader";
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
            <MobileHeader toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
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
