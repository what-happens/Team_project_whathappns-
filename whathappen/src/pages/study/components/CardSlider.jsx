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
`;

const StyledSwiper = styled(Swiper)`
  width: 80%;
  overflow: auto;
  padding: 1rem;
`;

const StyledButton = styled.button`
  background-color: #d9d9d9;
  width: 4.5rem;
  height: 5.5rem;
  border: none;
  font-size: 4rem;
  font-weight: bold;
  color: #ffff;
  cursor: pointer;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50rem;
  background-color: ${(props) => props.bgColor || "#f0f0f0"};
  border-radius: 20px;
  box-shadow: 5px 5px 1px 1px rgba(0, 0, 0, 0.1);
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
        spaceBetween={50} /* 카드 간 간격 */
        slidesPerView={4} /* 한 번에 보이는 카드 개수 */
        speed={500} /* 슬라이드 전환 속도 */
        loop={false} /* 무한 루프 설정 */
      >
        {Array.from({ length: 10 }, (_, i) => (
          <SwiperSlide key={i}>
            <Card bgColor={i % 2 === 0 ? "#dff0d8" : "#d9edf7"}>
              카드 {i + 1}
            </Card>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <StyledButton onClick={() => swiper.slideNext()}>&gt;</StyledButton>
    </SliderWrapper>
  );
};

export default CardSlider;
