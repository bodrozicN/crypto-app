import styled, { css } from "styled-components";

const Select = css`
  font-family: boldFont;
  font-size: 1.4rem;
  background-color: transparent;
  border: none;
  outline: none;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const HeroSelect = styled.select`
  ${Select}
  width: 7.5rem;
  color: #fff;

  & > option {
    color: black;
  }
`;

export const BodySelect = styled.select`
  ${Select}
  width: 10.5rem;
  color: ${({ theme }) => (theme.isDark ? "#fff" : "var(--blue)")};
  & > option {
    color: black;
  }

  @media (max-width: 768px) {
    width: 6rem;
  }
`;
