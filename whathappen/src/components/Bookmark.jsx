import { ReactComponent as BookmarkIcon } from "../assets/iconBookmark.svg";
import propTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";

export default function Bookmark({ top = 0, right = 0 }) {
  const [clicked, setClicked] = useState(false);
  const handleClickBookmark = () => {
    setClicked((prev) => !prev);
  };

  return (
    <StyledBookmark
      $clicked={clicked}
      $top={top}
      $right={right}
      onClick={handleClickBookmark}
    />
  );
}

const StyledBookmark = styled(BookmarkIcon)`
  position: absolute;
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  fill: ${(props) => (props.$clicked ? "#FF2E62" : "#C4C4C4")};
  cursor: pointer;
`;

Bookmark.propTypes = {
  top: propTypes.oneOfType([propTypes.string, propTypes.number]),
  right: propTypes.oneOfType([propTypes.string, propTypes.number]),
};
