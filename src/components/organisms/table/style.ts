import styled from "styled-components";

import { ScreenWidth } from "../../../style";

export const StyledTable = styled.table`
  &,
  & > * {
    display: block;
  }
  & > * {
    ${ScreenWidth};
  }
`;
