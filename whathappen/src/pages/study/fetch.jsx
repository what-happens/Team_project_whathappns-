import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardImg = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$isCleared ? "#FF4444" : "#F0F0F0")};
  border-radius: 10px;
  margin-bottom: 10px;

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }
`;

const CardTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
  text-align: center;
`;

const CardContent = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
`;

const LevelCards = () => {
  const [clearData, setClearData] = useState([]);
  const cardData = [
    {
      level_id: 0,
      stage_id: 0,
      done: false,
      img: "icon_level.png",
      level_name: "Level 01",
      theme: "HTML 기본 구조",
      questions: [
        {
          q_id: 0,
          q_title: "",
          choices: [],
          answer: "",
        },
      ],
    },
    {
      level_id: 1,
      stage_id: 0,
      done: false,
      img: "icon_level.png",
      level_name: "Level 01",
      theme: "HTML 기본 구조",
      questions: [
        {
          q_id: 0,
          q_title: "",
          choices: [],
          answer: "",
        },
      ],
    },
  ];

  useEffect(() => {
    // Fetch clear stage data
    const fetchClearStage = async () => {
      try {
        // 실제 API 엔드포인트로 대체해야 합니다
        const response = await fetch(`${process.env.REACT_APP_API_URL}/clear`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          console.log("Clear Stage Data:", data);
          console.log("Full Clear Stage:", data.clearStage);
          const data = await response.json();

          const levels = data.clearStage[0]?.levels || [];
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

  return (
    <Swiper>
      {cardData.map((card) => (
        <SwiperSlide key={card.stage_id}>
          <CardWrapper>
            <CardImg $isCleared={clearData.includes(card.level_id)}>
              <img src={card.img} alt="" />
            </CardImg>
            <CardTitle>{card.level_name}</CardTitle>
            <CardContent>{card.theme}</CardContent>
          </CardWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LevelCards;
