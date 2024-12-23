import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthNav from "./AuthNav";
import menu from "../assets/header_menu_icon.svg";
import exit from "../assets/exit_btn.svg";
import logo from "../assets/what_happns_logo_b.png";
import { media } from "../styles/MideaQuery";
import PropTypes from "prop-types";
import Button from "./Button";
import useLogout from "../hooks/useLogout";
export default function MobileHeader({ toggleMenu, isMenuOpen }) {
  const { logout } = useLogout();
  return (
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
            <img src={logo} alt="What Happens 로고" title="메인페이지로 이동" />
          </Link>
        </Logo>
        <AuthNav />
        <Button onClick={logout}>로그아웃</Button>
      </MobileMenu>
      <Overlay isOpen={isMenuOpen} onClick={toggleMenu} />
    </>
  );
}

MobileHeader.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

const Logo = styled.h1`
  width: 18rem;
  img {
    width: 100%;
    height: 100%;
  }

  ${media.mediumlarge`
    position: absolute;
    top: 9rem;
  `}
`;

const MobileMenuBtn = styled.button`
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
  gap: 5rem;
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
