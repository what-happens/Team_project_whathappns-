import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

const SliderWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; // 버튼과 슬라이더 사이 간격
`;

const StyledSwiper = styled(Swiper)`
  width: calc(100% - 90px); // 버튼 폭을 고려한 너비 조정
  overflow: hidden;
`;

const StyledButton = styled.button`
  background-color: #d9d9d9;
  width: 45px;
  height: 55px;
  border: none;
  font-size: 40px;
  font-weight: bold;
  color: #ffff;
  cursor: pointer;
  flex-shrink: 0;
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
`;

const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor || "#f0f0f0"};
  border-radius: 20px;
  box-shadow: 10px 10px 10px -5px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const CardSlider = () => {
  const [swiper, setSwiper] = useState(null);
  return (
    <SliderWrapper>
      <StyledButton onClick={() => swiper.slidePrev()}>&lt;</StyledButton>
      <StyledSwiper
        modules={[Navigation]}
        onBeforeInit={(swipper) => setSwiper(swipper)}
        spaceBetween={50}
        slidesPerView={4}
        speed={500}
        loop={false}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <SwiperSlide key={i}>
            <CardContainer>
              <Card bgColor={i % 2 === 0 ? "#dff0d8" : "#d9edf7"}>
                카드 {i + 1}
              </Card>
            </CardContainer>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <StyledButton onClick={() => swiper.slideNext()}>&gt;</StyledButton>
    </SliderWrapper>
  );
};

export default CardSlider;
