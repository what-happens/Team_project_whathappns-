import React from "react";
import styled from "styled-components";
import { media } from "../../../styles/MideaQuery";
import stageData from "../../../data/stageMeta.json";
import PropTypes from "prop-types";
import stampIcon from "../../../assets/Stamp.png";

const StampIcon = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;

  ${media.large`
    width: 70%;
    height: 70%;
  `}

  ${media.small`
    width: 80%;
    height: 80%;
  `}
`;
const StampBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  background-color: white;
  padding: 4rem 2rem 1rem 5rem;
  width: 100%;
  height: 429px;
  border-radius: 20px;

  ${media.large`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 2rem;
    width: 100%;
    height: 11rem;
    border-radius: 1rem;
    gap: 1rem;
  `}

  ${media.small`
    height: 9rem;
    padding: 4rem 2rem;
    gap: 1rem;
  `}

  ${media.xsmall`
    height: 7rem;
    padding: 1rem 2rem;
    gap: 0.8rem;
  `}
`;

const StampSlot = styled.div`
  aspect-ratio: 1;
  border-radius: 1rem;
  width: 16.2rem;
  height: 16.2rem;
  background-color: var(--main-color); // 조건부 스타일 제거
  box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1280px) {
    width: 12.2rem;
    height: 12.2rem;
  }
  @media (max-width: 1020px) {
    width: 10.2rem;
    height: 10.2rem;
  }

  ${media.large`
    max-width: 8rem;
    height: 8rem;
    border-radius: 1rem;
    margin: 0;
  `}

  ${media.small`
    max-width: 7rem;
    height: 7rem;
    border-radius: 0.8rem;
  `}

  ${media.xsmall`
    max-width: 4.5rem;
    height: 4.5rem;
    border-radius: 0.6rem;
  `}
`;
const Stamps = ({ clearStages }) => {
  const isStageCompleted = (stageId) => {
    const clearedStage = clearStages?.find(
      (stage) => stage.stage_id === stageId
    );

    if (!clearedStage) return false;

    const stage = stageData.stages.find(
      (s) => s.staged_id === parseInt(clearedStage.stage_id)
    );

    return clearedStage.levels.length === stage?.level_num;
  };

  return (
    <StampBox>
      {stageData.stages.map((stage) => (
        <StampSlot
          key={stage.staged_id}
          isCompleted={isStageCompleted(stage.staged_id)}
        >
          {isStageCompleted(stage.staged_id) && (
            <StampIcon src={stampIcon} alt="완료 스탬프" />
          )}
        </StampSlot>
      ))}
    </StampBox>
  );
};

Stamps.propTypes = {
  clearStages: PropTypes.arrayOf(
    PropTypes.shape({
      levels: PropTypes.arrayOf(PropTypes.string),
      stage_id: PropTypes.string,
    })
  ),
};

Stamps.defaultProps = {
  clearStages: [],
};

export default Stamps;
