import React from "react";
import PropTypes from "prop-types";

const C = ({ levelId, learnData, onPrevious, onReset }) => {
  return (
    <div>
      <h1>C 페이지</h1>
      <p>Level ID: {levelId}</p>
      <pre>{JSON.stringify(learnData, null, 2)}</pre>
      <button onClick={onPrevious}>이전</button>
      <button onClick={onReset}>처음으로</button>
    </div>
  );
};

C.propTypes = {
  levelId: PropTypes.number.isRequired,
  learnData: PropTypes.array.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default C;
