import styled, { css } from "styled-components";
import { TableRow_12_col } from "../../../../style";

const CoinsRow = css`
  ${TableRow_12_col}
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    & > *:nth-child(7) {
      display: none;
    }
  }

  @media (max-width: 560px) {
    height: 7.6rem;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    & > *:nth-child(6) {
      display: none;
    }
  }

  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    & > *:nth-child(5) {
      display: none;
    }
  }
`;

export const StyledCoinsBodyRow = styled.tr`
  color: inherit;
  ${CoinsRow}
`;

export const StyledCoinsHeadRow = styled.tr`
  ${CoinsRow}
  border-bottom: ${({ theme }) =>
    theme.isdark
      ? "1px solid rgb(255,255,255, 0.15)"
      : "1px solid rgb(44,31,40, 0.15)"}
`;
