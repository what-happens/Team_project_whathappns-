import React from "react";
import styled from "styled-components";

const footerContent = styled.footer`
  width: 100%;
  box-sizing: border-box;
  padding: 2.7rem 29rem 2.7rem 29rem;
  background-color: #2e5dfe;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;
export default function Footer() {
  return <footerContent></footerContent>;
}
