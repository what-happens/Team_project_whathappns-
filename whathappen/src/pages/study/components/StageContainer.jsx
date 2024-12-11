import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import media from "../media";

import IconStage1 from "../../../assets/icon_stage1.png";
import IconStage2 from "../../../assets/icon_stage2.png";
import IconStage3 from "../../../assets/icon_stage3.png";
import IconStage4 from "../../../assets/icon_stage4.png";
import IconStage5 from "../../../assets/icon_stage5.png";
import IconStage6 from "../../../assets/icon_stage6.png";
import IconStage7 from "../../../assets/icon_stage7.png";

// JSON 데이터
const menuData = [
  {
    id: 1,
    title: "Stage 01",
    image: IconStage1,
  },
  {
    id: 2,
    title: "Stage 02",
    image: IconStage2,
  },
  {
    id: 3,
    title: "Stage 03",
    image: IconStage3,
  },
  {
    id: 4,
    title: "Stage 04",
    image: IconStage4,
  },
  {
    id: 5,
    title: "Stage 05",
    image: IconStage5,
  },
  {
    id: 6,
    title: "Stage 06",
    image: IconStage6,
  },
  {
    id: 7,
    title: "Stage 07",
    image: IconStage7,
  },
];

// Styled Components with Responsive Design
const MenuContainer = styled.div`
  ${({ theme }) => theme.laptop`
    width: 60rem;
  `};
  ${({ theme }) => theme.tablet`
    width: 40rem;
  `};
  ${({ theme }) => theme.mobile`
    width: 30rem;
  `};
  width: 80rem;
  margin: 0;
  padding: 0;
`;

const MenuList = styled.ul`
  // 세로 두줄 구현
  /* ${({ theme }) => theme.mobile`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  `}; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const MenuLink = styled.a`
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
  margin-bottom: 10px;
`;

const MenuTitle = styled.p`
  ${({ theme }) => theme.tablet`
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  `};
  ${({ theme }) => theme.mobile`
    font-size: ${({ theme }) => theme.fontSizes.base};
  `};
  display: block;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const StageContainer = () => {
  return (
    <ThemeProvider theme={{ ...theme, ...media }}>
      <MenuContainer>
        <MenuList>
          {menuData.map((menu) => (
            <MenuItem key={menu.id}>
              <MenuLink href="#">
                <MenuImage src={menu.image} alt={menu.title} />
                <MenuTitle>{menu.title}</MenuTitle>
              </MenuLink>
            </MenuItem>
          ))}
        </MenuList>
      </MenuContainer>
    </ThemeProvider>
  );
};

export default StageContainer;
