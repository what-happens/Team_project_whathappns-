# 📖 HTML / CSS 기초 학습 어플리케이션 README

<img src="../whathappen/src/assets/top-banner.png">
<br><br>

- GitHub repository : https://github.com/what-happens/Team_project_whathappns-
- 배포 URL : https://whathappen.kr
- Test ID : test25@test.com
- Test PW : test1234!

## 프로젝트 소개

- HTML / CSS 입문 수준의 기초 학습을 할 수 있는 프로젝트 입니다!
- 1 ~ 6 단계의 State 에서 이론과 실습을 통해 작은 화면을
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

- Front : HTML, React, styled-components, Redux<br>
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/HTMLCSS.png?raw=true" width="80">
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/React.png?raw=true" width="80">
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/StyledComponents.png?raw=true" width="80">
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Redux.png?raw=true" width="80">
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

## 2. 채택한 개발 기술과 브랜치 전략

### React, styled-component

- React
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

### 브랜치 전략

- main, develop, 개인 브랜치로 나누어 개발을 하였습니다.
  - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
  - **develop** 브랜치는 개발 단계에서 master 역할을 하는 브랜치입니다.
  - **개인 branch** 브랜치는 팀원 마다 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

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

### 🍊윤시운

- **UI**

  - markup / styling : 홈 , 로그인 , 회원가입 , 회원가입 완료 , 복습노트 , 404 페이지
  - 공통 컴포넌트 : Header , Footer , Loading page
  - 전 page UI 총 디자인 기획 및 제작
  - 애니메이션 keyframe 적용 ( quiz landing , quiz result , loading , mypage , study landing 등 )

- **기능**
  - 로그인 / 로그아웃 기능 (유효성 검사,api) , 회원가입 기능 (유효성 검사,api) , 복습노트 ( 문제리스트 불러오기 및 퀴즈생성 , 틀린문제 삭제 , 북마크 추가/삭제 ) 마이페이지 api 연동 / 챗봇 ( Markdown Parsing , Prompt 설정 , api 연동) /
  - redux persist 를 활용한 로그인 상태 관리
  - 개발 초기 firebase 로그인 연동 ( 구글 sns 로그인 포함 )

<br>
    
### 👻이휘경

- **UI**
  - 페이지 :
  - 공통 컴포넌트 :
- ## **기능**

<br>

### 😎 박예진

- **UI**
  - 페이지 :
  - 공통 컴포넌트 :
- ## **기능**

<br>

### 🐬김예원

- **UI**
  - 페이지 : 퀴즈 랜딩페이지/ 퀴즈 결과페이지 / 챗봇 마크업 및 스타일링, 퀴즈풀이 페이지 반응형 구현
  - 공통 컴포넌트 :
- **기능**
  - <br>

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

## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024-11-28 ~ 2024-12-23
- UI 구현 : 2024-11-28 ~ 2024-12-09
- 기능 구현 : 2024-12-09 ~ 2022-12-18
- QA / 문서 작업 : 2024-12-19 ~ 2024-12-22
- 발표 : 2024-12-23

<br>

### 작업 관리

- Jira를 통해 현재 진행중인 작업을 공유하며 일정관리를 하였습니다.
- 매일 Daily Scrum을 진행하며 작업 순서와 방향성에 대한 고민을 나누고 Notion에 회의록을 작성하였습니다.
- 주 3회 고정 merge , 필요한 경우 추가 merge를 통해 빠른 최신화를 통해 오류를 대처하였습니다.

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

### [mr.potato]

- ALAN AI를 탑재한 챗봇에게게 질문이 가능합니다.
- 사용자가 질문하면 기초 학습하는 유저임을 인식하고 , 출처를 제외한 정보를 회신합니다.

| ON / OFF                                                     | 실시간 채팅 기능                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------- |
| ![mr.potato](../whathappen/src/assets/readme_chat_onoff.gif) | ![mr.potato](../whathappen/src/assets/readme_chat_answer.gif) |

<br>

### [실습페이지]

- 좌측에서 탭으로 주어진 문제의 html 코드와 css 코드를 확인할 수 있습니다.
- 우측 상단에는 문제가 주어지고, 완성될 정답 화면을 확인할 수 있습니다.
- 우측 하단에서는 자신이 구현중인 화면을 확인할 수 있습니다.
- 하단에는 버튼 형식으로 문제의 보기가 주어집니다.
- 다음으로 버튼을 누르면 다음에 학습할 내용이 담긴 학습페이지로 넘어갑니다.

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
- <a href="https://github.com/what-happens/Team_project_whathappns-/wiki/Siwoon's-Trouble-shooting" target="_blank">이휘경</a>
- <a href="https://github.com/what-happens/Team_project_whathappns-/wiki/Siwoon's-Trouble-shooting" target="_blank">박예진</a>
- <a href="https://github.com/what-happens/Team_project_whathappns-/wiki/Siwoon's-Trouble-shooting" target="_blank">김예원</a>
- <a href="https://github.com/what-happens/Team_project_whathappns-/wiki/Siwoon's-Trouble-shooting" target="_blank">유다형</a>

<br>

## 8. 개선 목표

- API 통신이나 validation 같은 경우 hook으로 만들어 사용 할 수 있게끔 개선 필요
- 현재 firebase SNS 로그인 서비스를 사용하고 있으나 백엔드에서 처리하게끔 개선 필요

<br>

## 9. 프로젝트 후기

### 🍊 윤시운

느낀점

<br>

### 👻 이휘경

느낀점

<br>

### 😎 박예진

느낀점

<br>

### 🐬 김예원

느낀점

<br>

### 🐶 유다형
이번이 처음 경험해보는 협업 프로젝트였고 혼자서만 하던 개발을 여러 사람과 함께 작업한다는 것이 익숙하지 않아 작업 진행 상황이나 일정 관리를 하는데 미숙한 점이 있었습니다. 하지만 팀원들과의 소통이 매우 원활했고, 서로를 배려하며 즐겁고 편안한 분위기에서 작업할 수 있었습니다. 3주 간의 길지도 짧지도 않은 기간 동안 완성도 높은 결과물을 만들어낼 수 있었던 것은 서로를 믿고 의지할 수 있는 좋은 팀원들을 만났기에 가능했던 것 같습니다.

React를 배운 지 얼마 되지 않은 시점에서 프로젝트에 참여하다 보니 기술적인 부분에서 공부가 많이 부족했고, 특히 styled-components를 활용한 컴포넌트 스타일링 부분에서 어려움을 겪었습니다. 이를 통해 아직 실력이 많이 부족하다는 것을 느꼈지만, 팀 프로젝트였기에 서로의 부족한 점을 채워주고 모르는 부분들을 함께 해결해나가면서 개발 속도를 높일 수 있었습니다. 이 과정에서 그동안 배웠던 React, JavaScript, CSS 등의 기술들에 대한 실전 경험을 쌓을 수 있었고, 특히 404 페이지의 미니게임 구현을 통해 웹 개발에 대한 이해도를 한층 더 높일 수 있었습니다.

이번 프로젝트를 통해 기술적인 성장뿐만 아니라 팀 협업의 중요성과 의사소통 능력의 가치를 깊이 깨달을 수 있었던 값진 경험이었습니다.

