# 📖 HTML / CSS 기초 학습 어플리케이션 README

<img src="../whathappen/src/assets/top-banner.png">
<br><br>

- GitHub repository : https://github.com/what-happens/Team_project_whathappns-
- 배포 URL : https://whathappen.kr
- Test ID : test25@test.com
- Test PW : test1234!

## 프로젝트 소개

- HTML / CSS 입문 수준의 기초 학습을 할 수 있는 프로젝트 입니다!
- 1 ~ 7 단계의 State 에서 이론과 실습을 통해 작은 화면을을
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
- Back-end : node.js , firebase
  <br>
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/NodeJS.png?raw=true" width="80">
  <img src="../whathappen/src/assets/firebase.png" width="80">
- 버전 관리 : Github<br>
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Github.png?raw=true" width="80">
- 협업 툴 : Jira , Notion , Discord<br>
  <img src="../whathappen/src/assets/Jira.png" width="80">
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Discord.png?raw=true" width="80">
  <img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Notion.png?raw=true" width="80">
- 서비스 배포 환경 : ?
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

- Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
  - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
  - **develop** 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
  - **Feat** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

## 3. 프로젝트 구조

```
├── README.md
├── .eslintrc.jsON
├── .gitignore
├── .prettierignore.json
├── .prettierrc.json
├── package-lock.json
├── package.json
│
├── asset
│    ├── favicon.svg
│    ├── mainfest.json
│    ├── robots.txt
│    └── index.html
└── src
     ├── App.jsx
     ├── index.jsx
     ├── firebase.jsx
     ├── api
     │     └── mandarinAPI.js
     ├── asset
     │     ├── logo.png
     │     ├── logo_white.png
     │     ├── main_banner_vector.png
     │     └── loading.gif
     │          .
     │          .
     ├── compnents
     │     ├── AuthHeader.jsx
     │     ├── AuthNav.jsx
     │     ├── Bookmark.jsx
     │     ├── Butoon.jsx
     │     ├── Button.jsx
     │     ├── Footer.jsx
     │     ├── Header.jsx
     │     ├── MobileHeader.jsx
     │     └── InfinitieComponentLoader.js
     ├── data
     │     ├── learn.json
     │     ├── level2.json
     │     └── level3.json
     │          .
     │          .
     ├── hooks
     │     ├── useFirestore.js
     │     ├── useLogout.js
     │     ├── useSignup.js
     │     └── useLogin.js
     │
     ├── pages
     │     ├──
     │     ├──
     │     ├──
     │     └──
     ├── redux
     │     ├──
     │     └──
     └── styles
               ├── GlobalStyle.js
               └── MideaQuery.js
```

<br>

## 4. 역할 분담

### 🍊윤시운

- **UI**
  - 페이지 : 홈 , 로그인 , 회원가입 , 회원가입 완료 , 복습노트 , 404 페이지
  - 공통 컴포넌트 : Header , Footer
  - 전 page UI 디자인 총 기획 제작
- **기능**
  - 로그인 / 로그아웃 기능 , 회원가입 기능 , 복습노트 북마크/틀린문제 삭제기능 , 마이페이지 api /

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
  - 페이지 :
  - 공통 컴포넌트 :
- **기능**
  - <br>

### 🐬유다형

- **UI**
  - 페이지 : 사
  - 공통 컴포넌트 :
- ## **기능**

<br>

## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024-11-28 ~ 2024-12-23
- UI 구현 : 2024-11-28 ~ 2024-12-09
- 기능 구현 : 2024-12-09 ~ 2022-12-23

<br>

### 작업 관리

- Jira를 통해 현재 진행중인 작업을 공유하며 일정관리를 하였습니다.
- 매일 Daily Scrum을 진행하며 작업 순서와 방향성에 대한 고민을 나누고 Notion에 회의록을 작성하였습니다.
- 주 3회 고정 merge , 필요한 경우 추가 merge를 통해 빠른 최신화를 통해 오류를 대처하였습니다.

<br>

## 6. 신경 쓴 부분

- [PrivateRoutes 접근제한 설정]

- [Redux persist 통한 상태관리 및 유지]

<br>

## 7. 페이지별 기능

### [랜딩페이지]

- 서비스 접속 초기화면으로 서비스에 대한 설명이 무한스크롤로 구현 되어있습니다.
  - 로그인이 되어 있지 않은 경우 : Header의 로그인 버튼
  - 로그인이 되어 있는 경우 : Header 의 로그아웃버튼과 Nav

| 랜딩페이지                                     |
| ---------------------------------------------- |
| ![landing](../whathappen/src/assets/homer.jpg) |

<br>

### [회원가입]

- 가입하기 버튼을 눌렀을때 유효성 검사 실행
- 이메일 주소의 형식이 유효하지 않는경우 , 이미 가입된 이메일일 경우, 비밀번호가 8자 미만일 경우, 입력창이 비어있는 경우우에는 각 입력창 하단에 경구 문구가 나타납니다.
- 유효성 검사를 통과하면 회원가입 완료 페이지로 이동

| 회원가입                                    |
| ------------------------------------------- |
| ![join](../whathappen/src/assets/homer.jpg) |

<br>

### [로그인]

- 로그인 버튼을 누르면 유효성 검사 실행
- 이메일 주소의 형식이 유효하지 않거나 입력창이 비어있는 경우에는, 각 입력창 하단에 경고 문구가 나타납니다.
- 로그인 버튼 클릭 시 이메일 주소 또는 비밀번호가 일치하지 않을 경우에는 입력창 하단에 경고 문구가 나타나며, 로그인에 성공하면 랜딩페이지로 이동합니다.

| 로그인                                       |
| -------------------------------------------- |
| ![login](../whathappen/src/assets/homer.jpg) |

<br>

## 8. 트러블 슈팅

- [이슈1](https://www.naver.com)

- [이슈2](https://www.google.com)

<br>

## 9. 개선 목표

- api 통신 같은경우 hook으로 만들어 사용

<br>

## 10. 프로젝트 후기

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

### 🐬 유다형

느낀점
