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
  padding: 5.7rem 29rem 5.7rem 29rem;
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
          style={{ fontSize: "4rem", fontWeight: "700", marginBottom: "2rem" }}
        >
          이게되네?
        </h3>
        <dl
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            fontSize: "1.2rem",
          }}
        >
          <dt>
            <dd>주식회사 오르미</dd>
          </dt>
          <dt>
            <dd> 대표 : 오르미</dd>
          </dt>
          <dt>
            <dd>주소 : 서울시 강남구 강남대로 00</dd>
          </dt>
          <dt>
            <dd>사업자 등록번호 : 000 0000 0000</dd>
          </dt>
          <dt>
            <dd> whatehappen@gmail.com</dd>
          </dt>
        </dl>
      </address>
      <p>
        Copyright 2024, whats-happns Team member All pictures cannot be copied
        without permission
      </p>
    </FooterContent>
  );
}
