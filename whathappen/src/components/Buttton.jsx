import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Button({
  fontSize = "small",
  padding = "1rem 2rem",
  color = "white",
  backgroundColor = "blue",
  borderRadius = "2rem",
  type = "button",
  border = "none",
  onClick,
  children,
  width,
}) {
  return (
    <StyledButton
      $fontSize={fontSize}
      $padding={padding}
      $color={color}
      $backgroundColor={backgroundColor}
      $borderRadius={borderRadius}
      $border={border}
      type={type}
      onClick={onClick}
      $width={width}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${(props) => {
    switch (props.$backgroundColor) {
      case "red":
        return "#FF2E62";
      case "green":
        return "#99C84F";
      case "white":
        return "#FFFFFF";
      default:
        return "#2E5DFE";
    }
  }};
  font-size: ${(props) => (props.$fontSize === "small" ? "2rem" : "4rem")};
  color: ${(props) =>
    props.$color === "blue"
      ? "#2E5DFE"
      : props.$color === "black"
        ? "#000"
        : props.$color === "white"
          ? "#FFF"
          : "none"};
  padding: ${(props) => props.$padding};
  line-height: 3rem;
  border-radius: ${(props) => props.$borderRadius};
  cursor: pointer;
  border: ${(props) => props.$border};
  width: ${(props) => props.$width};
`;

Button.propTypes = {
  fontSize: PropTypes.oneOf(["small", "large"]),
  padding: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
  border: PropTypes.node,
};
