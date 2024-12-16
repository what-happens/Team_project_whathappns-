import styled from "styled-components";
import PropTypes from "prop-types";

export default function Message({ type, text }) {
  return <MessageBubble type={type}>{text}</MessageBubble>;
}

Message.propTypes = {
  type: PropTypes.oneOf(["bot", "user"]).isRequired,
  text: PropTypes.string.isRequired,
};

const MessageBubble = styled.p`
  border-radius: 2rem;
  max-width: 21.4rem;
  padding: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  position: relative;
  word-break: break-word;
  white-space: pre-wrap;

  ${(props) =>
    props.type === "bot"
      ? `
    align-self: flex-start;
    background-color: #f6f6f6;
    color: #000;
  `
      : `
    align-self: flex-end;
    background-color: #1a3bad;
    color: #fff;
  `}
`;
