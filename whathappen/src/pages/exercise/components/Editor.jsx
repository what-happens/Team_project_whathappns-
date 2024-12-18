import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CodeDisplay from "./CodeDisplay";

export default function Editor({ width }) {
  return (
    <EditorContainer $width={width}>
      <CodeDisplay />
    </EditorContainer>
  );
}

const EditorContainer = styled.section`
  width: ${(props) => props.$width}%;
  height: 100%;
  border: 1px solid var(--main-color);
  border-radius: 20px 0 0 20px;
`;

Editor.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
