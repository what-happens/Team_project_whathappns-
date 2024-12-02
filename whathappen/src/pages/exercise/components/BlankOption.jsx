import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../../components/Button";

export default function BlankOption({ problem }) {
  const [isLoading, setIsLoading] = useState(false);
  const [shuffledAnswer, setShuffledAnswer] = useState([]);
  const shuffleArray = (arr) => {
    const newArray = [...arr];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    const shuffled = shuffleArray([
      ...problem.incorrect_answer,
      problem.correct_answer,
    ]);
    setShuffledAnswer(shuffled);
    setIsLoading(true);
  }, [problem]);

  if (!isLoading) {
    return <div>loading</div>;
  }

  return shuffledAnswer.map((answer, idx) => (
    <Button key={`${problem.id}-${idx}`}>{answer}</Button>
  ));
}

BlankOption.propTypes = {
  problem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answer: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
