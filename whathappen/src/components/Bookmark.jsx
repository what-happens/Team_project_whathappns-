import { ReactComponent as BookmarkIcon } from "../assets/iconBookmark.svg";
import propTypes from "prop-types";
import styled from "styled-components";
// import { useState } from "react";

export default function Bookmark({
  top = 0,
  right = 0,
  size = "large",
  isBookmarked,
  onClick,
}) {
  // const [clicked, setClicked] = useState(false);
  // const handleClickBookmark = () => {
  //   setClicked((prev) => !prev);
  // };

  return (
    <StyledBookmark
      $clicked={isBookmarked}
      $top={top}
      $right={right}
      $size={size}
      onClick={onClick}
    />
  );
}

const StyledBookmark = styled(BookmarkIcon)`
  position: absolute;
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  fill: ${(props) => (props.$clicked ? "#FF2E62" : "#C4C4C4")};
  width: ${(props) => (props.$size === "small" ? "3rem" : "4.5rem")};
  height: ${(props) => (props.$size === "small" ? "6.5em" : "10rem")};
  cursor: pointer;
  transition: all 0.5s;
`;

Bookmark.propTypes = {
  top: propTypes.oneOfType([propTypes.string, propTypes.number]),
  right: propTypes.oneOfType([propTypes.string, propTypes.number]),
  size: propTypes.string,
  isBookmarked: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
};
