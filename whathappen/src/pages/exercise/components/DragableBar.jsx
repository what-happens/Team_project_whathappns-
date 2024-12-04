import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
/*
  drag시 이벤트마다 deltaPercent가 prev + deltaPercent 돼서 중첩되는 듯 함
  1초만에 1.2를 20번 더 해서

*/
export default function DragableBar({ vertical, onDrag }) {
  const handleMouseDown = (event) => {
    event.preventDefault();
    const startX = event.clientX;

    const handleMouseMove = (moveEvent) => {
      const delta = moveEvent.clientX - startX;
      const deltaPercent = (delta / window.innerWidth) * 100;
      onDrag(deltaPercent);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return <Bar onMouseDown={handleMouseDown} $vertical={vertical} />;
}

const Bar = styled.div`
  width: ${(props) => (props.$vertical ? "8px" : "100%")};
  height: ${(props) => (props.$vertical ? "100%" : "8px")};
  cursor: pointer;
  background-color: blue;
`;

DragableBar.propTypes = {
  vertical: PropTypes.bool,
  onDrag: PropTypes.func,
};
