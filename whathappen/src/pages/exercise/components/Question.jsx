import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
export default function Question({ height }) {
  return <QuestionContainer $height={height}>Question</QuestionContainer>;
}

const QuestionContainer = styled.section`
  width: 100%;
  height: ${(props) => props.$height}%;
`;

Question.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
