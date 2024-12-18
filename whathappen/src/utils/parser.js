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

// CSS 파싱 함수
function parseCss(codeString) {
  let depth = 0;
  const lines = codeString.split("\n");
  const parsedLines = [];

  lines.forEach((line) => {
    line = line.trim();
    if (line.endsWith("}")) depth = Math.max(0, depth - 1);
    parsedLines.push("  ".repeat(depth) + line);
    if (line.endsWith("{")) depth += 1;
  });

  return [{ type: "code", content: parsedLines.join("\n") }];
}
