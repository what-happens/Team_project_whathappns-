import styled from "styled-components";
import PropTypes from "prop-types";
import { keyframes } from "styled-components";
import { media } from "../styles/MideaQuery";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(8rem);
  }
  to {
    opacity: 2;
    transform: translateY(0);
  }
`;

const FooterContent = styled.footer`
  width: 100%;
  box-sizing: border-box;
  padding: 5rem 3rem;
  background-color: ${(props) => props.backgroundColor || "#333333"};
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.textColor || "white"};
  animation: ${slideUp} 1s ease;

  ${media.medium`
    padding: 4rem 2rem;
    gap: 1.5rem;
  `}

  ${media.small`
    padding: 3rem 1.5rem;
    gap: 1.5rem;
  `}
`;

const Title = styled.h3`
  font-size: ${(props) => props.titleFontSize || "2rem"};
  font-weight: 700;
  margin-bottom: 2rem;

  ${media.medium`
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
  `}

  ${media.small`
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  `}
`;

const DescriptionList = styled.dl`
  display: flex;
  gap: 1rem;
  font-size: 1.6rem;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  ${media.medium`
    font-size: 1.5rem;
    gap: 0.8rem;
  `}

  ${media.small`
    font-size: 1.4rem;
    gap: 0.5rem;
    flex-direction: column;
  `}
`;

const DescriptionItem = styled.div`
  dt {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  dd {
    &::after {
      content: " | ";
    }

    ${media.small`
      &::after {
        content: '';
      }
    `}
  }

  &:last-child {
    dd::after {
      content: "";
    }
  }
`;

const CopyText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;

  ${media.medium`
    font-size: 1.3rem;
  `}

  ${media.small`
    font-size: 1.2rem;
  `}
`;

const ItemList = styled.ul`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;

  ${media.medium`
    gap: 2rem;
  `}

  ${media.small`
    gap: 1.5rem;
  `}
`;

const Item = styled.li`
  font-size: 1.6rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  ${media.medium`
    font-size: 1.5rem;
  `}

  ${media.small`
    font-size: 1.4rem;
  `}
`;

const Line = styled.div`
  width: 90%;
  background-color: #4e4e4e;
  height: 0.1px;

  ${media.medium`
    width: 92%;
  `}

  ${media.small`
    width: 95%;
  `}
`;

export default function Footer({
  title = "이게되네?",
  companyName = "주식회사 오르미",
  representative = "오르미",
  address = "서울시 강남구 강남대로 00",
  businessNumber = "000 0000 0000",
  email = "whatehappen@gmail.com",
  backgroundColor,
  textColor,
  titleFontSize,
}) {
  return (
    <FooterContent backgroundColor={backgroundColor} textColor={textColor}>
      <Title titleFontSize={titleFontSize}>{title}</Title>

      <DescriptionList>
        <DescriptionItem>
          <dt>회사명 : </dt>
          <dd>{companyName}</dd>
        </DescriptionItem>
        <DescriptionItem>
          <dt>대표 :</dt>
          <dd>{representative}</dd>
        </DescriptionItem>
        <DescriptionItem>
          <dt>주소 : </dt>
          <dd>{address}</dd>
        </DescriptionItem>
        <DescriptionItem>
          <dt>사업자등록번호 : </dt>
          <dd>{businessNumber}</dd>
        </DescriptionItem>
        <DescriptionItem>
          <dt>이메일 : </dt>
          <dd>{email}</dd>
        </DescriptionItem>
      </DescriptionList>
      <ItemList>
        <Item>Home</Item>
        <Item>News</Item>
        <Item>About</Item>
        <Item>ContactUs</Item>
      </ItemList>
      <Line />
      <CopyText>Copyright 2024 All rights reserved</CopyText>
    </FooterContent>
  );
}

Footer.propTypes = {
  title: PropTypes.string,
  companyName: PropTypes.string,
  representative: PropTypes.string,
  address: PropTypes.string,
  businessNumber: PropTypes.string,
  email: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  titleFontSize: PropTypes.string,
};
