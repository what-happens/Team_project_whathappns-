import React from "react";
import styled from "styled-components";

const Content = styled.section`
  width: 80%;
  display: grid;
  gap: 3rem;
  grid-template-rows: 3rem 2fr 3fr;

  h3 {
    font-size: 3.6rem;
    font-weight: 700;
    color: var(--main-color);
  }

  p.content_item {
    font-size: 2rme;
    width: 100%;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: normal;
  }

  div {
    width: 100%;
    background-color: #f1f4ff;
    border-radius: 20px;

    padding: 3rem;
    font-size: 2rem;
    line-height: 3rem;
  }
`;
export default function LearnSection() {
  return (
    <Content>
      <h3>1. HTML 이란?</h3>
      <p className="content_item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, culpa
        odio! Atque labore sit molestiae soluta perspiciatis dolorem?
        Reiciendis, dicta a culpa labore unde necessitatibus. Quae sunt dolores
        optio labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Harum, aut dolorem. Corrupti nostrum ullam sapiente non, odio
        exercitationem facere expedita dolores commodi blanditiis qui! Molestiae
        expedita sint iste tenetur dolore. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptatem quia aperiam totam amet nobis?
        Esse architecto quia, adipisci rem blanditiis possimus sit recusandae
        id! Dolor quasi labore vitae facere inventore. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Esse molestias totam laboriosam,
        fugiat, magni accusamus pariatur nam tempore, earum placeat sequi.
        Sapiente quia recusandae quas? Architecto facilis maxime vitae quia.
      </p>
      <div>
        <p>Lorem</p>
      </div>
    </Content>
  );
}
