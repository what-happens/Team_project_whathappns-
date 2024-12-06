import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Editor({ width, editorItem }) {
  return <EditorContainer $width={width}>{editorItem}</EditorContainer>;
}

const EditorContainer = styled.section`
  width: ${(props) => props.$width}%;
  height: 100%;
`;

Editor.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  editorItem: PropTypes.array,
};
