import { css } from "styled-components";

const sizes = {
  large: 1200,
  mediumlarge: 867,
  medium: 768,
  small: 600,
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  acc[key] = (first, ...interpolations) => css`
    @media (max-width: ${value}px) {
      ${css(first, ...interpolations)}
    }
  `;
  return acc;
}, {});

export { media };
