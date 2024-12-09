import React, { useState } from "react";
import styled from "styled-components";
import ArrowImage from "../../../assets/iconLeftArrow.png";

// Styled-components 정의
const Container = styled.nav`
  height: 100%;
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover,
  &:active,
  &:focus {
    background-color: var(--main-color);
    color: white;
  }

  a {
    text-decoration: none;
    color: inherit;
    margin-right: 8px;
    font-size: 2.4rem;
  }
`;

const ToggleButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: black;
  margin-right: 0.5rem;

  img {
    width: 20px;
    height: 20px;
    transform: ${(props) =>
      props.isVisible ? "rotate(270deg)" : "rotate(180deg)"};
    transition: transform 0.3s ease;
  }
`;

const ListItem = styled.li`
  margin-bottom: 3rem;
  list-style: none;
  font-weight: 500;
`;

const NestedList = styled.ol`
  list-style-type: none;
  margin: 10px 0 0 20px;
  padding: 0;
  display: ${(props) => (props.isVisible ? "block" : "none")};

  li {
    margin: 5px 0;
    font-size: 1.5rem;
    line-height: 2rem;

    &:hover {
      background-color: pink;
    }

    &:active {
      background-color: pink;
    }
  }
`;

const ProjectLink = styled.li`
  a {
    font-size: 2.4rem;
    font-weight: bold;
    text-decoration: none;
    outline: none;
    color: black;
  }
`;

const ContainerWithToggle = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]); // 배열로 상태 관리

  const toggleVisibility = (index) => {
    setVisibleIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // 이미 열려 있다면 닫기
          : [...prev, index] // 닫혀 있다면 열기
    );
  };

  const menuItems = [
    {
      title: "Menu Item 1",
      children: ["Submenu 1-1", "Submenu 1-2", "Submenu 1-3"],
    },
    {
      title: "Menu Item 2",
      children: ["Submenu 2-1", "Submenu 2-2", "Submenu 2-3"],
    },
    {
      title: "Menu Item 3",
      children: ["Submenu 3-1", "Submenu 3-2", "Submenu 3-3"],
    },
  ];

  return (
    <Container>
      <h3 className="sr-only">목차</h3>
      <ol>
        {menuItems.map((item, index) => (
          <ListItem key={index}>
            <ToggleWrapper>
              <ToggleButton
                isVisible={visibleIndexes.includes(index)}
                onClick={() => toggleVisibility(index)}
              >
                <img
                  src={ArrowImage}
                  alt={
                    visibleIndexes.includes(index) ? "Close Menu" : "Open Menu"
                  }
                />
              </ToggleButton>
              <a href="#">{item.title}</a>
            </ToggleWrapper>
            <NestedList isVisible={visibleIndexes.includes(index)}>
              {item.children.map((child, idx) => (
                <li key={idx}>{child}</li>
              ))}
            </NestedList>
          </ListItem>
        ))}
        <ProjectLink>
          <a href="#">Level 01: project</a>
        </ProjectLink>
      </ol>
    </Container>
  );
};

export default ContainerWithToggle;
