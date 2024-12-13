import React, { useState } from "react";
import styled from "styled-components";

const levelData = [
  {
    id: 1,
    title: "Level 01",
    subtitles: [
      {
        id: 1,
        title: "HTML/CSS 기초",
        content: "시맨틱 태그와 레이아웃 기본기 다지기",
      },
      {
        id: 2,
        title: "반응형 웹 디자인",
        content: "미디어 쿼리와 플렉스박스로 반응형 레이아웃 구현",
      },
      {
        id: 3,
        title: "JavaScript 기초",
        content: "DOM 조작과 이벤트 핸들링 학습",
      },
    ],
  },
  {
    id: 2,
    title: "Level 02",
    subtitles: [
      {
        id: 1,
        title: "React 기초",
        content: "컴포넌트와 상태 관리 기본 개념 이해",
      },
      {
        id: 2,
        title: "styled-components",
        content: "CSS-in-JS 스타일링 기법 학습",
      },
    ],
  },
  {
    id: 3,
    title: "Level 03",
    subtitles: [
      {
        id: 1,
        title: "상태 관리",
        content: "Redux 또는 Context API를 이용한 상태 관리",
      },
      {
        id: 2,
        title: "라우팅",
        content: "React Router를 이용한 페이지 네비게이션",
      },
    ],
  },
  {
    id: 4,
    title: "Level 04",
    subtitles: [
      {
        id: 1,
        title: "API 통신",
        content: "Axios로 백엔드와 데이터 통신",
      },
      {
        id: 2,
        title: "비동기 처리",
        content: "Promise와 async/await 심화 학습",
      },
    ],
  },
  {
    id: 5,
    title: "Level 05",
    subtitles: [
      {
        id: 1,
        title: "성능 최적화",
        content: "React.memo, useMemo, useCallback 활용",
      },
      {
        id: 2,
        title: "테스트",
        content: "Jest와 React Testing Library로 컴포넌트 테스트",
      },
    ],
  },
  {
    id: 6,
    title: "Level 06",
    subtitles: [
      {
        id: 1,
        title: "서버사이드 렌더링",
        content: "Next.js를 이용한 SSR 구현",
      },
      {
        id: 2,
        title: "배포",
        content: "Vercel, Netlify 등을 통한 웹사이트 배포",
      },
    ],
  },
];

const NavigationWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const MenuNavigation = styled.nav`
  width: 25%;
  padding: 16px;
  background-color: #f3f4f6;
  overflow-y: auto;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  cursor: pointer;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) =>
    props.isSelected ? "#3b82f6" : "transparent"};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#3b82f6" : "#e5e7eb")};
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: ${(props) => (props.isOpen ? "white" : "inherit")};
`;

const SubtitleList = styled.ul`
  list-style: none;
  padding-left: 20px;
  margin-top: 10px;
`;

const SubtitleItem = styled.li`
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  margin-bottom: 4px;

  background-color: ${(props) =>
    props.isSelected ? "#60a5fa" : "transparent"};
  color: ${(props) => (props.isSelected ? "white" : "inherit")};

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#60a5fa" : "#e5e7eb")};
  }
`;

const ContentArea = styled.div`
  width: 75%;
  padding: 16px;
  background-color: white;
  overflow-y: auto;
`;

const ContentBox = styled.div`
  background-color: #f9fafb;
  padding: 24px;
  border-radius: 12px;
`;

const ContentTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #1f2937;
`;

const ContentDescription = styled.p`
  color: #4b5563;
`;

// 새로운 스타일드 컴포넌트 추가
// const NavigationButtons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 20px;
// `;

// const NavigationButton = styled.button`
//   background-color: #3b82f6;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 8px;
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   opacity: ${(props) => (props.disabled ? 0.5 : 1)};
// `;

// 컴포넌트 구현
const TestNav = () => {
  const [openLevels, setOpenLevels] = useState({});
  const [selectedSubtitle, setSelectedSubtitle] = useState(
    levelData[0].subtitles[0]
  );

  const toggleLevel = (levelId) => {
    setOpenLevels((prev) => ({
      ...prev,
      [levelId]: !prev[levelId],
    }));
  };

  const handleSubtitleClick = (subtitle) => {
    setSelectedSubtitle(subtitle);
  };

  return (
    <NavigationWrapper>
      <MenuNavigation>
        <MenuList>
          {levelData.map((level) => (
            <React.Fragment key={level.id}>
              <MenuItem isSelected={selectedSubtitle.levelId === level.id}>
                <div onClick={() => toggleLevel(level.id)} style={{ flex: 1 }}>
                  {level.title}
                </div>
                <ToggleButton
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLevel(level.id);
                  }}
                  isOpen={openLevels[level.id]}
                >
                  {openLevels[level.id] ? "▼" : "▶"}
                </ToggleButton>
              </MenuItem>
              {openLevels[level.id] && (
                <SubtitleList>
                  {level.subtitles.map((subtitle) => (
                    <SubtitleItem
                      key={subtitle.id}
                      isSelected={selectedSubtitle.id === subtitle.id}
                      onClick={() =>
                        handleSubtitleClick({ ...subtitle, levelId: level.id })
                      }
                    >
                      {subtitle.title}
                    </SubtitleItem>
                  ))}
                </SubtitleList>
              )}
            </React.Fragment>
          ))}
        </MenuList>
      </MenuNavigation>

      <ContentArea>
        <ContentBox>
          <ContentTitle>{selectedSubtitle.title}</ContentTitle>
          <ContentDescription>{selectedSubtitle.content}</ContentDescription>
        </ContentBox>
      </ContentArea>
    </NavigationWrapper>
  );
};

export default TestNav;
