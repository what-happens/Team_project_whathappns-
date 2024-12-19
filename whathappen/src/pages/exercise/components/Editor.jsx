// Editor.jsx
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CodeDisplay from "./CodeDisplay";
import FileTab from "./FileTab";
export default function Editor({ width }) {
  return (
    <EditorContainer $width={width}>
      <FileTab />
      <CodeDisplay />
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
Editor.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
