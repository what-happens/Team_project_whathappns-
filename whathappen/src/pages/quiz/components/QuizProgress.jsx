import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
export default function QuizProgress({
  currentQuestionNumber,
  totalQuestionNumber,
}) {
  return (
    <ProgressWrapper>
      <ProgressBar
        current={currentQuestionNumber}
        total={totalQuestionNumber}
      />
    </ProgressWrapper>
  );
}

const ProgressWrapper = styled.div`
  height: 1.3rem;
  width: 100%;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #b3b3b3;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #2e5dff;
  width: ${(props) => (props.current / props.total) * 100}%;
  transition: width 0.3s ease;
`;

QuizProgress.propTypes = {
  currentQuestionNumber: PropTypes.number.isRequired,
  totalQuestionNumber: PropTypes.number.isRequired,
};
