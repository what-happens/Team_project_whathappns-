import React from "react";
import styled from "styled-components";

export default function FileTab() {
  return (
    <TabContainer>
      <ActiveTab>html</ActiveTab>
      <Tab>css</Tab>
    </TabContainer>
  );
}

const TabContainer = styled.section`
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
  background-color: var(--main-color);
  color: white;
`;

const ActiveTab = styled(Tab)`
  background-color: transparent;
  color: var(--main-color);
`;
