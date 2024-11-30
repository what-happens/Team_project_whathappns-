import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import Button from "./Buttton";
import PropTypes from "prop-types";
import mainBannerImage from "../assets/main_banner_vector.png";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 2;
    transform: translateY(0);
  }
`;

const MainBanner = styled.section`
  background-color: ${(props) => props.bg};
  padding: 3rem 0rem 3rem 7.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 10rem;
`;

const SubBanner = styled.section`
  background-color: ${(props) => props.bg};
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 800px;
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
      <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
        <h3 style={{ fontSize: "5rem" }}>
          복잡한 코딩은 이제 안녕! <br /> 이게 되네??
        </h3>
        <p style={{ fontSize: "2.1rem", lineHeight: "3rem" }}>
          어려운 이론은 그만! <br />
          쉽고 간단하게 직접 만들어보는
          <br />
          웹사이트!
        </p>
        <Button fontSize="small" borderRadius="5rem">
          웹사이트 만들러가기!
        </Button>
      </div>
      <div
        style={{
          backgroundImage: `url(${mainBannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "55.7rem",
        }}
      ></div>
    </MainBanner>
  );
};
const ComponentB = () => <SubBanner bg="red" />;
const ComponentC = () => <SubBanner bg="black" />;

const componentsList = [ComponentA, ComponentB, ComponentC];

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
        <div ref={loaderRef}></div>
      )}
    </div>
  );
};

export default InfiniteComponentLoader;
