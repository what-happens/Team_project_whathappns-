import { useState } from "react";

export const useChat = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "안녕하세요! 무엇이 궁금하신가요?!?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearError = () => setError(null);

  const sendMessage = async (userMessage) => {
    if (!userMessage.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);

    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);

    try {
      const params = new URLSearchParams({
        content: userMessage.toString(),
        client_id: process.env.REACT_APP_CLIENT_ID,
      }).toString();

      console.log(
        "API Request URL:",
        `${process.env.REACT_APP_ALAN_API}/api/v1/question?${params}`
      );

      const response = await fetch(
        `${process.env.REACT_APP_ALAN_API}/api/v1/question?${params}`,
        {
          method: "GET",
          headers: {
            Accept: "text/event-streaming",
            "Cache-Control": "no-cache",
          },
          mode: "no-cors",
        }
      );

      console.log(response);
      const data = await response.text();
      console.log("API Response:", data);

      if (!response.ok) {
        throw new Error(data.detail || "API 요청에 실패했습니다.");
      }

      setMessages((prev) => [...prev, { type: "bot", text: data.content }]);
    } catch (err) {
      console.error("Error:", err);
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
