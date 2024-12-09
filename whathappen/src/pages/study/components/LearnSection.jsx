import React from "react";
import styled from "styled-components";

const Content = styled.section`
  width: 80%;
  display: grid;
  gap: 3rem;
  grid-template-rows: 3rem 2fr 3fr;

  h2 {
    font-size: 3.6rem;
    font-weight: 700;
    color: var(--main-color);
  }

  .pp {
    font-size: 2rme;
    width: 100%;
    background-color: black;
  }

  div {
    width: 100%;
    background-color: pink;
  }
`;
export default function LearnSection() {
  return (
    <Content>
      <h2>1. HTML 이란?</h2>
      <p className="pp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id
        voluptatum illum adipisci doloribus nihil in excepturi placeat ratione.
        Accusantium nobis, facilis necessitatibus cupiditate iste illo. Ipsa
        facilis labore at!
      </p>
      <div>
        <p>예시 code</p>
      </div>
    </Content>
  );
}
