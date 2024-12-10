import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Button from "./Button";
import PropTypes from "prop-types";
import mainBannerImage from "../assets/main_banner_vector.png";
import subBannerImageOne from "../assets/sub_banner_vector1.png";
import subBannerImageTwo from "../assets/sub_banner_vector2.png";
import subBannerImageThree from "../assets/sub_banner_vector3.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Mainbanner = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <MainBanner bg="white">
      <BannerContent>
        <BannerTitle>
          복잡한 코딩은 이제 안녕! <br /> 이게 되네??
        </BannerTitle>
        <BannerDescription>
          어려운 이론은 그만! <br />
          쉽고 간단하게 직접 만들어보는
          <br />
          웹사이트!
        </BannerDescription>
        {isLoggedIn ? (
          <Link to={"/mypage"}>
            <Button
              borderRadius="5rem"
              fontsize="2rem"
              width="25rem"
              padding="2rem"
            >
              코딩하러 가기!
            </Button>
          </Link>
        ) : (
          <Link to={"/join"}>
            <Button
              borderRadius="5rem"
              fontsize="2rem"
              width="25rem"
              padding="2rem"
            >
              회원가입 하기!
            </Button>
          </Link>
        )}
      </BannerContent>
      <BannerImage src={mainBannerImage} width="692px" height="692px" />
    </MainBanner>
  );
};

const PointOneBanner = () => {
  return (
    <SubBanner bg="#2E5DFE" padding="23.3rem 0rem 18rem 0rem;">
      <BannerContent gap="4.2rem" center color="white">
        <BannerTitle>POINT 01</BannerTitle>
        <BannerDescription center>
          귀여운 구황작물 친구들과 함께 HTML / CSS 로 이루어진 화면을
          <br />
          쉽고 재미있게 만들어 보아요!!
        </BannerDescription>
        <BannerImage src={subBannerImageOne} width="1050px" height="61rem" />
      </BannerContent>
    </SubBanner>
  );
};

const PointTwoBanner = () => {
  return (
    <SubBanner bg="white" padding="23.3rem 0rem 18rem 12rem;">
      <BannerContent gap="4.2rem">
        <BannerTitle color="#2E5DFE">POINT 02</BannerTitle>
        <BannerDescription>
          반복적인 퀴즈게임을 통해서
          <br />
          재미있게 지식을 습득해보세요!
        </BannerDescription>
        <BannerImage
          src={subBannerImageTwo}
          size="cover"
          width="120rem"
          height="97rem"
          margin="5rem auto"
        />
      </BannerContent>
    </SubBanner>
  );
};

const PointThreeBanner = () => {
  return (
    <SubBanner bg="white" padding="23.3rem 0rem 18rem 0rem;">
      <BannerContent gap="4.2rem" center>
        <BannerTitle color="#2E5DFE">POINT 03</BannerTitle>
        <BannerDescription center>
          귀여운 구황작물 친구들과 함께 HTML / CSS 로 이루어진 화면을
          <br />
          쉽고 재미있게 만들어 보아요!!
        </BannerDescription>
        <BannerImage
          src={subBannerImageThree}
          width="130rem"
          height="86.5rem"
          margin="2rem 0 0 0"
        />
      </BannerContent>
    </SubBanner>
  );
};
const FooterComponent = () => {
  return <Footer />;
};

const componentsList = [
  Mainbanner,
  PointOneBanner,
  PointTwoBanner,
  PointThreeBanner,
  FooterComponent,
];

const InfiniteComponentLoader = () => {
  const [visibleComponents, setVisibleComponents] = useState([]);
  const loaderRef = useRef(null);
  const loadedIndexRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          loadNextComponent();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  const loadNextComponent = () => {
    if (loadedIndexRef.current >= componentsList.length) return;

    const NextComponent = componentsList[loadedIndexRef.current];

    setVisibleComponents((prev) => [...prev, NextComponent]);
    loadedIndexRef.current += 1;
  };

  return (
    <div>
      {visibleComponents.map((Component, index) => (
        <Component key={index} />
      ))}

      {loadedIndexRef.current < componentsList.length && (
        <div ref={loaderRef} style={{ width: "100%", height: "200px" }}></div>
      )}
    </div>
  );
};

export default InfiniteComponentLoader;

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

const MainBanner = styled.section`
  background-color: ${(props) => props.bg};
  padding: 15rem 4.7rem 8rem 12rem;
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
`;

const SubBanner = styled.section`
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.padding};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;

  animation: ${slideUp} 1s ease;
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "3.5rem"};
  ${(props) => props.center && "align-items: center"};
  color: ${(props) => props.color || "inherit"};
`;

const BannerTitle = styled.h2`
  font-size: 6rem;
  font-weight: 700;
  color: ${(props) => props.color || "inherit"};
`;

const BannerDescription = styled.p`
  font-size: 2.4rem;
  line-height: 3.5rem;
  font-weight: 300;
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

const BannerImage = styled.div`
  background-image: url(${(props) => props.src});
  background-size: ${(props) => props.size || "contain"};
  background-position: center;
  background-repeat: no-repeat;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => props.margin && `margin: ${props.margin}`};
`;

MainBanner.propTypes = {
  bg: PropTypes.string.isRequired,
};
SubBanner.propTypes = {
  bg: PropTypes.string.isRequired,
};
