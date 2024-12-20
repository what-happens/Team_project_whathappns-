import { useState } from "react";
import { marked } from "marked";

const stripHtml = (html) => {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
};

const markdownToText = (markdown) => {
  const html = marked(markdown);
  return stripHtml(html);
};

export const useChat = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "안녕하세요! 무엇이 궁금하신가요?!?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearError = () => setError(null);

  const BASE_URL = process.env.REACT_APP_ALAN_API;
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const PROMPT = "학습자의 질문에 명확하고 이해하기 쉽게 답변하고 출처는 삭제";

  async function askQuestion(content) {
    try {
      const url = new URL(`${BASE_URL}/api/v1/question`); // 백틱으로 수정
      url.searchParams.append("content", content + PROMPT);
      url.searchParams.append("client_id", CLIENT_ID);
      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  const sendMessage = async (userMessage) => {
    if (!userMessage.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);

    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);

    try {
      const data = await askQuestion(userMessage.toString());

      const plainText = markdownToText(data.content);

      setMessages((prev) => [...prev, { type: "bot", text: plainText }]);
    } catch (err) {
      console.error("에러:", err);
      setError(err.message);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "죄송합니다. 서비스 오류가 발생했습니다.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearError,
  };
};
