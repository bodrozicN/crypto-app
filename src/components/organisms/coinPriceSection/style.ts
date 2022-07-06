import styled from "styled-components";

interface IOhlc {
  $percentage: number;
}

export const Wrapper = styled.div<IOhlc>`
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

  @media (max-width: 560px) {
    h1 {
      margin-top: 0rem;
    }
  }
`;
