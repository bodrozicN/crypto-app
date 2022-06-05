import styled from "styled-components";

interface IStyledOhlc {
  $percentage: number;
}

export const StyledOhlc = styled.div<IStyledOhlc>`
  position: relative;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > *:nth-child(2) > * {
      margin-left: auto;
    }
  }

  h1 {
    margin-top: 3.9rem;
  }

  svg {
    position: absolute;
    left: ${({ $percentage }) => $percentage - 1}%;
  }
`;
