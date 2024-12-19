import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Button from "./Button";
import PropTypes from "prop-types";
import mainBannerImage from "../assets/main_banner_vector.png";
import subBannerImageOne from "../assets/sub_banner_vector1.png";
import subBannerImageTwo from "../assets/sub_banner_vector2.png";
import subBannerImageTwoMobile from "../assets/sub_banner_mobile2.png";
import subBannerImageThree from "../assets/sub_banner_vector3.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { media } from "../styles/MideaQuery";

const Mainbanner = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <MainBanner bg="white">
      <BannerContent>
        <BannerTitle style={{ fontWeight: "700" }}>
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
              smallStyles={{
                fontSize: "1.6rem",
                padding: "1rem 3rem",
              }}
            >
              웹사이트 만들러 가기!
            </Button>
          </Link>
        )}
      </BannerContent>
      <MainBannerImage />
    </MainBanner>
  );
};

const PointOneBanner = () => {
  return (
    <SubBanner bg="#2E5DFE" padding="23.3rem 0rem 18rem 0rem;">
      <BannerContent gap="4.2rem" center color="white">
        <BannerTitle>POINT 01</BannerTitle>
        <BannerDescription center>
          귀여운 구황작물 친구들과 함께 <br className="mobile-only" />
          HTML / CSS 로 이루어진 화면을
          <br />
          쉽고 재미있게 만들어 보아요!!
        </BannerDescription>
        <PointOneBannerImage />
      </BannerContent>
    </SubBanner>
  );
};

const PointTwoBanner = () => {
  return (
    <PointTwoSubBanner bg="white" padding="23.3rem 0rem 18rem 12rem;">
      <BannerContent gap="4.2rem">
        <BannerTitle color="#2E5DFE">POINT 02</BannerTitle>
        <BannerDescription>
          반복적인 퀴즈게임을 통해서
          <br />
          재미있게 지식을 습득해보세요!
        </BannerDescription>
        <PointTwoBannerImage />
      </BannerContent>
    </PointTwoSubBanner>
  );
};

const PointThreeBanner = () => {
  return (
    <SubBanner bg="white" padding="23.3rem 0rem 18rem 0rem;">
      <BannerContent center>
        <BannerTitle color="#2E5DFE">POINT 03</BannerTitle>
        <BannerDescription center>
          퀴즈에서 틀린 문제나 어려웠던 <br className="mobile-only" />
          문제를 한눈에 보고
          <br />
          씹고 뜯고 맛볼 수 있습니다!!
        </BannerDescription>
        <PointThreeBannerImage />
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
  const observerRef = useRef(null);
  const loadedIndexRef = useRef(0);

  useEffect(() => {
    loadedIndexRef.current = 0;
    setVisibleComponents([]);

    const loadNextComponent = () => {
      if (loadedIndexRef.current >= componentsList.length) return;

      const NextComponent = componentsList[loadedIndexRef.current];
      setVisibleComponents((prev) => [...prev, NextComponent]);
      loadedIndexRef.current += 1;
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          loadNextComponent();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observerRef.current.observe(loaderRef.current);
    }

    loadNextComponent();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      loadedIndexRef.current = 0;
    };
  }, []);

  useEffect(() => {
    if (loaderRef.current && observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current.observe(loaderRef.current);
    }
  }, [visibleComponents]);

  return (
    <div>
      {visibleComponents.map((Component, index) => (
        <Component key={`component-${index}`} />
      ))}

      {loadedIndexRef.current < componentsList.length && (
        <div ref={loaderRef} style={{ width: "100%", height: "200px" }} />
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

  ${media.large`
    gap: 3rem;
  `}
  ${media.mediumlarge`
    padding: 12rem 2rem 6rem;
    flex-direction: column;
    justify-contents: center;
  `}
`;

const SubBanner = styled.section`
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.padding};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;

  animation: ${slideUp} 1s ease;
  ${media.mediumlarge`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  `}
  .mobile-only {
    display: none;
  }
  ${media.xsmall`
  .mobile-only{
    display: block;
  }
  `}
`;

const PointTwoSubBanner = styled(SubBanner)`
  ${media.mediumlarge`
    padding: 12rem 0rem 6rem 0rem;
  `}
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "3.5rem"};
  ${(props) => props.center && "align-items: center"};
  color: ${(props) => props.color || "inherit"};
  ${media.mediumlarge`
    text-align: center;
    gap: 1rem;
  `}
`;

const BannerTitle = styled.h2`
  font-size: 6rem;
  font-weight: 700;
  color: ${(props) => props.color || "inherit"};

  ${media.large`
    font-size: 4.5rem;
  `}

  ${media.mediumlarge`
    font-size: 3.5rem;
    text-align: center;
  `}
`;

const BannerDescription = styled.p`
  font-size: 2.4rem;
  line-height: 3.5rem;
  font-weight: 300;
  text-align: ${(props) => (props.center ? "center" : "left")};
  ${media.large`
    font-size: 2rem;
  `}
  ${media.mediumlarge`
    font-size: 1.6rem;
    text-align: center;
  `}
`;

const BannerImage = styled.div`
  background-image: url(${(props) => props.src});
  background-size: ${(props) => props.size || "contain"};
  background-position: center;
  background-repeat: no-repeat;
  min-width: 45rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${media.mediumlarge`
    width: 90vw;
    min-width: 48rem;
  `}
  ${media.xsmall`
    min-width: 38rem;
    width: 100%;
    max-width: 38rem;
  `}
`;

const MainBannerImage = styled(BannerImage)`
  background-image: url(${mainBannerImage});
  width: 55.2rem;
  height: 55.2rem;
  ${media.large`
    width: 42rem;
    height: 42rem;
  `}
  ${media.mediumlarge`
    display: none;
  `}
`;

const PointOneBannerImage = styled(BannerImage)`
  background-image: url(${subBannerImageOne});
  width: 90vw;
  max-width: 105rem;
  height: 61rem;
  ${media.mediumlarge`
    max-width: 50rem;
    max-height: 24.6rem;
  `}
  ${media.small`
    max-width: 20rem;
    max-height: 15.6rem;
  `}
`;

const PointTwoBannerImage = styled(BannerImage)`
  background-image: url(${subBannerImageTwo});
  width: 90vw;
  max-width: 120rem;
  height: 60vh;
  max-height: 97rem;
  margin: 2rem auto;
  ${media.mediumlarge`
    background-image: url(${subBannerImageTwoMobile});
    max-width: 60rem;
    max-height: 68rem;
  `}
`;

const PointThreeBannerImage = styled(BannerImage)`
  background-image: url(${subBannerImageThree});
  width: 90vw;
  max-width: 130rem;
  height: 86.5rem;
  margin: 2rem 0 0 0;
  ${media.mediumlarge`
    max-width: 60rem;
    max-height: 68rem;
  `}
`;

MainBanner.propTypes = {
  bg: PropTypes.string.isRequired,
};

SubBanner.propTypes = {
  bg: PropTypes.string.isRequired,
};
