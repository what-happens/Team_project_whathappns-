import { useState } from "react";

export const useChat = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "안녕하세요! 무엇이 궁금하신가요?!?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearError = () => setError(null);

  const BASE_URL = process.env.REACT_APP_ALAN_API;
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  async function askQuestion(content) {
    try {
      const url = new URL(`${BASE_URL}/api/v1/question  `);
      url.searchParams.append("content", content);
      url.searchParams.append("client_id", CLIENT_ID);

      const proxyUrl = "https://api.allorigins.win/raw?url=";
      const response = await fetch(
        proxyUrl + encodeURIComponent(url.toString()),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
      console.log("응답:", data);

      setMessages((prev) => [...prev, { type: "bot", text: data.content }]);
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
