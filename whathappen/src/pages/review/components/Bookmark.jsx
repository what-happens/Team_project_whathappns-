import { ReactComponent as BookmarkIcon } from "../../../assets/iconBookmark.svg";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";
import DeleteBookmarkModal from "./DeleteBookmarkModal";

export default function Bookmark({
  top = 0,
  right = 0,
  size = "large",
  isBookmarked,
  quizId,
}) {
  const [clicked, setClicked] = useState(isBookmarked);
  const [showModal, setShowModal] = useState(false);
  const handleAddBookmark = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/bookmark`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            qid: quizId,
            action: "add",
          }),
        }
      );

      if (response.ok) {
        setClicked(true);
      } else {
        console.error("북마크 추가 실패");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteBookmark = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/bookmark`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            qid: quizId,
            action: "delete",
          }),
        }
      );

      if (response.ok) {
        setClicked(false);
      } else {
        console.error("북마크 삭제 실패");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setShowModal(false);
    }
  };

  const handleClickBookmark = () => {
    if (clicked) {
      setShowModal(true);
    } else {
      handleAddBookmark();
    }
  };

  return (
    <>
      <StyledBookmark
        $clicked={clicked}
        $top={top}
        $right={right}
        $size={size}
        onClick={handleClickBookmark}
      />
      {showModal && (
        <DeleteBookmarkModal
          onClose={() => setShowModal(false)}
          onDelete={handleDeleteBookmark}
        />
      )}
    </>
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
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string,
  isBookmarked: PropTypes.bool,
  quizId: PropTypes.number.isRequired,
};
