import { css } from "styled-components";

const sizes = {
  mobile: 480,
  mobile2: 600,
  mobile3: 700,
  tablet: 768,
  laptop: 1024,
  tesktop: 1200,
  tesktop2: 1500,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
