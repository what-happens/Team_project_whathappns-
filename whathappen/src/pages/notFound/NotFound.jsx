import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import error404 from "../../assets/error404.png";

const NotFoundContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  gap: 30px;
`;

const NotFoundImg = styled.img`
  width: 478px;
  height: 219px;
`;

const NotFoundMsg = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;

  font-size: 24px;

  color: #2e5dff;
`;

export default function NotFound() {
  return (
    <NotFoundContents>
      <NotFoundImg src={error404} alt="404 에러"></NotFoundImg>
      <NotFoundMsg>
        <span>죄송합니다 , 찾을수 없는 페이지 입니다.</span>
        <span>요청하신 페이지의 주소가 변경 , 삭제되어 찾을 수 없습니다.</span>
      </NotFoundMsg>
      <Button
        height="9px"
        width="24rem"
        borderRadius="0"
        font-family="GmarketSansMedium"
        font-size="40px"
      >
        메인페이지로 이동
      </Button>
    </NotFoundContents>
  );
}
