import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import error404 from "../../assets/error404.png";

const NotFoundContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorImg = styled.img`
  width: 478px;
  height: 219px;
`;

const ErrorMsg = styled.div`
  font-size: 48px;
`;
export default function NotFound() {
  return (
    <NotFoundContents>
      <ErrorImg src={error404} alt="404 에러"></ErrorImg>
      <ErrorMsg>
        죄송합니다 , 찾을수 없는 페이지 입니다. 요청하신 페이지의 주소가 변경 ,
        삭제되어 찾을 수 없습니다.
      </ErrorMsg>
      <Button width="36rem" height="1rem" borderRadius="0px">
        메인페이지로 이동
      </Button>
    </NotFoundContents>
  );
}
