// Editor.jsx
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CodeDisplay from "./CodeDisplay";
import resetbtn from "../../../assets/reset_icon.png";
export default function Editor({ width }) {
  return (
    <EditorContainer $width={width}>
      <TabContainer>
        <ActiveTab>html</ActiveTab>
        <Tab>css</Tab>
      </TabContainer>
      <CodeDisplayWrapper>
        <CodeDisplay />
        <ResetButton>
          <img src={resetbtn} alt="리셋하기" />
        </ResetButton>
      </CodeDisplayWrapper>
    </EditorContainer>
  );
}

const EditorContainer = styled.section`
  background-color: transparent;
  width: ${(props) => props.$width}%;
  height: 100%;
  /* border: 1px solid #2e5dfe; */
  border-radius: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
`;

//탭은 일단 대강 스타일로만 처리해뒀습니다...
const TabContainer = styled.div`
  display: flex;
  width: 100%;
  height: 8rem;
  border: 1px solid var(--main-color);
  border-bottom: none;
  border-radius: 2rem 0 0 0;
  z-index: 100;
`;
const Tab = styled.div`
  flex: 1;
  padding: 0.8rem 2rem;
  text-align: center;
  font-size: 1.4rem;
  cursor: pointer;
  background-color: var(--main-color);
  color: white;
`;
const ActiveTab = styled(Tab)`
  background-color: transparent;
  color: var(--main-color);
`;

const CodeDisplayWrapper = styled.div`
  border: 1px solid var(--main-color);
  flex: 1;
  padding: 1rem;
  height: calc(100% - 10rem);
  pre {
    margin: 0.5rem 0;
    padding: 1rem;
    font-size: 1.6rem;
  }
`;

const ResetButton = styled.button`
  position: absolute;
  bottom: 1rem; // margin-bottom 대신 bottom 사용
  left: 1rem;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer; // 커서 추가

  img {
    width: 30px;
    height: 30px;
  }
`;

Editor.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
