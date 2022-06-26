import styled from "styled-components";

interface IPriceLine {
  $percentage: number;
}

export const Wrapper = styled.span<IPriceLine>`
  &,
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

  margin-top: 1.6rem;
  display: inline-block;
  width: ${({ $percentage }) => $percentage}%;
  height: 1px;
`;
