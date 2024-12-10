import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import media from "../media";
import icon from "../../../assets/icon_level.png";

const SliderWrapper = styled.div`
  ${({ theme }) => theme.tesktop`
    width: 70rem;
  `};
  ${({ theme }) => theme.laptop`
    width: 60rem;
  `};
  ${({ theme }) => theme.tablet`
    width: 40rem;
  `};
  ${({ theme }) => theme.mobile2`
    width: 38rem;
  `};
  ${({ theme }) => theme.mobile`
    width: 32rem;
  `};
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  .mySwiper {
    padding: 3rem;
  }
`;

const StyledButton = styled.button`
  ${({ theme }) => theme.tablet`
    width: 3.5rem;
    height: 4.5rem;
    font-size: 3.5rem;
  `};
  ${({ theme }) => theme.mobile`
    width: 2.5rem;
    height: 3.5rem;
    font-size: 2.5rem;
  `};
  background-color: #d9d9d9;
  width: 4.5rem;
  height: 5.5rem;
  border: none;
  font-size: 4rem;
  font-weight: bold;
  color: #ffff;
  cursor: pointer;
`;

const CardWrapper = styled.div`
  ${({ theme }) => theme.mobile`
    gap: 0.5rem;
  `};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  height: 50vh;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImg = styled.div`
  ${({ theme }) => theme.laptop`
    width: 17rem;
    height: 17rem;
  `};
  ${({ theme }) => theme.tablet`
    width: 17rem;
    height: 17rem;
  `};
  ${({ theme }) => theme.mobile`
    width: 15rem;
    height: 15rem;
  `};
  display: flex;
  background-color: var(--main-color);
  width: 20rem;
  height: 20rem;
  border-radius: 50rem;
  img {
    ${({ theme }) => theme.laptop`
      height: 13rem;
    `};
    ${({ theme }) => theme.tablet`
      height: 13rem;
    `};
    ${({ theme }) => theme.mobile`
      height: 11rem;
    `};
    margin: auto;
    height: 15rem;
    object-fit: contain;
    margin-bottom: 2rem;
  }
`;

const CardTitle = styled.h3`
  ${({ theme }) => theme.laptop`
    font-size: ${({ theme }) => theme.fontSizes.md};
  `};
  ${({ theme }) => theme.tablet`
    font-size: ${({ theme }) => theme.fontSizes.md};
  `};
  ${({ theme }) => theme.mobile`
    font-size: ${({ theme }) => theme.fontSizes.md};
  `};
  font-size: 4rem;
  font-weight: 700;
  line-height: 5rem;
  color: var(--main-color);
`;

const CardContent = styled.span`
  ${({ theme }) => theme.laptop`
    font-size: 1.8rem;
  `};
  ${({ theme }) => theme.tablet`
    font-size: 1.7rem;
  `};
  ${({ theme }) => theme.mobile`
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  `};
  font-size: 2rem;
  font-weight: 500;
  line-height: 4rem;
  color: #000;
`;

const CardSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const cardData = [
    { id: 1, img: icon, title: "Level 01", content: "명작 소개 페이지 만들기" },
    { id: 2, img: icon, title: "Level 02", content: "명작 소개 페이지 만들기" },
    { id: 3, img: icon, title: "Level 03", content: "명작 소개 페이지 만들기" },
    { id: 4, img: icon, title: "Level 04", content: "명작 소개 페이지 만들기" },
    { id: 5, img: icon, title: "Level 05", content: "명작 소개 페이지 만들기" },
    { id: 6, img: icon, title: "Master", content: "명작 소개 페이지 만들기" },
  ];

  return (
    <ThemeProvider theme={{ ...theme, ...media }}>
      <SliderWrapper>
        <StyledButton onClick={() => swiper.slidePrev()}>&lt;</StyledButton>
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swipper) => setSwiper(swipper)}
          slidesPerView={1}
          spaceBetween={50}
          speed={500} /* 슬라이드 전환 속도 */
          loop={false} /* 무한 루프 설정 */
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <CardWrapper>
                <CardImg>
                  <img src={card.img} alt="" />
                </CardImg>
                <CardTitle>{card.title}</CardTitle>
                <CardContent>{card.content}</CardContent>
              </CardWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
        <StyledButton onClick={() => swiper.slideNext()}>&gt;</StyledButton>
      </SliderWrapper>
    </ThemeProvider>
  );
};

export default CardSlider;
