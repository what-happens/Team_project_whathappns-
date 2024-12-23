import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function AnswerIframe() {
  const { parsedData, type, subCode } = useSelector((state) => state.exercise);
  const generateIframeContent = (cssCode, htmlCode) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode} 
      </body>
      </html>
    `;
  };

  const srcDoc = useMemo(() => {
    if (type === "css") {
      return generateIframeContent(parsedData.cssCode, subCode);
    } else if (type === "html") {
      return generateIframeContent(subCode, parsedData.htmlCode);
    }
    return "";
  }, [type, parsedData, subCode]);

  return <StyledIframe srcDoc={srcDoc} />;
}

const StyledIframe = styled.iframe`
  width: 100%;
  height: 90%;
  /* 웹킷 기반 브라우저 */
  &::-webkit-scrollbar {
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
