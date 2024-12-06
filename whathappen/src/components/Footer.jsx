import styled from "styled-components";
import PropTypes from "prop-types";
import { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const FooterContent = styled.footer`
  width: 100%;
  box-sizing: border-box;
  padding: 5.7rem 29rem;
  background-color: #2e5dfe;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: white;
  animation: ${slideUp} 1s ease;
`;

const Title = styled.h3`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const DescriptionList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.2rem;
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

const StyledAddress = styled.address`
  font-style: normal;
`;

export default function Footer() {
  return (
    <FooterContent>
      <StyledAddress>
        <Title>이게되네?</Title>
        <DescriptionList>
          <DescriptionItem>
            <dt>회사명</dt>
            <dd>주식회사 오르미</dd>
          </DescriptionItem>
          <DescriptionItem>
            <dt>대표자</dt>
            <dd>대표 : 오르미</dd>
          </DescriptionItem>
          <DescriptionItem>
            <dt>주소</dt>
            <dd>주소 : 서울시 강남구 강남대로 00</dd>
          </DescriptionItem>
          <DescriptionItem>
            <dt>사업자등록번호</dt>
            <dd>사업자 등록번호 : 000 0000 0000</dd>
          </DescriptionItem>
          <DescriptionItem>
            <dt>이메일</dt>
            <dd>whatehappen@gmail.com</dd>
          </DescriptionItem>
        </DescriptionList>
      </StyledAddress>
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
