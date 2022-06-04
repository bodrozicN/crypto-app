import styled, { css } from "styled-components";

interface IStyledWrapper {
  $type: "homePageChart" | "coinPageChart";
}

export const Wrapper = styled.div<IStyledWrapper>`
  height: 2.8rem;
  width: 100%;

  ${({ $type }) =>
    $type === "coinPageChart" &&
    css`
      height: 53rem;
    `}
`;
