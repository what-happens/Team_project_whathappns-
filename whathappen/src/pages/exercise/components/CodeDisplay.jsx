import React from "react";
import BlankProblem from "./BlankProblem";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { html_beautify, css_beautify } from "js-beautify";
import PropTypes from "prop-types";
export default function CodeDisplay({ isMobile }) {
  const { parsedData, subCode, type, activeTab } = useSelector(
    (state) => state.exercise
  );

  const FormatterFactory = {
    html: (codeString) =>
      html_beautify(codeString, {
        indent_size: 2,
        end_with_newline: true,
        wrap_line_length: 80,
        wrap_attributes: "force",
        indent_empty_lines: true,
      }),
    css: (codeString) =>
      css_beautify(codeString, {
        indent_size: 2,
        wrap_line_length: 80,
        end_with_newline: true,
      }),
  };

  const displayCode = () => {
    if (activeTab === type) {
      return (
        parsedData.length !== 0 &&
        parsedData.segments.map((segment, index) => {
          if (segment.type === "code") {
            return <pre key={index}>{segment.content}</pre>;
          } else {
            return (
              <BlankProblem key={index} qid={segment.qid} isMobile={isMobile} />
            );
          }
        })
      );
    } else {
      return (
        <StyledSyntaxHighlighter
          language={type === "html" ? "css" : "html"}
          customStyle={{
            background: "transparent",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          {type === "html"
            ? FormatterFactory["css"](subCode)
            : FormatterFactory["html"](subCode)}
        </StyledSyntaxHighlighter>
      );
    }
  };

  return (
    <CodeDisplayWrapper $isMobile={isMobile}>
      <h3 className="sr-only">코드 에디터</h3>
      {displayCode()}
    </CodeDisplayWrapper>
  );
}

CodeDisplay.propTypes = {
  isMobile: PropTypes.bool,
};

const CodeDisplayWrapper = styled.section`
  border: 1px solid var(--main-color);
  flex: 1;
  padding: 1rem;
  height: calc(100% - 10rem);
  overflow-y: scroll;
  font-size: 1.6rem;
  border-radius: ${(props) =>
    props.$isMobile ? "0 0 2rem 2rem" : "0 0 0 2rem"};
  /* 웹킷 기반 브라우저 */
  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  pre {
    margin: 0.5rem 0;
    padding: 1rem;
  }
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
