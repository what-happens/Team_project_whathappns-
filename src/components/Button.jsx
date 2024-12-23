import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { media } from "../styles/MideaQuery";

export default function Button({
  fontSize = "small",
  padding = "1rem 2rem",
  color = "white",
  backgroundColor = "blue",
  borderRadius = "2rem",
  type = "button",
  border = "none",
  fontFamily = "Gmarket Sans",
  onClick,
  children,
  width,
  mediumStyles = {},
  xsmallStyles = {},
  smallStyles = {},
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
      $fontFamily={fontFamily}
      $mediumStyles={mediumStyles}
      $smallStyles={smallStyles}
      $xsmallStyles={xsmallStyles}
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
      case "black":
        return "#000000";
      case "gray":
        return "#C4C4C4";
      default:
        return "#2E5DFE";
    }
  }};
  font-size: ${(props) => (props.$fontSize === "small" ? "2rem" : "4rem")};
  color: ${(props) => {
    switch (props.$color) {
      case "blue":
        return "#2E5DFE";
      case "white":
        return "#FFFFFF";
      case "black":
        return "#000000";
      default:
        return "#2E5DFE";
    }
  }};
  padding: ${(props) => props.$padding};
  line-height: 3rem;
  border-radius: ${(props) => props.$borderRadius};
  cursor: pointer;
  border: ${(props) => props.$border};
  width: ${(props) => props.$width};
  font-family: ${(props) => props.$fontFamily};
  ${media.medium`
    ${(props) => props.$mediumStyles}
  `}

  ${media.small`
    ${(props) => props.$smallStyles}
  `}

  ${media.xsmall`
    ${(props) => props.$xsmallStyles} 
  `}

  &:hover {
    background-color: ${(props) => {
      switch (props.$backgroundColor) {
        case "red":
          return "#FF1751";
        case "green":
          return "#7AC800";
        case "white":
          return "#ececec";
        case "gray":
          return "#333333";
        default:
          return "#1348FF";
      }
    }};
  }
`;

// Define PropTypes
Button.propTypes = {
  fontSize: PropTypes.oneOf(["small", "large"]),
  padding: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.oneOf([
    "red",
    "green",
    "white",
    "black",
    "gray",
    "blue",
  ]),
  borderRadius: PropTypes.string,
  type: PropTypes.string,
  border: PropTypes.string,
  fontFamily: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  mediumStyles: PropTypes.object,
  smallStyles: PropTypes.object,
  xsmallStyles: PropTypes.object,
};
