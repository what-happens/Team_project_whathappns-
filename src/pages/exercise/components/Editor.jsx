// Editor.jsx
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CodeDisplay from "./CodeDisplay";
import FileTab from "./FileTab";
export default function Editor({ width, isMobile }) {
  return (
    <EditorContainer $width={width}>
      <FileTab isMobile={isMobile} />
      <CodeDisplay isMobile={isMobile} />
    </EditorContainer>
  );
}

const EditorContainer = styled.section`
  background-color: transparent;
  width: ${(props) => props.$width}%;
  height: auto;
  /* border: 1px solid #2e5dfe; */
  border-radius: 2rem 0 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: auto;
`;
Editor.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isMobile: PropTypes.bool,
};
