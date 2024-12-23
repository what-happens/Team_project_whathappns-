import React, { useState, useEffect } from "react";
import AuthNav from "./AuthNav";
import styled from "styled-components";
import logo from "../assets/what_happns_logo_b.png";
import { Link, Outlet } from "react-router-dom";
import Button from "./Button";
import { media } from "../styles/MideaQuery";
import MobileHeader from "./MobileHeader";

import useLogout from "../hooks/useLogout";

export default function AuthHeader() {
  const { logout } = useLogout();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 867);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 867);
      if (window.innerWidth > 867) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <Link to="/">
              <Logo>
                <img
                  src={logo}
                  alt="What Happens 로고"
                  title="메인페이지로 이동"
                />
              </Logo>
            </Link>
            <AuthNav />
            <Button
              type="button"
              onClick={logout}
              padding="1rem 3rem"
              fontSize="small"
              borderRadius="5rem"
            >
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
  width: 100%;
  box-sizing: border-box;
  padding: 2rem 6rem 2rem 13rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;

  ${media.mediumlarge`
    padding: 2rem;
    justify-content: ;
    box-shadow: none;
    border: none;
  `}
`;

const Logo = styled.h1`
  width: 18rem;
  height: 6rem;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;
  ${media.large`
    width: 16rem;
   height: 4rem;
   `}
  ${media.mediumlarge`
    display: none;
  `}
`;
