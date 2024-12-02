import React, { useState } from "react";
import BlankProblem from "./components/BlankProblem";
import BlankOption from "./components/BlankOption";

const problems = [
  {
    id: 0,
    correct_answer: "<button>Like</button>",
    incorrect_answer: ["<p>Like</p>", "<a>Like</a>", "<em>Like</em>"],
  },
  {
    id: 1,
    correct_answer: "<button>unLike</button>",
    incorrect_answer: ["<p>unLike</p>", "<a>unLike</a>", "<em>unLike</em>"],
  },
];

export default function Exercise() {
  const [selectedProblemId, setSelectedProblemId] = useState(null); //id를 값으로 받음
  const [isShow, setIsShow] = useState(false);

  const selectedProblem = problems.find(
    (problem) => problem.id === selectedProblemId
  );

  return (
    <>
      {problems.map((problem) => {
        return (
          <BlankProblem
            key={problem.id}
            problem={problem}
            onSelect={setSelectedProblemId}
            setIsShow={setIsShow}
          />
        );
      })}
      {isShow && <BlankOption problem={selectedProblem} />}
    </>
  );
}
