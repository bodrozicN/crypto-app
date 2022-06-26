import styled, { css } from "styled-components";
import { TableRow_12_col } from "../../../../style";

const CoinsRow = css`
  ${TableRow_12_col}
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
