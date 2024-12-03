import React from "react";
import styled from "styled-components";
import IconStage1 from "../../assets/img/icon_stage1.png";
import IconStage2 from "../../assets/img/icon_stage2.png";
import IconStage3 from "../../assets/img/icon_stage3.png";
import IconStage4 from "../../assets/img/icon_stage4.png";
import IconStage5 from "../../assets/img/icon_stage5.png";
import IconStage6 from "../../assets/img/icon_stage6.png";
import IconStage7 from "../../assets/img/icon_stage7.png";

const StudyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4rem;

  height: 100vh;
  padding: 22rem, 74rem, 4.3rem;
  position: relative;

  background-color: var(--main-color);
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  margin: 4rem;

  a {
    font-size: 3rem;
    color: #fff;
    align-items: center;
    position: relative;
    padding-left: 2.5rem;

    /* reset.css */
    text-decoration: none;
    outline: none;
  }

  a::before {
    position: absolute;
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    left: 0;
    top: 50%;
    border: solid #fff;
    border-width: 0.5rem 0.5rem 0 0;
    transform: translateY(-50%) rotate(225deg);
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h2 {
    font-size: 5rem;
    color: #fff;
    margin-bottom: 5rem;
  }

  .container {
    display: flex;
    gap: 4rem;
    justify-content: center;
  }

  .container .item {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    text-align: center;
  }

  .container .icon_1 {
    background-image: url(${IconStage1});
  }
  .container .icon_2 {
    background-image: url(${IconStage2});
  }
  .container .icon_3 {
    background-image: url(${IconStage3});
  }
  .container .icon_4 {
    background-image: url(${IconStage4});
  }
  .container .icon_5 {
    background-image: url(${IconStage5});
  }
  .container .icon_6 {
    background-image: url(${IconStage6});
  }
  .container .icon_7 {
    background-image: url(${IconStage7});
  }
`;

const ContainItem = styled.a`
  display: block;
  width: 200px;
  height: 200px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
export default function Study() {
  return (
    <StudyContent>
      <Header className="haeder">
        <h1 className="sr-only">스터디 페이지</h1>
        <a className="" href="">
          메인으로
        </a>
      </Header>
      <Section>
        <h2>
          간단하고 쉽게! <br /> 다양한 기능을 함께 만들어요!
        </h2>
        <div className="container">
          <ContainItem className="icon_1" href="#"></ContainItem>
          <ContainItem className="icon_2" href="#"></ContainItem>
          <ContainItem className="icon_3" href="#"></ContainItem>
          <ContainItem className="icon_4" href="#"></ContainItem>
        </div>
        <div className="container">
          <ContainItem className="icon_5" href="#"></ContainItem>
          <ContainItem className="icon_6" href="#"></ContainItem>
          <ContainItem className="icon_7" href="#"></ContainItem>
        </div>
      </Section>
    </StudyContent>
  );
}
