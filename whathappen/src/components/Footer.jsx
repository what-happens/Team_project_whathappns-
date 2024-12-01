import React from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(8rem);
  }
  to {
    opacity: 2;
    transform: translateY(0);
  }
`;
const FooterContent = styled.footer`
  width: 100%;
  box-sizing: border-box;
  padding: 5.7rem 29rem 2.7rem 29rem;
  background-color: #2e5dfe;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: white;
  animation: ${slideUp} 1s ease;
`;
export default function Footer() {
  return (
    <FooterContent>
      <address>
        <h3
          style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "2rem" }}
        >
          이게되네?
        </h3>
        <span style={{ fontSize: "1.4rem", fontWeight: "300" }}>
          주식회사 오르미 <br />
          대표 : 오르미
          <br />
          주소 : 서울시 강남구 강남대로 00
          <br />
          사업자 등록번호 : 000 0000 0000
          <br />
          whatehappen@gmail.com
        </span>
      </address>
      <p>
        Copyright 2024, whats-happns Team member All pictures cannot be copied
        without permission
      </p>
    </FooterContent>
  );
}
