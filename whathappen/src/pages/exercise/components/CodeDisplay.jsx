import React from "react";
import BlankProblem from "./BlankProblem";
import { useSelector } from "react-redux";

export default function CodeDisplay() {
  const { parsedData } = useSelector((state) => state.learn);

  return (
    <>
      {parsedData.length !== 0 &&
        parsedData.segments.map((segment, index) => {
          if (segment.type === "code") {
            return <pre key={index}>{segment.content}</pre>;
          } else if (segment.type === "blank") {
            return <BlankProblem key={index} qid={segment.qid} />;
          }
          return null;
        })}
    </>
  );
}
