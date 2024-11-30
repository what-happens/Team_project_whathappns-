import React from "react";
import styled from "styled-components";
import BlackLogo from "../assets/what_happns_logo_b.png";
import { Link } from "react-router-dom";
import Button from "./Buttton";

const HeaderContainer = styled.header`
  width: 100%;
  box-sizing: border-box;
  padding: 2.7rem 12rem 2.7rem 12rem;
  background-color: white;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;

const Logo = styled.h1`
  width: 24rem;
  height: 5.9rem;
  background-image: url(${BlackLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <Button padding="1.9rem 4.6rem" fontSize="3rem" borderRadius="5rem">
        로그인
      </Button>
    </HeaderContainer>
  );
}
