import styled from "styled-components";
import leftArrow from "../../assets/left_arrow.png";
import sendImg from "../../assets/send.png";
import Message from "./component/Messages";
import PropTypes from "prop-types";

export default function ChatbotMessages({ onPrev }) {
  return (
    <MessagesWrap>
      <ChatHeader>
        <LeftArrow src={leftArrow} alt="이전으로 돌아가기" onClick={onPrev} />
        <p
          style={{
            fontSize: "1.8rem",
            fontFamily: "Gmarket Sans",
            fontWeight: "700",
            textAlign: "center",
            lineHeight: "3.3rem",
          }}
        >
          MR.potato
        </p>
      </ChatHeader>
      <MsgContent>
        <Message type="bot" text="안녕하세요. 무엇을 도와드릴까요?" />
        <Message type="user" text="img 태그에 대해 알려줘" />
        <Message
          type="bot"
          text="img 태그는 HTML에서 이미지를 표시하기 위해 사용되는 태그입니다."
        />
      </MsgContent>
      <ChatControl>
        <form>
          <label htmlFor="question" className="sr-only">
            질문을 입력하세요
          </label>
          <MsgInput name="question" placeholder="메세지를 입력하세요." />
        </form>
        <SendMessages />
      </ChatControl>
    </MessagesWrap>
  );
}

ChatbotMessages.propTypes = {
  onPrev: PropTypes.func.isRequired,
};

const MessagesWrap = styled.div`
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

const SendMessages = styled.button`
  border: none;
  width: 5.3rem;
  height: 3.1rem;
  border-radius: 1.5rem;
  background-color: #1a3bad;
  background-image: url(${sendImg});
  background-repeat: no-repeat;
  background-position: center left 1.5rem;
`;
