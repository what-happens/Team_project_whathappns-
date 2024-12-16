import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import leftArrow from "../../assets/left_arrow.png";
import sendImg from "../../assets/send.png";
import Message from "./component/Message";
import PropTypes from "prop-types";
import { useChat } from "../../hooks/useChatService";

export default function ChatbotMessages({ onPrev }) {
  const [inputMessage, setInputMessage] = useState("");
  const { messages, isLoading, error, sendMessage, clearError } = useChat();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    await sendMessage(inputMessage);
    setInputMessage("");
  };

  return (
    <MessagesWrap>
      <ChatHeader>
        <LeftArrow src={leftArrow} alt="이전으로 돌아가기" onClick={onPrev} />
        <Title>MR.potato</Title>
      </ChatHeader>
      <MsgContent>
        {messages.map((message, index) => (
          <Message key={index} type={message.type} text={message.text} />
        ))}
        {isLoading && <LoadingDots>답변 작성 중...</LoadingDots>}
        {error && (
          <ErrorMessage onClick={clearError}>
            {error}
            <ErrorCloseHint>(클릭하여 닫기)</ErrorCloseHint>
          </ErrorMessage>
        )}
        <div ref={messagesEndRef} />
      </MsgContent>
      <ChatControl>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="question" className="sr-only">
            질문을 입력하세요
          </label>
          <MsgInput
            id="question"
            name="question"
            placeholder="메세지를 입력하세요."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            disabled={isLoading}
          />
          <SendButton
            type="submit"
            disabled={isLoading || !inputMessage.trim()}
            aria-label="메시지 보내기"
          />
        </StyledForm>
      </ChatControl>
    </MessagesWrap>
  );
}

ChatbotMessages.propTypes = {
  onPrev: PropTypes.func.isRequired,
};

const MessagesWrap = styled.div`
  background-color: #fff;
  padding: 2.6rem 2.3rem;
  border: 1px solid #2e5dff;
  width: 30.4rem;
  height: 44.5rem;
  border-radius: 2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem 0.1rem rgba(0, 0, 0, 0.3);
`;

const ChatHeader = styled.header`
  width: 26.3rem;
  height: 3rem;
`;

const Title = styled.p`
  font-size: 1.8rem;
  font-family: "Gmarket Sans";
  font-weight: 700;
  text-align: center;
  line-height: 3.3rem;
`;

const LeftArrow = styled.img`
  position: absolute;
  top: 3.5rem;
`;

const MsgContent = styled.div`
  width: 100%;
  height: 27rem;
  margin: 3.7rem auto 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`;

const ChatControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
`;

const MsgInput = styled.input`
  border: none;
  width: 20.3rem;
  height: 3.1rem;
  border-radius: 1.5rem;
  background-color: #f6f6f6;
  padding-left: 2rem;

  &::placeholder {
    font-size: 1.2rem;
    font-family: "Gmarket Sans";
    font-weight: 300;
    color: #000;
  }
`;

const SendButton = styled.button`
  border: none;
  min-width: 5.3rem;
  height: 3.1rem;
  border-radius: 1.5rem;
  background-color: #1a3bad;
  background-image: url(${sendImg});
  background-repeat: no-repeat;
  background-position: center left 1.5rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #142d87;
  }
`;

const LoadingDots = styled.div`
  align-self: flex-start;
  color: #666;
  font-size: 1rem;
  padding: 1rem;
  background-color: #f6f6f6;
  border-radius: 2rem;
`;

const ErrorMessage = styled.div`
  align-self: center;
  color: #ff0000;
  font-size: 1rem;
  padding: 1rem;
  text-align: center;
  background-color: #fff3f3;
  border-radius: 2rem;
  margin: 0.5rem 0;
  cursor: pointer;
`;

const ErrorCloseHint = styled.span`
  display: block;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  opacity: 0.7;
`;
