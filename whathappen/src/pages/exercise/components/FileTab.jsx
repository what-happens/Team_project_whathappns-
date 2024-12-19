import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useExercise from "../../../hooks/useExercise";

export default function FileTab() {
  const { activeTab } = useSelector((state) => state.learn);
  const { setExerciseActiveTab } = useExercise();

  const handleClickTab = (tabType) => {
    setExerciseActiveTab(tabType);
  };

  return (
    <TabContainer>
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
  border-radius: 2rem 0 0 0;
  z-index: 100;
`;

const Tab = styled.button`
  flex: 1;
  padding: 0.8rem 2rem;
  text-align: center;
  font-size: 1.4rem;
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
