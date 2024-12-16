import styled from "styled-components";
import PropTypes from "prop-types";

export default function Message({ type, text }) {
  return <MessagesStyle type={type}>{text}</MessagesStyle>;
}

Message.propTypes = {
  type: PropTypes.oneOf(["bot", "user"]).isRequired,
  text: PropTypes.string.isRequired,
};

const MessagesStyle = styled.p`
  border-radius: 2rem;
  max-width: 21.4rem;
  padding: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  /* font-family: "Gmarket Sans";
  font-weight: 400; */
  position: relative;

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
