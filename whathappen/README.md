# 📖 HTML / CSS 기초 학습 어플리케이션 README

<img src="../whathappen/src/assets/top-banner.png">
<br><br>

- GitHub repository : https://github.com/what-happens/Team_project_whathappns-
- 배포 URL : https://whathappen.kr
- Test ID : test25@test.com
- Test PW : test1234!

## 프로젝트 소개

- HTML / CSS 입문 수준의 기초 학습을 할 수 있는 프로젝트 입니다!
- 1 ~ 6 단계의 Stage 에서 이론과 실습을 통해 작은 화면을
  직접 만들어 보며 공부할 수 있습니다!
- 랜덤하게 출제되는 HTML / CSS 의 기초문제들을 퀴즈게임 형태로 직접 풀어보고 틀린문제를 저장하고 북마크 기능을 통해 저장할 수 있습니다
- 틀린문제와 북마크한 문제들을 복습노트에서 확인하고 다시 풀어볼 수 있습니다!

## 💁‍♂️ 프로젝트 팀원

<table>
  <tr>
    <td align="center">
      <img src="../whathappen/src/assets/siwoon.jfif" width="120"><br>
      <a href="https://github.com/siwoon1602">윤시운</a>
    </td>
    <td align="center">
      <img src="../whathappen/src/assets/hwigyoung.png" width="120"><br>
      <a href="https://github.com/LeeHwiGyoung">이휘경</a>
    </td>
    <td align="center">
      <img src="../whathappen/src/assets/yejin.png" width="120"><br>
      <a href="https://github.com/yejin5128">박예진</a>
    </td>
    <td align="center">
      <img src="../whathappen/src/assets/yewon.jfif" width="120"><br>
      <a href="https://github.com/ddhsl">김예원</a>
    </td>
    <td align="center">
      <img src="../whathappen/src/assets/dahyung.jfif" width="120"><br>
      <a href="https://github.com/dahyungryu">유다형</a>
    </td>
  </tr>
</table>

<br>

## 1. 개발 환경

- **Front**
- Frame Work : React
- State Managment : Redux Toolkit, React-Redux, Redux Persist
- Routing: React Router DOM
- Styling: Styled-components, Styled-reset
- ESLint (with Prettier integration) / Prettier (Code Formatter)<br>

  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/HTMLCSS.png?raw=true" width="80">
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/React.png?raw=true" width="80">
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/StyledComponents.png?raw=true" width="80">
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Redux.png?raw=true" width="80">
  <img src="../whathappen/src/assets/eslint.png" width="80">
  <img src="../whathappen/src/assets/prettier.png" width="80">

- Back-end : node.js , Firebase , Swagger , Express , CORS , .ENV , Nodemon , PM2 , Nginx
  <br>
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/NodeJS.png?raw=true" width="80">
  <img src="../whathappen/src/assets/firebase.png" width="80">
  <img src="../whathappen/src/assets/swagger.png" width="80">
  <img src="../whathappen/src/assets/express.png" width="80">
  <img src="../whathappen/src/assets/ENV.png" width="80">
  <img src="../whathappen/src/assets/Nodemon.png" width="80">
  <img src="../whathappen/src/assets/pm2.png" width="80">
  <img src="../whathappen/src/assets/NGINX.png" width="80">
- 버전 관리 : Github<br>
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Github.png?raw=true" width="80">
- 협업 툴 : Jira , Notion , Discord<br>
  <img src="../whathappen/src/assets/Jira.png" width="80">
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Discord.png?raw=true" width="80">
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Notion.png?raw=true" width="80">
- 서비스 배포 환경 : GCP VM<br>
  <img src="../whathappen/src/assets/gcp.png" width="80">
