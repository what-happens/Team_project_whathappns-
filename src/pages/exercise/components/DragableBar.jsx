import PropTypes from "prop-types";
import React, { useRef, useCallback } from "react";
import styled from "styled-components";

export default function DragableBar({ vertical, onDrag }) {
  const startXRef = useRef(null);
  const barRef = useRef(null);

  // 공통 핸들러: 드래그 시작
  const handleDragStart = useCallback(
    (startX, containerWidth) => {
      const handleMove = (moveEvent) => {
        let currentX;

        // 터치 또는 마우스 위치 계산
        if (moveEvent.touches) {
          currentX = moveEvent.touches[0].clientX;
        } else {
          currentX = moveEvent.clientX;
        }

        const delta = currentX - startXRef.current;
        const deltaPercent = (delta / containerWidth) * 100;

        onDrag(deltaPercent);
        startXRef.current = currentX;
      };

      const handleEnd = () => {
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleEnd);
        document.removeEventListener("touchmove", handleMove);
        document.removeEventListener("touchend", handleEnd);
        startXRef.current = null;
      };

      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchmove", handleMove);
      document.addEventListener("touchend", handleEnd);
    },
    [onDrag]
  );

  // 마우스 다운 핸들러
  const handleMouseDown = useCallback(
    (event) => {
      event.preventDefault();
      const containerWidth = barRef.current
        ? barRef.current.parentElement.offsetWidth
        : window.innerWidth;

      startXRef.current = event.clientX;
      handleDragStart(event.clientX, containerWidth);
    },
    [handleDragStart]
  );

  // 터치 시작 핸들러
  const handleTouchStart = useCallback(
    (event) => {
      const containerWidth = barRef.current
        ? barRef.current.parentElement.offsetWidth
        : window.innerWidth;

      startXRef.current = event.touches[0].clientX;
      handleDragStart(event.touches[0].clientX, containerWidth);
    },
    [handleDragStart]
  );

  return (
    <Bar
      ref={barRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      $vertical={vertical}
    />
  );
}

const Bar = styled.div`
  width: ${(props) => (props.$vertical ? "1.5rem" : "100%")};
  height: ${(props) => (props.$vertical ? "auto" : "0.8rem")};
  cursor: ${(props) => (props.$vertical ? "ew-resize" : "ns-resize")};
  background-color: white;
  border: 1px solid #2e5dfe;
`;

DragableBar.propTypes = {
  vertical: PropTypes.bool,
  onDrag: PropTypes.func.isRequired,
};
