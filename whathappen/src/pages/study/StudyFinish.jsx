import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import media from "./media";
import Icon from "../../assets/Icon_finish.png";
import Logo from "../../assets/logo_white.png";
import { Link } from "react-router-dom";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 3rem;
  height: 100vh;
  background-color: var(--main-color);
  color: white;
`;

const LogoImage = styled.img`
  ${({ theme }) => theme.tablet`
    width: 25rem;
  `};
  ${({ theme }) => theme.mobile`
    width: 20rem;
  `};

  width: 29rem;
  height: auto;
  object-fit: cover;
`;

const FinishIcon = styled.img`
  ${({ theme }) => theme.tablet`
    width: 22rem;
  `};
  ${({ theme }) => theme.mobile`
    width: 20rem;
    margin: 2rem 0;
  `};

  width: 25rem;
  height: auto;
  object-fit: cover;
  margin: 5rem 0;
`;

const Title = styled.p`
  ${({ theme }) => theme.tablet`
  font-size: ${({ theme }) => theme.fontSizes.md};
  `};
  ${({ theme }) => theme.mobile`
  font-size: ${({ theme }) => theme.fontSizes.title};
  `};

  font-size: 6.4rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  ${({ theme }) => theme.tablet`
  font-size: ${({ theme }) => theme.fontSizes.title};
  `};
  ${({ theme }) => theme.mobile`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  `};
  font-size: 4.8rem;
  font-weight: 300;
`;

const ActionLink = styled(Link)`
  ${({ theme }) => theme.tablet`
  font-size: ${({ theme }) => theme.fontSizes.title};
  width: 22rem;
  line-height: 6rem;
  `};
  ${({ theme }) => theme.mobile`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  width: 18rem;
  line-height: 5rem;
  `};

  background-color: #fff;
  color: var(--main-color);
  width: 40rem;
  font-size: 4rem;
  font-weight: 500;
  line-height: 9rem;
  vertical-align: center;
  text-decoration: none;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function StudyFinish() {
  return (
    <ThemeProvider theme={{ ...theme, ...media }}>
      <Container>
        <LogoImage src={Logo} alt="로고" />
        <h1 className="sr-only">학습 완료 페이지</h1>
        <FinishIcon src={Icon} alt="" />
        <div>
          <Title>학습을 완료하였습니다!!</Title>
          <Subtitle>다음 학습도 도전 해보세요!</Subtitle>
        </div>
        <ActionLink to="/">메인페이지로 이동</ActionLink>
      </Container>
    </ThemeProvider>
  );
}
