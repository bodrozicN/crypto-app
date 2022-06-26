import styled, { css } from "styled-components";

interface IWrapper {
  $type: "homePageChart" | "coinPageChart";
}

export const Wrapper = styled.div<IWrapper>`
  height: 2.8rem;
  width: 100%;

  ${({ $type }) =>
    $type === "coinPageChart" &&
    css`
      height: 37.8rem;
    `}
`;
