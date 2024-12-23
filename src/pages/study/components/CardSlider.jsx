import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled, { ThemeProvider, keyframes } from "styled-components";
import theme from "../theme";
import media from "../media";
import { Link, useParams, useNavigate } from "react-router-dom";

const CardSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const [clearData, setClearData] = useState([]);
  const { stageId } = useParams();
  const navigate = useNavigate();
  const [levelData, setLevelData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClearStage = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/stage/clear`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          const levels = data.clearStage[stageId]?.levels || [];
          setClearData(levels);
        } else {
          const errorData = await response.json();
          console.error("Error:", errorData);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchClearStage();
  }, []);

  const loadStageData = async (id) => {
    try {
      setIsLoading(true);
      setError(null);

      if (!id || !/^\d+$/.test(id)) {
        throw new Error("Invalid stage ID");
      }
      const module = await import(`../../../data/stage${id}/meta.json`);

      if (!module.default || typeof module.default !== "object") {
        throw new Error("Invalid data format");
      }

      setLevelData(module.default);
      setIsLoading(false);
    } catch (err) {
      console.error("Error loading stage data:", err);

      if (err.code === "MODULE_NOT_FOUND") {
        navigate("/404", { replace: true });
      } else if (err.message === "Invalid stage ID") {
        setError("Invalid stage ID provided");
        navigate("/error", { replace: true });
      } else {
        setError("Failed to load stage data");
        navigate("/404", { replace: true });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadStageData(stageId);
  }, [stageId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

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
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1500: {
              slidesPerView:
                levelData && levelData.length < 4 ? levelData.length : 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {Array.isArray(levelData) &&
            levelData.map((levelCard, index) => {
              const imageUrl = require(`../../../assets/${levelCard.img}`);
              const isLastItem = index === levelData.length - 1;

              return (
                <SwiperSlide key={levelCard.level_id}>
                  <CardWrapper>
                    <CardLink
                      to={
                        isLastItem
                          ? `/exercise/${stageId}/${levelCard.level_id}`
                          : `/study/${stageId}/${levelCard.level_id}`
                      }
                      className="mr-2"
                    >
                      <CardImg
                        $isCleared={clearData.includes(levelCard.level_id)}
                      >
                        <img src={imageUrl} alt="level 아이콘" />
                      </CardImg>
                      <CardTitle>{levelCard.level_name}</CardTitle>
                      <CardContent>
                        {levelCard.theme.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </CardContent>
                    </CardLink>
                  </CardWrapper>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <StyledButton onClick={() => swiper.slideNext()}>&gt;</StyledButton>
      </SliderWrapper>
    </ThemeProvider>
  );
};

export default CardSlider;

const jello = keyframes`
    0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`;

// start styled-cpomponents
const SliderWrapper = styled.div`
  ${({ theme }) => theme.tesktop`
    width: 95rem;
  `};
  ${({ theme }) => theme.laptop`
    width: 75rem;
  `};
  ${({ theme }) => theme.tablet`
    width: 60rem;
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
  box-sizing: border-box;
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
  background-color: #2e5dff;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50rem;
  border: none;
  font-size: 4rem;
  font-weight: bold;
  color: white;
  box-shadow:
    rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  cursor: pointer;
`;

const CardWrapper = styled.div`
  ${({ theme }) => theme.tablet`
    height: 40rem;
  `};
  ${({ theme }) => theme.mobile`
    height: 38rem;
  `};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  height: 45rem;
  padding: 2rem;
  background-color: white;
  border-radius: 20px;
  transition: all 0.5s ease;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  &:hover {
    transform: scale(1.05);
  }

  &:hover img {
    animation: ${jello} 1.1s both;
  }
`;

const CardLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  outline: none;
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
  background-color: ${(props) =>
    props.$isCleared ? `var(--main-color)` : `#F6F6F6`};
  width: 20rem;
  height: 20rem;
  border-radius: 50rem;
  flex-shrink: 0;

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
  ${({ theme }) => theme.tesktop2`
    font-size: ${({ theme }) => theme.fontSizes.md};
  `};
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

const CardContent = styled.p`
  ${({ theme }) => theme.tesktop2`
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  `};
  ${({ theme }) => theme.laptop`
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  `};
  ${({ theme }) => theme.tablet`
    font-size: 1.7rem;
  `};
  ${({ theme }) => theme.mobile`
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  `};
  font-size: 2rem;
  font-weight: 500;
  height: 4rem;
  line-height: 3rem;
  color: #000;
  word-wrap: keep-all;
`;
// end styled-cpomponents
