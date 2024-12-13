import React, { useState } from "react";
import styled from "styled-components";

const levelData = [
  {
    id: 1,
    title: "Title 01",
    subtitles: [
      {
        id: 11,
        title: "HTML/CSS 기초",
        content: "시맨틱 태그와 레이아웃 기본기 다지기",
      },
      {
        id: 12,
        title: "반응형 웹 디자인",
        content: "미디어 쿼리와 플렉스박스로 반응형 레이아웃 구현",
      },
      {
        id: 13,
        title: "JavaScript 기초",
        content: "DOM 조작과 이벤트 핸들링 학습",
      },
    ],
  },
  {
    id: 2,
    title: "Title 02",
    subtitles: [
      {
        id: 21,
        title: "React 기초",
        content: "컴포넌트와 상태 관리 기본 개념 이해",
      },
      {
        id: 22,
        title: "styled-components",
        content: "CSS-in-JS 스타일링 기법 학습",
      },
    ],
  },
  {
    id: 3,
    title: "Title 03",
    subtitles: [
      {
        id: 31,
        title: "상태 관리",
        content: "Redux 또는 Context API를 이용한 상태 관리",
      },
      {
        id: 32,
        title: "라우팅",
        content: "React Router를 이용한 페이지 네비게이션",
      },
    ],
  },
  {
    id: 4,
    title: "Title 04",
    subtitles: [
      {
        id: 41,
        title: "API 통신",
        content: "Axios로 백엔드와 데이터 통신",
      },
      {
        id: 42,
        title: "비동기 처리",
        content: "Promise와 async/await 심화 학습",
      },
    ],
  },
  {
    id: 5,
    title: "Title 05",
    subtitles: [
      {
        id: 51,
        title: "성능 최적화",
        content: "React.memo, useMemo, useCallback 활용",
      },
      {
        id: 52,
        title: "테스트",
        content: "Jest와 React Testing Library로 컴포넌트 테스트",
      },
    ],
  },
  {
    id: 6,
    title: "Title 06",
    subtitles: [
      {
        id: 61,
        title: "서버사이드 렌더링",
        content: "Next.js를 이용한 SSR 구현",
      },
      {
        id: 62,
        title: "배포",
        content: "Vercel, Netlify 등을 통한 웹사이트 배포",
      },
    ],
  },
];

// Styled Components
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const MenuNav = styled.nav`
  width: 25%;
  padding: 16px;
  background-color: #f3f4f6;
  overflow-y: auto;
`;

const MenuList = styled.ol`
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
    props.$isSelected ? "#3b82f6" : "transparent"};
  color: ${(props) => (props.$isSelected ? "white" : "black")};

  &:hover {
    background-color: ${(props) => (props.$isSelected ? "#3b82f6" : "#e5e7eb")};
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: ${(props) => (props.$isOpen ? "white" : "inherit")};
`;

const SubtList = styled.ol`
  list-style: none;
  padding-left: 20px;
  margin-top: 10px;
`;

const SubItem = styled.li`
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  margin-bottom: 4px;

  background-color: ${(props) =>
    props.$isSelected ? "#60a5fa" : "transparent"};
  color: ${(props) => (props.$isSelected ? "white" : "inherit")};

  &:hover {
    background-color: ${(props) => (props.$isSelected ? "#60a5fa" : "#e5e7eb")};
  }
`;

const Contents = styled.div`
  width: 75%;
  padding: 16px;
  background-color: white;
  overflow-y: auto;
`;

const ContentItem = styled.div`
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

const TestNav = () => {
  const [selectedLevel, setSelectedLevel] = useState(levelData[0]);
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

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    // 레벨 변경 시 첫 번째 서브타이틀 자동 선택
    setSelectedSubtitle(level.subtitles[0]);
  };

  const handleSubtitleClick = (subtitle) => {
    setSelectedSubtitle(subtitle);
  };

  return (
    <Container>
      <MenuNav>
        <MenuList>
          {levelData.map((level) => (
            <React.Fragment key={level.id}>
              <MenuItem
                $isSelected={selectedLevel.id === level.id}
                onClick={() => handleLevelClick(level)}
              >
                {level.title}
                <ToggleButton
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLevel(level.id);
                  }}
                  $isOpen={openLevels[level.id]}
                >
                  {openLevels[level.id] ? "▼" : "▶"}
                </ToggleButton>
              </MenuItem>
              {openLevels[level.id] && (
                <SubtList>
                  {level.subtitles.map((subtitle) => (
                    <SubItem
                      key={subtitle.id}
                      $isSelected={
                        selectedSubtitle.id === subtitle.id &&
                        selectedLevel.id === level.id
                      }
                      onClick={() => handleSubtitleClick(subtitle)}
                    >
                      {subtitle.title}
                    </SubItem>
                  ))}
                </SubtList>
              )}
            </React.Fragment>
          ))}
        </MenuList>
      </MenuNav>

      <Contents>
        <ContentItem>
          <ContentTitle>{selectedSubtitle.title}</ContentTitle>
          <ContentDescription>{selectedSubtitle.content}</ContentDescription>
        </ContentItem>
        <ContentItem>
          <ContentDescription>{selectedSubtitle.content}</ContentDescription>
        </ContentItem>
      </Contents>
    </Container>
  );
};

export default TestNav;
