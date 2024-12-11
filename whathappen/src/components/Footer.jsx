import styled from "styled-components";
import PropTypes from "prop-types";
import { keyframes } from "styled-components";

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
  padding: 5rem 0 5rem 0;
  background-color: #333333;
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-direction: column;
  color: white;
  animation: ${slideUp} 1s ease;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const DescriptionList = styled.dl`
  display: flex;
  gap: 1rem;
  font-size: 1.6rem;
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
`;

const CopyText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

const ItemList = styled.ul`
  display: flex;
  gap: 3rem;
`;

const Item = styled.li`
  font-size: 1.6rem;
  font-weight: 700;
`;

const Line = styled.div`
  width: 100%;
  background-color: #4e4e4e;
  height: 0.1px;
`;

export default function Footer() {
  return (
    <FooterContent>
      <Title>이게되네?</Title>

      <DescriptionList>
        <DescriptionItem>
          <dt>회사명 : </dt>
          <dd>주식회사 오르미 | </dd>
        </DescriptionItem>
        <DescriptionItem>
          <dt>대표 :</dt>
          <dd> 오르미 | </dd>
        </DescriptionItem>
        <DescriptionItem>
          <dt>주소 : </dt>
          <dd>서울시 강남구 강남대로 00 | </dd>
        </DescriptionItem>
        <DescriptionItem>
          <dt>사업자등록번호 : </dt>
          <dd> 000 0000 0000 | </dd>
        </DescriptionItem>
        <DescriptionItem>
          <dt>이메일 : </dt>
          <dd>whatehappen@gmail.com</dd>
        </DescriptionItem>
      </DescriptionList>
      <ItemList>
        <Item>Home</Item>
        <Item>News</Item>
        <Item>About</Item>
        <Item>ContactUs</Item>
      </ItemList>
      <Line />
      <CopyText>Copyright 2020 All rights reserved</CopyText>
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
