import { useState, forwardRef } from "react";
import styled, { css } from "styled-components";
import selectArrow from "../../../assets/selectArrow.png";
import { media } from "../../../styles/MideaQuery";
import PropTypes from "prop-types";

export const Select = forwardRef(function Select(
  { options, onSelectOption, isOpen, onSelectOpen, index },
  ref
) {
  const [selectedOption, setSelectedOption] = useState(options[0][1]);

  const handleSelectOption = (e, value) => {
    onSelectOption(value);
    setSelectedOption(e.target.textContent);
    onSelectOpen(null);
  };

  return (
    <SelectBoxWrap ref={ref}>
      <SelectBox marginBottom="1.4rem" onClick={() => onSelectOpen(index)}>
        {selectedOption}
      </SelectBox>
      <SelectItemWrap marginTop="-0.9rem" isVisible={isOpen}>
        {options.map((option, index) => (
          <SelectItem
            key={index}
            onClick={(e) => handleSelectOption(e, option[0])}
          >
            {option[1]}
          </SelectItem>
        ))}
      </SelectItemWrap>
    </SelectBoxWrap>
  );
});

const SelectBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const selectCommonStyle = css`
  width: 30rem;
  height: 7rem;
  font-size: 2.5rem;
  background-color: white;
  color: var(--main-color);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.medium`
    width: 27rem;
  height: 6.5rem;
  font-size: 2.3rem;
`}

  ${media.small`
    width: 23rem;
  height: 5.5rem;
  font-size: 2rem;
`}
  ${media.xsmall`
    width: 18rem;
    height: 4.8rem;
  font-size: 1.7rem;
  `}
`;

const SelectBox = styled.button`
  all: unset;
  ${selectCommonStyle};
  border-radius: 15px;
  margin-bottom: ${(props) => props.marginBottom};
  background-image: url(${selectArrow});
  background-repeat: no-repeat;
  background-position: left 2rem center;
  background-size: 10%;
`;

const SelectItemWrap = styled.div`
  border: 3px solid var(--main-color);
  border-radius: 10px;
  position: absolute;
  z-index: 999;
  margin-top: ${(props) => props.marginTop};
  background-color: #fff;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  ${media.medium`
    margin-top: ${(props) => props.mediumMarginTop || props.marginTop};
  `}

  ${media.small`
    margin-top: ${(props) => props.smallMarginTop || props.marginTop};
  `}
`;

const SelectItem = styled.div`
  ${selectCommonStyle};
  border-radius: 20px;
  &:hover {
    background-color: var(--main-color);
    color: white;
    border-radius: 0;
  }
`;

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSelectOpen: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
