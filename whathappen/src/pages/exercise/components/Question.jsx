import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
export default function Question({ height }) {
  return <QuestionContainer $height={height}>Question</QuestionContainer>;
}

const QuestionContainer = styled.section`
  width: 100%;
  height: ${(props) => props.$height}%;
  border: 1px solid var(--main-color);
  border-radius: 0px 20px 0px 0px;
`;

Question.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