- [Figma](https://www.figma.com/design/H0EHVsa8f529uoYm0Qm1cw/%EC%9D%B4%EA%B2%8C%EB%90%98%EB%84%A4%3F?node-id=3-2&t=0zzJrQMyIiYO3RZV-1)<br>
- [Notion](https://www.notion.so/150d8bd3267a80e29e3df64902fca2bf)
  <br>
- [Jira](https://www.notion.so/150d8bd3267a80e29e3df64902fca2bf)
  <br>

## 2. 채택한 개발 기술

### React, styled-component

- HTML/CSS 학습 애플리케이션은 인터페이스를 재사용 가능하고 유지보수하기 쉽게 설계해야하기 때문에 . React의 컴포넌트 기반 구조는 버튼, 카드 등 UI 요소를 모듈화하여 효율적인 개발이 가능하기 때문입니다.
- styled-component
  - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
  - 클래스 이름 충돌을 방지하고, 코드베이스가 커지더라도 스타일 관리가 용이합니다. 컴포넌트별로 스타일이 분리되어 있어 구조화된 코드를 작성할 수 있기 때문입니다.

### Redux

- Redux를 활용한 이유는 학습 진행 현황, 정답/오답 여부, 등등 회원정보 와 같은 전역 상태를 효율적으로 관리하고, 복잡한 상태를 컴포넌트 간에 쉽게 공유할 수 있기 때문입니다.

### eslint, prettier

- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
- 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.
- 협업 시 매번 컨벤션을 신경 쓸 필요 없이 빠르게 개발하는 데에 목적을 두었습니다.

## 3. 프로젝트 구조

```
├── README.md
├── .eslintrc.json
├── .gitignore
├── .prettierignore.json
├── .prettierrc.json
├── package-lock.json
├── package.json
│
├── public
│    ├── favicon.svg
│    ├── manifest.json
│    ├── robots.txt
│    └── index.html
│
└── src
     ├── App.jsx
     ├── index.jsx
     ├── firebase.config.js
     │
     ├── api
     │    └── mandarinAPI.js
     │
     ├── assets
     │    ├── images
     │    │    ├── logo.png
     │    │    ├── logo_white.png
     │    │    ├── main_banner_vector.png
     │    │    └── loading.gif
     │    └── icons
     │
     ├── components
     │    ├── common
     │    │    ├── Button.jsx
     │    │    ├── Header
     │    │    │    ├── Header.jsx
     │    │    │    ├── AuthHeader.jsx
     │    │    │    └── MobileHeader.jsx
     │    │    ├── Nav
     │    │    │    └── AuthNav.jsx
     │    │    ├── Footer.jsx
     │    │    └── Loading
     │    │         └── InfiniteComponentLoader.js
     │    └── features
     │         └── Bookmark.jsx
     │
     ├── constants
     │    └── stages.js
     │
     ├── data
     │    └── stages
     │         ├── stage0.json
     │         ├── stage1.json
     │         ├── stage2.json
     │         ├── stage3.json
     │         ├── stage4.json
     │         └── stage5.json
     │
     ├── hooks
     │    ├── services
     │    │    ├── useChatService.js
     │    │    └── useFirestore.js
     │    ├── auth
     │    │    ├── useSignup.js
     │    │    └── useLogout.js
     │    └── features
     │         ├── useExercise.js
     │         ├── useFetchQuiz.js
     │         ├── useQuizOptions.js
     │         └── useQuizStep.js
     │
     ├── pages
     │    ├── Home
     │    │    ├── Home.jsx
     │    │    └── components
     │    │         └── Banner.jsx
     │    ├── Quiz
     │    │    ├── Quiz.jsx
     │    │    └── components
     │    │         ├── QuizContent.jsx
     │    │         └── QuizResult.jsx
     │    ├── Exercise
     │    │    ├── Exercise.jsx
     │    │    └── components
     │    │         ├── ExerciseContent.jsx
     │    │         └── ExerciseResult.jsx
     │    ├── Chat
     │    │    ├── Chat.jsx
     │    │    └── components
     │    │         ├── ChatRoom.jsx
     │    │         └── ChatMessage.jsx
     │    └── Auth
     │         ├── Auth.jsx
     │         └── components
     │              ├── Login.jsx
     │              ├── Signup.jsx
     │              └── AuthForm.jsx
     │
     ├── store
     │    ├── index.js
     │    ├── actions
     │    │    ├── authActions.js
     │    │    ├── quizActions.js
     │    │    └── chatActions.js
     │    └── reducers
     │         ├── authReducer.js
     │         ├── quizReducer.js
     │         └── chatReducer.js
     │
     ├── styles
     │    ├── GlobalStyle.js
     │    ├── theme.js
     │    └── MediaQuery.js
     │
     └── utils
          ├── auth.js
          ├── formatting.js
          └── validation.js
```

<br>

## 4. 역할 분담

### 🍊 <a href="https://github.com/what-happens/Team_project_whathappns-/wiki/Siwoon's-Role" target="_blank">윤시운</a>

- **UI/UX**

  - 프로젝트 UI 총 디자인 기획 및 제작
  - Markup / Styleing : 홈 , 로그인, 회원가입 , 회원가입 완료 , 복습노트트 , 404 페이지 , 회원탈퇴
  - 공통 컴포넌트 : Header , Footer , Loading page
  - 페이지 애니메이션 keyframe 적용

- **기능**
  - 로그인 / 로그아웃 기능 , 회원가입 기능 , 복습노트 , 복습노트 북마크 / 마이페이지 화면 랜더링 / 챗봇
  - redux 를 활용한 로그인 상태 관리 ( redux persist )
  - 개발 초기 firebase 로그인 연동 ( 구글 sns 로그인 포함 )
  - Protected route 을 통한 경로 보호 (로그인시 , 비로그인시)
  - <br>


### 👻이휘경

- **프로젝트 초기 셋팅**

  1. ESLint와 Prettier 설정 및 통합

  - 프로젝트의 코드 품질 관리와 스타일 일관성을 위해 EsLInt와 Prettier를 도입했습니다.
  - 주요 규칙 :
    - Prettier: 코드 포맷팅 표준화.
    - ESLint: 문법 검증 및 코드 컨벤션 체크. React에서 보편적으로 사용되는 eslint-config-react/recommended 규칙을 적용했습니다.
  - 저장 시 자동으로 포맷팅되도록 설정했습니다.(VS Code 사용자: .vscode/settings.json 제공)
  - 환경 설정 :
    - Mac과 Windows 간 줄 바꿈 차이를 해결하기 위해 줄 바꿈 방식 및 Git의 line ending 설정을 수정할 수 있도록 설정했습니다.

  2. PropTypes 도입

  - TypeScript를 사용하지 않는 환경에서 props의 명확한 문서화와 런타임 오류 방지를 위해 도입했습니다.
  - 모든 컴포넌트의 props 구조를 명시적으로 정의하여 협업 시 가독성을 높이고 유지보수를 용이하게 하고자 도입했습니다.

  3. 공통 패키지 설치

  - 프로젝트에서 공통적으로 사용되는 패키지를 적용했습니다.
    - styled-component :
    - styled-reset : 스타일의 일관성을 위해 글로벌 스타일에 Reset CSS를 적용
    - redux , reduxjs/toolkit : 전역 상태 관리 및 과도한 prop drilling을 방지하기 위해 도입.
    - react-router-dom : React의 애플리케이션의 라우팅 관리

- **담당 페이지**

  1. 퀴즈 페이지

     - 퀴즈페이지는 여러 스텝으로 구성되어 있으며 퀴즈 페이지에서 스텝에 맞게 다른 컴포넌트를 랜더링합니다.
     - 각 스텝에서 QuizLanding Page(퀴즈 카테고리 및 문제 선택 페이지), Quiz(실제 퀴즈 풀이 페이지), Quiz Result Page(퀴즈 결과 페이지)를 포함합니다. 저는 주로 Quiz 페이지를 담당했습니다.

       1. 퀴즈 페이지

          - Redux 관리: 퀴즈의 스텝, 카테고리, 제한 사항, 사용자 답안 등 공통 상태를 Redux로 관리하여 Props Drilling을 해결하고, 퀴즈 데이터를 효율적으로 처리합니다.
          - useQuizStep 훅: 퀴즈 스텝을 관리하는 로직을 useQuizStep으로 분리하여 중복을 제거하고 재사용성 및 유지보수성을 향상시켰습니다.

       2. 퀴즈 랜딩 페이지

          - 셀렉트 컴포넌트 리팩토링: 퀴즈 랜딩 페이지의 커스텀 셀렉트 컴포넌트가 카테고리와 제한 사항을 동시에 관리하고 있었는데, 이를 재사용 가능하도록 셀렉트 옵션과 상태를 Props로 전달하는 방식으로 리팩토링했습니다.
          - '퀴즈 풀기' 버튼 클릭 시 백엔드 API를 통해 퀴즈 데이터를 가져올 수 있게 했습니다.
          - useFetchQuiz 훅: 퀴즈 랜딩 페이지에서 퀴즈 데이터를 불러오기 위해 useFetchQuiz 훅을 사용하여 백엔드 API에서 퀴즈 데이터를 받아옵니다.
          - 공통으로 사용되는 상태 redux로 분리 : 카테고리와 제한 사항(limit)을 Redux로 관리하도록 리팩토링했습니다.

       3. 퀴즈 풀기 페이지

          - 퀴즈 풀이 페이지의 반응형을 제외한 스타일링 및 마크업을 진행했습니다.
          - 사용자 답안을 선택하고 사용자의 답안을 저장한 뒤, 마지막 문제에서 '제출하기' 버튼을 눌러 정답을 채점하는 기능을 구현했습니다.
          - 프로그래스바로 퀴즈 진행 상황을 시각적으로 표시했습니다.
          - useFetchQuiz 훅: 퀴즈 풀기 페이지에서도 useFetchQuiz 훅을 사용하여 서버와 통신하고, 퀴즈 데이터를 저장하는 기능을 구현했습니다.

       - 퀴즈 종료 시 나가겠냐는 확인 모달을 부모 컴포넌트로 옮겨 재사용 가능하게 리팩토링했습니다.

       4. 퀴즈 결과 페이지

          - 하드코딩된 총 문제 수, 맞힌 문제 수, 틀린 문제 수 등을 동적으로 계산하도록 리팩토링했습니다.

  2. 실습 페이지

     - Redux 관리:실습 페이지에서 공통적으로 사용되는 상태를 Redux로 관리하여 Props Drilling을 해결하고, 실습 데이터를 효율적으로 처리합니다.

     1. 구현 컴포넌트

        1. Exercise 페이지

           - 역할: 실습 페이지 전체의 레이아웃과 흐름을 관리합니다.
           - 구현 사항:
             - URL 파라미터 stage, level을 기반으로 데이터를 가져와 상태로 저장.
             - 에디터와 문제 표시 영역 간의 크기를 조정할 수 있는 드래그바 제공.
             - 제출 버튼 클릭 시, 답안이 유효한지 검증 후 다음 단계로 이동.

        2. Editor 컴포넌트

           - 역할: 코드 디스플레이 영역과 파일 탭을 포함한 섹션을 제공합니다.
           - 구현 사항:
             - FileTab과 CodeDisplay 컴포넌트로 구성.
             - width를 받아 에디터의 너비를 조절.

        3. FileTab 컴포넌트

           - 역할: HTML/CSS 파일 간의 전환 탭을 제공합니다.
           - 구현 사항:
             - Redux 상태 activeTab을 기반으로 활성화된 탭 표시.
             - HTML 또는 CSS 탭 클릭 시, 상태 변경.

        4. CodeDisplay 컴포넌트

           - 역할: 작성 중인 코드 또는 문제와 관련된 코드를 표시합니다.
           - 구현 사항:
             - activeTab을 기반으로 html , css 코드를 랜더링
             - HTML 및 CSS 코드를 미리 보기 용도로 포맷팅하여 출력.
             - 문제의 빈칸을 표시하는 BlankProblem 컴포넌트 렌더링.

        5. DragableBar 컴포넌트

           - 역할: 에디터와 미리보기 영역의 크기를 조정할 수 있도록 드래그바를 제공합니다.
           - 구현 사항:
             - 드래그 이벤트를 처리하여 크기 비율 변경.
             - 부모 컴포넌트로 변경된 비율 전달.

        6. QuestionDisplay 컴포넌트

           - 역할: 문제 또는 정답 화면을 보여줍니다.
           - 구현 사항:
             - "문제 보기"와 "정답 화면 보기" 버튼 제공.
             - 선택된 문제(selectedQid)를 기반으로 문제의 질문 표시.
             - 정답 화면 보기 버튼 클릭시 HTML/CSS 코드로 iframe 콘텐츠 생성.

        7. BlankProblem 컴포넌트

           - 역할: 문제 내 빈칸을 표시하고, 선택 시 사용자 답안을 입력받는 UI를 제공합니다.
           - 구현 사항:
             - 빈칸 클릭 시, 선택된 문제(qid)를 Redux로 설정.
             - 선택된 빈칸에 대해 UserChoices 컴포넌트를 표시.

        8. UserChoices 컴포넌트

           - 역할: 사용자가 선택한 답안을 확인하고 수정할 수 있도록 인터페이스를 제공합니다.
           - 구현 사항:
             - BlankProblem에서 선택된 Qid를 기반으로 BlankProblem 밑에서 랜더링 됩니다.
             - BlankOption 컴포넌트를 이용해 선택 가능한 답안을 제시합니다.
             - BlankOption 에서 선택된 값에 대하여 redux에 상태를 저장합니다.

        9. BlankOption 컴포넌트

           - 역할: 사용자에게 선택지를 제공하여 답안을 선택할 수 있도록 합니다.
           - 구현 사항:
             - 각 선택지를 버튼으로 표시.
             - 버튼 클릭 시, 선택한 값을 부모 컴포넌트로 전달.

     2. 유틸함수 및 hooks

        1. fetchJson 함수:
           - 스테이지와 레벨 , 타입으로 data폴더에 존재하는 JSON 데이터를 가져오는 함수.
        2. ParserFactory 함수:

           - HTML과 CSS 코드 파서를 제공합니다.
           - 질문 데이터를 참조하여 텍스트와 질문-답변 블록을 분리합니다.
           - parseHtml과 parseCss 함수는 코드의 구조를 분석하고 들여쓰기를 적용. (개선 必)
           - 확장성을 고려하여 Factory 패턴을 사용하였습니다.

        3. useExercise 훅:

           - exercise에서 공통으로 사용하는 상태를 Redux로 관리하고 상태를 업데이트할 수 있는 다양한 함수들을 제공합니다.

<br>

### 🍎 박예진

- **담당 페이지**

  - study: 스터디 라우팅 페이지
  - StudyLanding: 스터디 랜딩 페이지
  - StudyStage: 스터디 스테이지 별 레벨 소개 페이지
  - StudyContents: 학습내용 페이지
  - StudyFinish: 학습 완료 페이지

- **담당 페이지 개발 요약**

1. Study

- URL 기반의 라우팅 설계와 React Router의 중첩 라우팅 기능을 활용해 학습 스테이지별 이동 구현.
- 학습 내용을 쉽게 공유하거나 북마크할 수 있게 URL 파라미터를 활용해 라우팅 처리.

2. StudyLanding

- 스터디 랜딩 페이지 스타일링 및 마크업

3. StudyStage

- StudyStage 페이지 스타일링 및 마크업
- 구현 기능

1. React Router의 useParams 활용

- URL 파라미터에서 stage_id를 받아 사용자가 선택한 스테이지 데이터를 동적으로 렌더링.

2. Clear 정보 API 연동

- 서버에서 학습단계 별 완료 여부(clear 상태)를 API 통신으로 받아 학습단계 완료 상태를 표시.

3. 동적 데이터 로딩

- Dynamic Import 기능을 사용하여 스테이지별 JSON 데이터를 프론트엔드 서버에서 동적으로 불러옴.
- 사용자가 특정 스테이지에 진입할 때, 해당 스테이지에 필요한 데이터를 로드하여 메모리 사용을 최적화하고 초기 로딩 시간을 줄임. 데이터 로딩 중 오류가 발생할 경우 예외 처리를 통해 사용자에게 피드백을 제공.

4. StudyContents

- StudyContents 페이지 스타일링 및 마크업
- URL 파라미터에서 stage_id와 levelId를 받아 사용자가 선택한 level 데이터를 동적으로 렌더링.
- Dynamic Import 기능을 사용하여 선택한 레벨의 학습 JSON 데이터를 프론트엔드 서버에서 동적으로 불러옴.
- 조건부 렌더링으로 학습 콘텐츠 구성
  - 학습 콘텐츠의 이미지, 코드, 외부 링크 등 다양한 요소를 조건부로 렌더링.
  - 불필요한 렌더링을 방지하여 성능 최적화.
  - 가독성과 유지보수성을 고려하여 조건부 렌더링을 활용함.

5. StudyFinish

- StudyFinish 페이지 스타일링 및 마크업

6. 담당 페이지 담당 구현

- Styled-Components의 ThemeProvider를 사용해 반응형 UI 구현
- 화면 크기에 따라 동적으로 스타일을 변경, 미디어 쿼리와 글로벌 테마 설정으로 코드의 재사용성을 높이고 스타일 관리 효율성을 개선.

- **UI**
  - 공통 패키지 설치 :
    - lucide-react 라이브러리 사용해 StudyContents 페이지의 햄버거 메뉴 아이콘 변경. 직관적인 UI 요소를 구현.
    - React Swiper: React Swiper로 학습 코스 UI 구현 Swiper를 사용해 사용자가 학습 코스를 직관적으로 탐색 가능.

<br>

### <a href="https://github.com/what-happens/Team_project_whathappns-/wiki/yewon's-Role" target="_blank">🐬김예원</a>

- **UI**

  - 퀴즈 랜딩페이지/ 퀴즈 결과페이지 / 챗봇 마크업 및 스타일링, 퀴즈풀이 페이지 반응형 구현

  **자료**

  - Point1 stage5-6에 대한 css 학습자료 생성 및 json 변환
    <br>

### 🐶유다형

- **UI**
  - 담당 페이지:
    - 마이페이지 - 마크업 및 스타일링
    - 404 페이지 - 마크업 및 스타일링, 게임 구현
    - 메인페이지 - 반응형 스타일링
    - 러닝페이지 - 스타일링
    - 회원가입 완료 페이지 (반응형)
  - 공통 컴포넌트 :
    - MobileHeader 컴포넌트: 화면 너비를 줄였을 때 네비게이션을 햄버거버튼 안으로 숨김
- **기능**
  - 학습데이터 정리
  - 실습데이터 정리
  - 404 페이지:
    - 스페이스바를 누르면 게임을 시작할 수 있습니다.
  - 퀴즈풀기 페이지:
    - API 연동
    - 북마크 버튼 눌렀을 때 북마크 추가 / 삭제
      <br>

## 5. 개발 기간 및 작업 관리 / 브랜치 전략략

### 개발 기간

- 전체 개발 기간 : 2024-11-28 ~ 2024-12-23
- UI 구현 , 데이터 가공공 : 2024-11-28 ~ 2024-12-09
- 기능 구현 : 2024-12-09 ~ 2022-12-18
- QA / 문서 작업 : 2024-12-19 ~ 2024-12-22
- 발표 : 2024-12-23

<br>

### 작업 관리

- Jira를 통해 현재 진행중인 작업을 공유하며 일정관리를 하였습니다.
- 매일 Daily Scrum을 진행하며 작업 순서와 방향성에 대한 고민을 나누고 Notion에 회의록을 작성하였습니다.
- 주 3회 고정 merge , 필요한 경우 추가 merge를 통해 빠른 최신화를 통해 오류를 대처하였습니다.

<br>

### 브랜치 전략

- main, develop, 개인 브랜치로 나누어 개발을 하였습니다.
  - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
  - **develop** 브랜치는 개발 단계에서 master 역할을 하는 브랜치입니다.
  - **개인 branch** 브랜치는 팀원 마다 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

## 6. 페이지별 기능

### [랜딩페이지]

- 서비스 접속 초기화면으로 서비스에 대한 설명이 무한스크롤로 구현 되어있습니다.
  - 로그인이 되어 있지 않은 경우 : Header의 로그인 버튼
  - 로그인이 되어 있는 경우 : Header 의 로그아웃 버튼과 Nav

| 랜딩페이지                                              |
| ------------------------------------------------------- |
| ![landing](../whathappen/src/assets/readme_landing.gif) |

로그인 Header ![landing](../whathappen/src/assets/readme_login_header.jpg)

<br>

### [회원가입]

- 가입하기 버튼을 눌렀을때 유효성 검사 실행
- 이메일 주소의 형식이 유효하지 않는경우 , 이미 가입된 이메일일 경우, 비밀번호가 8자 미만일 경우, 입력창이 비어있는 경우에는 각 입력창 하단에 경고 문구가 나타납니다.
- 유효성 검사를 통과하면 회원가입 완료 페이지로 이동

| 회원가입  
| ---------------------------------------------------------- |
| ![join](../whathappen/src/assets/readme_join_success.gif) |

유효성 검사 ![join](../whathappen/src/assets/readme_join_vaildation.gif)
<br>
<br>

### [로그인]

- 로그인 버튼을 누르면 유효성 검사 실행
- 이메일 주소의 형식이 유효하지 않거나 입력창이 비어있는 경우에는, 각 입력창 하단에 경고 문구가 나타납니다.
- 로그인 버튼 클릭 시 이메일 주소 또는 비밀번호가 일치하지 않을 경우에는 입력창 하단에 경고 문구가 나타나며, 로그인에 성공하면 랜딩페이지로 이동합니다.

| 로그인                                                      |
| ----------------------------------------------------------- |
| ![login](../whathappen/src/assets/readme_login_success.gif) |

유효성 검사 ![login](../whathappen/src/assets/readme_login_validation.gif)
<br>

### [마이페이지]

- 기초학습을 몇 스테이지 까지 진행했는지, 퀴즈풀이를 몇 회 진행했는지, 저장된 퀴즈가 몇 문제인지 확인이 가능합니다.
- 학습 스탬프, 학습 진척도 프로그래스바로 실습 얼마나 진행했는지 확인이 가능합니다.

| 마이페이지                                            |
| ----------------------------------------------------- |
| ![mypage](../whathappen/src/assets/readme_mypage.gif) |

<br>

### [복습노트]

- 복습노트에 저장된 퀴즈가 없을 때는 퀴즈 풀러가기 버튼으로 퀴즈를 풀러 갈 수 있습니다.
- "틀린 문제" 탭을 선택했을 때 좌측에는 틀린문제 번호가, 우측에는 틀렸던 문제를 다시 풀어보는 공간이 생깁니다.
- 틀린 문제를 다시 풀고 제출 버튼을 눌렀을 때 문제를 복습노트에서 삭제 여부를 묻는 모달이 나타납니다.
- "북마크" 탭을 선택했을 때 좌측에는 북마크 된 문제의 번호가, 우측에는 북마크 된 문제를 다시 풀어보는 공간이 생깁니다.
- "북마크" 버튼을 클릭했을때 북마크 추가 , 삭제 기능 사용가능

| 복습노트
| ----------------------------------------------------------- |
| ![review](../whathappen/src/assets/readme_review_delete.gif) |

북마크 추가 삭제 ![review](../whathappen/src/assets/readme_review_bookmark.gif)
문제가 존재하지 않을 시 ![review](../whathappen/src/assets/readme_review_noex.gif)

<br>

### [퀴즈페이지]

- HTML, CSS 중에서 퀴즈 종류를 고를 수 있습니다.
- 5문제, 10문제, 15문제, 20문제 등 퀴즈의 수를 원하는 대로 설정할 수 있습니다. 퀴즈 풀기 버튼을 누르면 퀴즈가 시작됩니다.
- 뒤로가기 버튼을 누르면 이전 페이지로 돌아갑니다.

| 퀴즈 랜딩페이지                                       |
| ----------------------------------------------------- |
| ![quizpage](../whathappen/src/assets/readme_quiz.gif) |

### [퀴즈풀이]

- 퀴즈페이지에서 퀴즈 풀기 버튼을 누르면 나오는
- 퀴즈가 시작되면 답을 선택하고 다음이나 이전 문제로 넘어갈 수 있습니다.
- 문제를 다 풀면 퀴즈 결과 페이지로 이동됩니다.

| 퀴즈 게임페이지                                              |
| ------------------------------------------------------------ |
| ![quizgame](../whathappen/src/assets/readme_quiz_gamego.gif) |

<br>

### [퀴즈결과]

- 퀴즈를 다 풀면 이 페이지로 넘어옵니다. 전체 문제 중에서 몇 문제를 맞혔는지, 몇 문제 틀렸는지를 보여줍니다.
- 복습 노트 저장 버튼을 누르면 틀린 문제와 북마크된 문제를 모두 복습노트에 저장되었다는 모달이 뜹니다.
- 처음으로 버튼을 누르면 퀴즈페이지로 돌아갑니다.

| 퀴즈결과창  
| -------------------------------------------------------------- |
| ![quizresult](../whathappen/src/assets/readme_quiz_result.gif) |

<br>

### [학습스테이지]

- stage 버튼을 누르면 각각의 스테이지로 넘어가게 됩니다.
- 각 스테이지를 완료하면 마이페이지에 학습 스탬프가 찍히게 됩니다.

| 학습스테이지                                 |
| -------------------------------------------- |
| ![study](../whathappen/src/assets/homer.jpg) |

<br>

### [러닝코스]

- 학습스테이지 페이지에서 각 스테이지를 누르면 나오는 화면입니다. 스테이지 안의 레벨을 확인할 수 있습니다.
- 스크롤 / 버튼으로 레벨을 확인할 수 있습니다.

| 러닝코스페이지                                     |
| -------------------------------------------------- |
| ![learncourse](../whathappen/src/assets/homer.jpg) |

<br>

### [학습페이지]

- 실습에 들어가기 전 학습을 하는 페이지입니다.
- 좌측 메뉴에서 각 레벨의 목록을 확인할 수 있습니다. 목록에서

| 학습페이지                                       |
| ------------------------------------------------ |
| ![learnpage](../whathappen/src/assets/homer.jpg) |

<br>

### [실습페이지]

- stage별 level에 맞는 문제를 실습할 수 있는 페이지입니다.
- 에디터 상단에서 HTML과 CSS를 선택하여 실습에 필요한 코드를 볼 수 있습니다.
- 빈칸을 클릭하면 우측에 해당 빈칸의 문제 설명이 나타납니다.
- 빈칸을 클릭하면 하단에 선택할 수 있는 답안이 표시됩니다.
- 답안을 클릭하면 사용자의 답안이 저장되며, 제출하기 버튼을 눌러 채점할 수 있습니다.
- 우측의 정답 화면 보기 버튼을 클릭하면 해당 문제에서 사용된 코드로 랜더링 된 화면을 볼 수 있습니다.

| 실습페이지                                      |
| ----------------------------------------------- |
| ![exercise](../whathappen/src/assets/homer.jpg) |

<br>

### [학습완료페이지]

- 학습이 완료되면 표시되는 페이지입니다.
- 메인페이지로 이동 버튼을 누르면 랜딩페이지로 이동됩니다.

| 학습완료페이지  
| ---------------------------------------------------------------- |
| ![studyfinish](../whathappen/src/assets/readme_study_finish.gif) |

<br>

### [mr.potato]

- ALAN AI를 탑재한 챗봇에게게 질문이 가능합니다.
- 사용자가 질문하면 기초 학습하는 유저임을 인식하고 , 출처를 제외한 정보를 회신합니다.

| ON / OFF                                                     | 실시간 채팅 기능                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------- |
| ![mr.potato](../whathappen/src/assets/readme_chat_onoff.gif) | ![mr.potato](../whathappen/src/assets/readme_chat_answer.gif) |

<br>

### [404에러페이지]

- 404 에러일 때 나타나는 페이지입니다.
- 스페이스 바를 누르면 게임을 시작할 수 있습니다.
- 메인페이지로 이동 버튼을 누르면 랜딩페이지로 이동됩니다.

| 에러페이지                                      |
| ----------------------------------------------- |
| ![404](../whathappen/src/assets/readme_404.gif) |

<br>

## 7. 트러블 슈팅

- <a href="https://github.com/what-happens/Team_project_whathappns-/wiki/Siwoon's-Trouble-shooting" target="_blank">윤시운</a>
- <a href="https://github.com/what-happens/Team_project_whathappns-/wiki/hwigyoung's-Trouble-shooting" target="_blank">이휘경</a>
- <a href="https://github.com/what-happens/Team_project_whathappns-/wiki/Siwoon's-Trouble-shooting" target="_blank">박예진</a>
- <a href="https://github.com/what-happens/Team_project_whathappns-/wiki/yewon's-Trouble-shooting" target="_blank">김예원</a>
- <a href="https://github.com/what-happens/Team_project_whathappns-/wiki/Siwoon's-Trouble-shooting" target="_blank">유다형</a>

<br>

## 8. 개선 목표

- API 통신이나 Validation 같은 기능들은 hook으로 만들어 사용 할 수 있게끔 개선 필요
- 웹 접근성을 고려하여 TAB 탐색을 통해 모든 서비스를 이용 할 수 있게끔 개선 필요
- 아이디 / 비밀번호 찾기 , 개인정보 보호 동의 등 회원관련 서비스 추가 및 개선 필요
- 다양한 에러 코드에 대한 에러 핸들링 개선
- 그 외 복잡한 코드구조 , 리팩토링

<br>

## 9. 프로젝트 후기

### 🍊 윤시운

**1. 프로젝트 완성도 자체 평가 점수 :**
👌75점<br>
**2. 개인 또는 우리 팀이 잘한 부분과 아쉬운 점:**

- 팀원 간에 의견을 주고받는 과정에서 서로를 존중하는 태도가 돋보였으며, 더 나은 환경을 만들기 위한 건설적인 대립은 있었지만, 그 외의 불화는 전혀 없었습니다.

- 각자의 역할이 분명했지만, 기술적으로 미숙하거나 모르는 점, 그리고 함께 논의가 필요한 부분은 적극적으로 내용을 공유하고 피드백을 주고받았습니다. 이를 통해 작업자가 다른 작업을 기다리는 일이 없도록 효율적으로 협업할 수 있었습니다.

- Jira를 활용해 일정 관리를 시도했으나, 사용법에 미숙한 점과 누락된 항목들이 많아 선 작업 후 기록하는 경우가 종종 있었습니다. 이로 인해 일정 관리가 정확하지 못했던 점이 아쉬웠습니다.

- 작업의 중요도를 명확히 분류하지 못했던 점도 개선이 필요합니다. 학습 애플리케이션 특성상 학습 데이터를 수집하고 가공하는 데 많은 시간을 할애하다 보니, 일부 디테일한 기능과 UI 개선에 충분히 신경 쓰지 못한 점이 아쉬움으로 남습니다.<br>

**3. 프로젝트 결과물의 추후 개선점이나 보완할 점 :**

- API 통신과 Validation 같은 기능을 Hook으로 분리하지 못한 점이 각 컴포넌트의 가독성과 구조를 복잡하게 만들었습니다. 이러한 부분은 리팩토링을 통해 개선이 필요해 보입니다.

- UI 디자인에서는 전체적으로 크기가 과도하게 큰 느낌이 있습니다. 처음 UI 디자인을 시도하다 보니 크기에 대한 감각이 부족했던 것으로 보이며, 전반적인 수정이 필요할 것으로 판단됩니다.

- UX 에도 충분히 신경 쓰지 못했습니다. 예를 들어, 개인정보 활용 동의 절차, 아이디/비밀번호 찾기, 토큰 만료 시 자동 로그아웃 등 사용자 편의를 고려한 기능이 부족했습니다. 이 부분은 추가적으로 개선해야 할 사항입니다.

- Redux를 활용하여 상태나 데이터 들을 전역에서 관리하는 방향으로 코드를 수정해야하 할 것 같습니다.

- 코드가 기능 구현에만 치중된 느낌이 강합니다. 재사용성과 웹 접근성을 더욱 고려해 코드를 작성해야 하며, 이를 통해 유지보수성과 확장성을 높이는 방향으로 개선해야 합니다.<br>

**4. 프로젝트를 수행하면서 느낀 점이나 경험한 성과**

- React와 Redux를 사용해 처음으로 상태 관리를 깊이 있게 다뤄보며, 대규모 프로젝트에서 전역 상태의 중요성을 체감했습니다. 특히, styled-components를 활용하여 props 기반으로 스타일을 동적으로 적용하는 방법이 매우 유용했습니다.

- Firebase를 사용한 인증 기능, Redux를 통한 로그인 상태 관리, 그리고 GCP VM을 활용한 배포 경험은 백엔드 및 클라우드 환경에 대한 이해에 도움이 되었습니다

- 문제 해결 과정에서 예상치 못한 버그와 디자인 변경 요청 등을 해결하면서 개발자로서의 문제 해결 능력이 한층 성장했습니다.
  특히 랜덤 퀴즈 출제 로직과 북마크/틀린 문제 복습 기능 구현은 복잡했지만, 성공적으로 마무리할 수 있어 뿌듯했습니다.

<br>

### 👻 이휘경

이번 프로젝트에서 프론트엔드 개발자로서 실습 페이지와 퀴즈 풀이 페이지를 구현했으며, 백엔드 서버 개발도 하게 되었습니다.

프로젝트 초기 단계에서는 기능 구현의 신속한 검증을 위해 useState Hook을 활용했으나, 애플리케이션의 복잡도가 증가하면서 props drilling 이슈가 발생했습니다. 특히 QuizPage > Quiz > QuizCard 컴포넌트 구조에서 quizStep 상태 관리를 위해 이벤트 핸들러를 계층적으로 전달하는 과정에서 코드 중복이 심화되었습니다. 이러한 문제를 해결하기 위해 Redux를 도입하여 전역 상태 관리를 구현했고, 이 과정에서 Redux의 실질적인 필요성과 장점을 체감할 수 있었습니다.

컴포넌트의 재사용성 향상을 위한 이론적 이해는 있었으나, 실제 구현 경험이 부족했습니다. 이번 프로젝트를 통해 비즈니스 로직을 Custom Hook으로 분리하고, 상태 관리를 상위 컴포넌트나 전역 상태 관리 라이브러리로 위임함으로써 하위 컴포넌트가 UI 렌더링에 집중할 수 있도록 구조화하는 방법을 습득했습니다. 이를 통해 재사용성과 유지보수성이 높은 컴포넌트 설계 역량을 키울 수 있었습니다.

백엔드 개발 참여는 또 다른 학습 기회가 되었습니다. CORS(Cross-Origin Resource Sharing) 이슈 해결 과정에서 서버 측의 origin 설정과 허용 헤더 구성의 중요성을 인식했으며, 프론트엔드에서의 헤더 처리 시 고려해야 할 보안 요소들을 파악할 수 있었습니다.

풀스택 개발 경험을 통해 클라이언트-서버 간 데이터 흐름을 포괄적으로 이해할 수 있었습니다. 특히 프론트엔드와 백엔드 협업 시 API 스펙, 엔드포인트 설계, 요청/응답 구조를 사전에 명확히 정의하는 것이 병렬적 개발 프로세스의 효율성 향상에 핵심임을 체득했습니다.

이번 프로젝트는 기술적 역량과 협업 능력을 동시에 성장시킬 수 있었던 소중한 경험이었습니다. 프론트엔드 개발자로서 아키텍처 설계와 상태 관리에 대한 실전적 이해를 넓혔고, 백엔드 개발 경험을 통해 서버 개발자와의 원활한 협업을 위한 역량을 강화할 수 있었습니다. 앞으로도 이러한 경험을 토대로, 재사용성이 높은 컴포넌트 설계와 전체적인 애플리케이션의 아키텍처를 고려한 견고한 코드를 작성하도록 하겠습니다.

<br>

### 😎 박예진

1. 개인 또는 우리팀이 잘한 부분과 아쉬운 점
2. 프로젝트 결과물의 추후 개선점이나 보완할 점 등 내용 정리
3. 프로젝트를 수행하면서 느낀점이나 경험한 성과

<br>

### 🐬 김예원

학습 자료를 목업 데이터가 아닌 실제 문제로 준비하고 정제하는 과정에서 학습자 입장에서의 콘텐츠 기획의 중요성을 다시금 느낄 수 있었습니다. 이는 현실적이고 유용한 콘텐츠를 제공할 수 있어 프로젝트의 완성도를 높이는 데 큰 기여를 했다고 생각합니다.
하지만 자료 준비에 많은 시간을 투자하여, 개인적으로 기능 구현에 충분히 참여하지 못한 점은 아쉬움으로 남습니다. 콘텐츠 기획에 치중하다 보니 코드 구현 경험을 쌓을 기회가 적었다는 점이 앞으로 보완해야 할 부분입니다.

또한 결과물 측면에서는, 추후 사용자 친화성을 강화하고 코드 구조를 간결하게 리팩토링할 필요가 있다고 느꼈습니다. 스테이지 기능을 더욱 풍부하게 개선하여 학습자들이 더 흥미를 느끼도록 만들어도 좋을 것 같습니다.

무엇보다도 이번 프로젝트를 통해 팀워크의 중요성을 실감했습니다. 각자 모르는 부분은 화면 공유로 협력하며 함께 문제를 해결했고, 서로의 열정을 나누며 프로젝트를 진행할 수 있었습니다. 이런 과정을 통해 협업의 효율성을 배웠고, 다양한 디바이스에서 테스트하며, UI 설계의 디테일에 집중하는 법도 익힐 수 있었습니다.

이번 경험은 단순히 결과물로 끝나는 것이 아니라, 향후 성장의 기반이 될 소중한 배움과 동기를 안겨주었습니다. 앞으로는 기능 구현에서도 적극적으로 기여하며 기술적 성장과 팀워크를 동시에 발전시켜 나가고 싶습니다.

<br>

### 🐶 유다형

이번이 처음 경험해보는 협업 프로젝트였고 혼자서만 하던 개발을 여러 사람과 함께 작업한다는 것이 익숙하지 않아 작업 진행 상황이나 일정 관리를 하는데 미숙한 점이 있었습니다. 하지만 팀원들과의 소통이 매우 원활했고, 서로를 배려하며 즐겁고 편안한 분위기에서 작업할 수 있었습니다. 3주 간의 길지도 짧지도 않은 기간 동안 완성도 높은 결과물을 만들어낼 수 있었던 것은 서로를 믿고 의지할 수 있는 좋은 팀원들을 만났기에 가능했던 것 같습니다.

React를 배운 지 얼마 되지 않은 시점에서 프로젝트에 참여하다 보니 기술적인 부분에서 공부가 많이 부족했고, 특히 styled-components를 활용한 컴포넌트 스타일링 부분에서 어려움을 겪었습니다. 이를 통해 아직 실력이 많이 부족하다는 것을 느꼈지만, 팀 프로젝트였기에 서로의 부족한 점을 채워주고 모르는 부분들을 함께 해결해나가면서 개발 속도를 높일 수 있었습니다. 이 과정에서 그동안 배웠던 React, JavaScript, CSS 등의 기술들에 대한 실전 경험을 쌓을 수 있었고, 특히 404 페이지의 미니게임 구현을 통해 웹 개발에 대한 이해도를 한층 더 높일 수 있었습니다.

이번 프로젝트를 통해 기술적인 성장뿐만 아니라 팀 협업의 중요성과 의사소통 능력의 가치를 깊이 깨달을 수 있었던 값진 경험이었습니다.
