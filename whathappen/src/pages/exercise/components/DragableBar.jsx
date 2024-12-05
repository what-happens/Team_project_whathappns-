import PropTypes from "prop-types";
import React, { useRef, useCallback } from "react";
import styled from "styled-components";

export default function DragableBar({ vertical, onDrag }) {
  const startXRef = useRef(null);
  const barRef = useRef(null);

  const handleMouseDown = useCallback(
    (event) => {
      event.preventDefault();
      const containerWidth = barRef.current
        ? barRef.current.parentElement.offsetWidth
        : window.innerWidth;

      startXRef.current = event.clientX;

      const handleMouseMove = (moveEvent) => {
        if (startXRef.current !== null) {
          const delta = moveEvent.clientX - startXRef.current;
          const deltaPercent = (delta / containerWidth) * 100;

          onDrag(deltaPercent);
          startXRef.current = moveEvent.clientX;
        }
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        startXRef.current = null;
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [onDrag]
  );

  return (
    <Bar ref={barRef} onMouseDown={handleMouseDown} $vertical={vertical} />
  );
}

const Bar = styled.div`
  width: ${(props) => (props.$vertical ? "15px" : "100%")};
  height: ${(props) => (props.$vertical ? "100%" : "8px")};
  cursor: ${(props) => (props.$vertical ? "ew-resize" : "ns-resize")};
  background-color: white;
  border: 1px solid #2e5dfe;
`;

DragableBar.propTypes = {
  vertical: PropTypes.bool,
  onDrag: PropTypes.func.isRequired,
};
