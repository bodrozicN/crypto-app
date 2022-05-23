import styled from "styled-components";

interface IStyledTableCell {
  $reverseOrder?: boolean;
}

export const StyledTableCell = styled.td<IStyledTableCell>`
  a {
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
