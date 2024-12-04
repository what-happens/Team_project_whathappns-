import React from "react";
import styled from "styled-components";

const MyPageContents = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const GreetingMsg = styled.div``;
const StampsWrapper = styled.div``;
const Stamps = styled.div``;
const ProgressCircle = styled.div``;
const CourseContents = styled.div``;
const CourseProgress = styled.div``;

export default function MyPage() {
  return (
    <MyPageContents>
      <header className="sr-only">마이페이지</header>
      <GreetingMsg>
        <strong>안녕하세요! 오르미 </strong>고객님
      </GreetingMsg>
      <CourseContents>
        <p>Course</p>
        <CourseProgress></CourseProgress>
        <StampsWrapper>
          <Stamps></Stamps>
          <Stamps></Stamps>
          <Stamps></Stamps>
          <Stamps></Stamps>
          <Stamps></Stamps>
          <Stamps></Stamps>
        </StampsWrapper>
        <ProgressCircle></ProgressCircle>
      </CourseContents>
    </MyPageContents>
  );
}
