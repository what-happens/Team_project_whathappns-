import React from "react";
import BlankProblem from "./BlankProblem";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function CodeDisplay() {
  const { parsedData } = useSelector((state) => state.learn);

  return (
    <CodeDisplayWrapper>
      {parsedData.length !== 0 &&
        parsedData.segments.map((segment, index) => {
          if (segment.type === "code") {
            return <pre key={index}>{segment.content}</pre>;
          } else if (segment.type === "blank") {
            return <BlankProblem key={index} qid={segment.qid} />;
          }
          return null;
        })}
    </CodeDisplayWrapper>
  );
}

const CodeDisplayWrapper = styled.section`
  border: 1px solid var(--main-color);
  flex: 1;
  padding: 1rem;
  height: calc(100% - 10rem);
  pre {
    margin: 0.5rem 0;
    padding: 1rem;
    font-size: 1.6rem;
  }
  border-bottom-left-radius: 2rem;
`;
