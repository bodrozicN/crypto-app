import styled, { css } from "styled-components";
import { TableRow_12_col } from "../../../../style";

const CoinsRow = css`
  ${TableRow_12_col}
`;

export const StyledCoinsBodyRow = styled.tr`
  a {
    text-decoration: none;
    color: inherit;
    ${CoinsRow}
  }
`;

export const StyledCoinsHeadRow = styled.tr`
  ${CoinsRow}
`;
