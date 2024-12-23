import styled from "styled-components";
import chatbotLogo from "../../assets/chatbot_logo.png";
import chatbotPotato from "../../assets/chatbot_potato.png";
import PropTypes from "prop-types";

export default function ChatbotLanding({ onNext }) {
  return (
    <ChatbotWrap>
      <ChatbotLogoImg src={chatbotLogo} alt="이게되네 로고"></ChatbotLogoImg>
      <ChatbotPotatoImg src={chatbotPotato} alt=""></ChatbotPotatoImg>
      <p
        style={{
          fontSize: "1.8rem",
          fontFamily: "Gmarket Sans",
          fontWeight: "300",
          color: "white",
          marginBottom: "1.3rem",
        }}
      >
        안녕하세요, 무엇을 도와드릴까요??
      </p>
      <ChatButton onClick={onNext}>MR.potato와 상담하기!</ChatButton>
    </ChatbotWrap>
  );
}

ChatbotLanding.propTypes = {
  onNext: PropTypes.func.isRequired,
};

const ChatbotWrap = styled.div`
  background-color: #1a3bad;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35.4rem;
  height: 46.5rem;
  border-radius: 2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem 0.1rem rgba(0, 0, 0, 0.3);
`;

const ChatbotLogoImg = styled.img`
  margin-bottom: 6.4rem;
  width: 15.6rem;
  height: 3.9rem;
`;

const ChatbotPotatoImg = styled.img`
  margin-bottom: 3.8rem;
`;

const ChatButton = styled.button`
  border: none;
  width: 27.7rem;
  height: 5.7rem;
  border-radius: 1.5rem;
  background-color: #f6f6f6;
  font-size: 1.6rem;
  font-family: "Gmarket Sans";
  font-weight: 300;
`;
