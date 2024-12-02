import React from "react";
import styled from "styled-components";
import BlackLogo from "../assets/what_happns_logo_white_blue.png";
import { Link } from "react-router-dom";
import Button from "./Button";

const HeaderContainer = styled.header`
  width: 100%;
  box-sizing: border-box;
  padding: 2.7rem 29rem 2.7rem 29rem;
  background-color: #333333;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;

const Logo = styled.h1`
  width: 18rem;
  height: 5rem;
  background-image: url(${BlackLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;
`;
export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>이게되네?</Logo>
      </Link>
      <Button padding="1rem 4rem " fontSize="small" borderRadius="5rem">
        로그인
      </Button>
    </HeaderContainer>
  );
}
