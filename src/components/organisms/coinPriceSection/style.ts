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

  .line,
  &::before {
    height: 1px;
    background-color: #fff;
  }

  &::before {
    position: absolute;
    content: "";
    top: 0%;
    margin-top: 6rem;
    width: 100%;
    opacity: 0.4;
  }

  .line {
    margin-top: 1.6rem;
    display: inline-block;
    width: ${({ $percentage }) => $percentage}%;
    height: 1px;
  }

  h1 {
    margin-top: 3.9rem;
  }

  svg {
    position: absolute;
    left: ${({ $percentage }) => $percentage - 1}%;
  }
`;
