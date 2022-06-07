import styled from "styled-components";

import { ScreenWidth, Background } from "../../../style";

export const StyledTable = styled.table`
  ${Background}
  &,
  & > * {
    display: block;
  }
  & > * {
    ${ScreenWidth};
  }
`;
