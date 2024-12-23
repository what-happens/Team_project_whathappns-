export const ParserFactory = {
  html: (codeString, questions) => parseHtml(codeString, questions),
  css: (codeString, questions) => parseCss(codeString, questions),
};

function parseHtml(codeString, questions) {
  let depth = 0;
  const segments = [];
  const regex = /\|=(\d+)=\|/g;
  let lastIndex = 0;
  let match;
  let htmlCode = ""; // 전체 HTML 코드 저장 변수

  while ((match = regex.exec(codeString)) !== null) {
    // 이전 텍스트 처리
    if (match.index > lastIndex) {
      const content = codeString.slice(lastIndex, match.index).trim();
      segments.push({ type: "code", content: indentHtml(content, depth) });
      htmlCode += content; // 전체 HTML 코드에 추가
    }

    // 빈 칸 처리 (question ID에 맞는 답변을 찾아서 그 답변으로 변경)
    const qid = parseInt(match[1], 10);
    const question = questions.find((q) => q.q_id === qid);
    if (question) {
      const answer = question.answer; // 해당 질문의 답변
      segments.push({ type: "blank", qid: qid, answer: answer });
      htmlCode += answer; // 답변을 HTML 코드에 추가
    } else {
      segments.push({ type: "blank", qid: qid });
      htmlCode += `|=${qid}=|`; // 빈 칸을 그대로 추가
    }

    lastIndex = regex.lastIndex;
  }

  // 남은 텍스트 처리
  if (lastIndex < codeString.length) {
    const content = codeString.slice(lastIndex).trim();
    segments.push({ type: "code", content: indentHtml(content, depth) });
    htmlCode += content; // 전체 HTML 코드에 추가
  }

  return { segments, htmlCode }; // segments와 htmlCode를 반환
}

function indentHtml(content, depth) {
  const selfClosingTags = ["meta", "br", "img", "input", "link", "hr"];
  const indentedLines = [];
  let currentLine = "";
  let i = 0;

  while (i < content.length) {
    const char = content[i];

    if (char === "<") {
      if (currentLine.length > 0) {
        indentedLines.push("  ".repeat(depth) + currentLine);
        currentLine = "";
      }

      let tag = "<";
      i++;
      while (i < content.length && content[i] !== ">") {
        tag += content[i];
        i++;
      }
      tag += ">";

      if (tag.match(/<!DOCTYPE html>/)) {
        indentedLines.push(tag); // doctype 태그는 들여쓰지 않음
        i++;
        continue;
      }

      const tagName = tag.match(/<(\w+)(\s|>)/);
      if (tagName && selfClosingTags.includes(tagName[1])) {
        indentedLines.push("  ".repeat(depth) + tag); // 셀프 클로징 태그는 바로 출력
        i++;
        continue;
      }

      indentedLines.push("  ".repeat(depth) + tag);
      if (tag.match(/<[^/][^>]*[^/]>/)) {
        depth += 1;
      }
    } else {
      currentLine += char;
    }

    i++;
  }

  if (currentLine.length > 0) {
    indentedLines.push("  ".repeat(depth) + currentLine);
  }

  return indentedLines.join("\n");
}

function parseCss(codeString, questions) {
  let depth = 0;
  const segments = [];
  const regex = /\|=(\d+)=\|/g;
  let lastIndex = 0;
  let match;
  let cssCode = ""; // 전체 CSS 코드 저장 변수

  while ((match = regex.exec(codeString)) !== null) {
    // 이전 텍스트 처리
    if (match.index > lastIndex) {
      const content = codeString.slice(lastIndex, match.index).trim();
      segments.push({ type: "code", content: indentCss(content, depth) });
      cssCode += content; // 전체 CSS 코드에 추가
    }

    // 빈 칸 처리 (question ID에 맞는 답변을 찾아서 그 답변으로 변경)
    const qid = parseInt(match[1], 10);
    const question = questions.find((q) => q.q_id === qid);
    if (question) {
      const answer = question.answer; // 해당 질문의 답변
      segments.push({ type: "blank", qid: qid, answer: answer });
      cssCode += answer; // 답변을 CSS 코드에 추가
    } else {
      segments.push({ type: "blank", qid: qid });
      cssCode += `|=${qid}=|`; // 빈 칸을 그대로 추가
    }

    lastIndex = regex.lastIndex;
  }

  // 남은 텍스트 처리
  if (lastIndex < codeString.length) {
    const content = codeString.slice(lastIndex).trim();
    segments.push({ type: "code", content: indentCss(content, depth) });
    cssCode += content; // 전체 CSS 코드에 추가
  }

  return { segments, cssCode }; // segments와 cssCode를 반환
}

function indentCss(content, depth) {
  const indentedLines = [];
  let currentBlock = "";
  let braceCount = depth;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];

    if (char === "{") {
      // 현재 블록이 있다면 추가
      if (currentBlock.trim()) {
        indentedLines.push("  ".repeat(braceCount) + currentBlock.trim());
        currentBlock = "";
      }

      // 열린 중괄호 추가
      indentedLines.push("  ".repeat(braceCount) + "{");
      braceCount++;
    } else if (char === "}") {
      // 현재 블록 내용이 있다면 추가
      if (currentBlock.trim()) {
        indentedLines.push("  ".repeat(braceCount) + currentBlock.trim());
        currentBlock = "";
      }

      // 닫힌 중괄호 추가
      braceCount--;
      if (braceCount < 0) {
        braceCount = 0; // 기본값 설정 (또는 다른 적절한 값)
      }
      indentedLines.push("  ".repeat(braceCount) + "}");
    } else if (char === ";") {
      // 세미콜론을 만나면 현재 블록 추가
      if (currentBlock.trim()) {
        indentedLines.push("  ".repeat(braceCount) + currentBlock.trim() + ";");
        currentBlock = "";
      }
    } else {
      currentBlock += char;
    }
  }

  // 남은 내용 처리
  if (currentBlock.trim()) {
    indentedLines.push("  ".repeat(braceCount) + currentBlock.trim());
  }

  return indentedLines.join("\n");
}
