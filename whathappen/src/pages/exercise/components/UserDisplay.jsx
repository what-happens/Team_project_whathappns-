import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function UserDisplay({ height }) {
  return (
    <UserDisplayContainer $height={height}>UserDisplay</UserDisplayContainer>
  );
}

const UserDisplayContainer = styled.section`
  width: 100%;
  height: ${(props) => props.$height}%;
  border: 1px solid var(--main-color);
  border-radius: 0 0 20px 0px;
`;

UserDisplay.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
