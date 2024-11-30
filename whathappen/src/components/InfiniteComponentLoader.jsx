import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
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
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 800px;
`;

const SubBanner = styled.section`
  background-color: ${(props) => props.bg};
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 800px;
  animation: ${slideUp} 1s ease;
`;

const ComponentA = () => <MainBanner bg="green" />;
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
