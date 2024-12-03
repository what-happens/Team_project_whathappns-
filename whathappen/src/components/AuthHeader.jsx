import React from "react";
import AuthNav from "./AuthNav";
import styled from "styled-components";
import logo from "../assets/what_happns_logo_b.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function AuthHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <Header>
        <Logo>
          <Link to="/">
            <img src={logo} alt="What Happens 로고" title="메인페이지로 이동" />
          </Link>
        </Logo>
        <AuthNav />
        <Button type="button" onClick={handleLogout}>
          로그아웃
        </Button>
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
`;

const Logo = styled.h1`
  width: 18rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
