import React from "react";
import { useState } from "react";
import styled from "styled-components";
import InfiniteComponentLoader from "../components/InfiniteComponentLoader";
import Header from "../components/Header";
import Chatbot from "./chatbot/Chatbot";
import chatOpen from "../assets/chatbot_open.png";
import chatClose from "../assets/chatbot_close.png";
import { useSelector } from "react-redux";

const App = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };
  return (
    <>
      <Header />
      {isChatbotOpen && <Chatbot />}
      <InfiniteComponentLoader />
      {isLoggedIn && (
        <ChatToggle
          src={isChatbotOpen ? chatClose : chatOpen}
          alt={isChatbotOpen ? "챗봇 닫기" : "챗봇 열기"}
          onClick={toggleChatbot}
        />
      )}
    </>
  );
};

export default App;

const ChatToggle = styled.img`
  width: 6rem;
  height: 6rem;
  position: fixed;
  bottom: 1.8rem;
  right: 2rem;
  cursor: pointer;
`;
