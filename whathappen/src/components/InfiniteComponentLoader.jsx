import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Button from "./Buttton";
import PropTypes from "prop-types";
import mainBannerImage from "../assets/main_banner_vector.png";
import subBannerImageOne from "../assets/sub_banner_vector1.png";

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
  padding: 23.3rem 0rem 18rem 0rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;

  animation: ${slideUp} 1s ease;
`;

MainBanner.propTypes = {
  bg: PropTypes.string.isRequired,
};
SubBanner.propTypes = {
  bg: PropTypes.string.isRequired,
};

const ComponentA = () => {
  return (
    <MainBanner bg="white">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3.5rem",
        }}
      >
        <h2 style={{ fontSize: "6rem", fontWeight: "700" }}>
          복잡한 코딩은 이제 안녕! <br /> 이게 되네??
        </h2>
        <p
          style={{
            fontSize: "2.4rem",
            lineHeight: "3.5rem",
            fontWeight: "300",
          }}
        >
          어려운 이론은 그만! <br />
          쉽고 간단하게 직접 만들어보는
          <br />
          웹사이트!
        </p>
        <Button
          borderRadius="5rem"
          fontsize="2rem"
          width="25rem"
          padding="2rem"
        >
          웹사이트 만들러가기!
        </Button>
      </div>

      <div
        style={{
          backgroundImage: `url(${mainBannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "692px",
          height: "692px",
        }}
      ></div>
    </MainBanner>
  );
};
const ComponentB = () => {
  return (
    <SubBanner bg="#2E5DFE">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4.2rem",
          color: "white",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontSize: "6rem", fontWeight: "700" }}>POINT 01</h3>
        <p
          style={{
            textAlign: "center",
            fontWeight: "300",
            lineHeight: "3rem",
            fontSize: "2.4rem",
          }}
        >
          귀여운 구황작물 친구들과 함께 HTML / CSS 로 이루어진 화면을
          <br />
          쉽고 재미있게 만들어 보아요!!
        </p>
        <div
          style={{
            backgroundImage: `url(${subBannerImageOne})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "1050px",
            height: "61rem",
          }}
        ></div>
      </div>
    </SubBanner>
  );
};

const ComponentC = () => <SubBanner bg="white" />;
const ComponentD = () => <SubBanner bg="white" />;

const componentsList = [ComponentA, ComponentB, ComponentC, ComponentD];

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
      { threshold: 0.5 }
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

    console.log("Loading component:", NextComponent.name);

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
