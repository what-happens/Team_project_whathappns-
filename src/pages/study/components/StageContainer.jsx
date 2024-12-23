import React from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import theme from "../theme";
import media from "../media";
import stages from "../../../data/stages.json";
import { Link } from "react-router-dom";

const StageContainer = () => {
  return (
    <ThemeProvider theme={{ ...theme, ...media }}>
      <MenuContainer>
        <MenuList>
          {stages.map((stage) => {
            const imageUrl = require(`../../../assets/${stage.img}`);
            return (
              <MenuItem key={stage.stage_id}>
                <MenuLink to={`/study/${stage.stage_id}`} className="mr-2">
                  <MenuImage src={imageUrl} alt={stage.stage_name} />
                  <MenuTitle>{stage.stage_name}</MenuTitle>
                </MenuLink>
              </MenuItem>
            );
          })}
        </MenuList>
      </MenuContainer>
    </ThemeProvider>
  );
};

export default StageContainer;

// Styled Components with Responsive Design
const MenuContainer = styled.div`
  ${({ theme }) => theme.laptop`
    width: 60rem;
  `};
  ${({ theme }) => theme.tablet`
    width: 50rem;
  `};
  ${({ theme }) => theme.mobile2`
    width: 40rem;
  `};
  ${({ theme }) => theme.mobile`
    width: 30rem;
  `};
  width: 80rem;
  margin-right: 1rem;
  padding: 0rem;
`;

const MenuList = styled.ol`
  ${({ theme }) => theme.laptop`
    gap: 4rem;
  `};
  ${({ theme }) => theme.tablet`
    gap: 3rem;
  `};
  ${({ theme }) => theme.mobile`
    gap: 3rem;
  `};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 7rem;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const jello = keyframes`
    0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`;
const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
`;

const MenuLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

const MenuImage = styled.img`
  ${({ theme }) => theme.laptop`
    width: 13rem;
  `};
  ${({ theme }) => theme.tablet`
    width: 10rem;
  `};
  ${({ theme }) => theme.mobile`
    width: 7rem;
  `};
  width: 15rem;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 1rem;
  &:hover {
    animation: ${jello} 1.1s both;
  }
`;

const MenuTitle = styled.span`
  ${({ theme }) => theme.tablet`
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  `};
  ${({ theme }) => theme.mobile`
    font-size: ${({ theme }) => theme.fontSizes.base};
  `};
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  text-shadow: #b3b3b3 0px 0 10px;
`;
