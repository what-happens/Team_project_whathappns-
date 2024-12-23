import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useExercise from "../../../hooks/useExercise";
import PropTypes from "prop-types";

export default function FileTab({ isMobile }) {
  const { activeTab } = useSelector((state) => state.exercise);
  const { setExerciseActiveTab } = useExercise();

  const handleClickTab = (tabType) => {
    setExerciseActiveTab(tabType);
  };

  return (
    <TabContainer $isMobile={isMobile}>
      <Tab
        onClick={() => handleClickTab("html")}
        $isActive={activeTab === "html"}
      >
        html
      </Tab>
      <Tab
        onClick={() => handleClickTab("css")}
        $isActive={activeTab === "css"}
      >
        css
      </Tab>
    </TabContainer>
  );
}

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  height: 8rem;
  border: 1px solid var(--main-color);
  border-bottom: none;
  border-radius: ${(props) =>
    props.$isMobile ? "2rem 2rem 0 0" : "2rem 0 0 0"};
  z-index: 100;
`;

const Tab = styled.button`
  flex: 1;
  padding: 0.8rem 2rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  color: var(--main-color);
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--main-color)" : "transparent"};
  color: ${({ $isActive }) => ($isActive ? "white" : "var(--main-color)")};

  &:hover {
    background-color: var(--main-color);
    color: white;
  }
`;

FileTab.propTypes = {
  isMobile: PropTypes.bool,
};
