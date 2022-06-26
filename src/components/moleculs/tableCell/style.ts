import styled from "styled-components";

interface ITableCell {
  $reverseOrder?: boolean;
}

export const Wrapper = styled.td<ITableCell>`
  height: 100%;
  & > div {
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
    & > span {
      display: flex;
      gap: 0.5rem;
      ${({ $reverseOrder }) => $reverseOrder && "flex-direction: row-reverse"};
    }
  }
`;
