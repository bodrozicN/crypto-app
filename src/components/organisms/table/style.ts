import styled from "styled-components";

import { Background, ScreenWidth } from "../../../style";

export const StyledTable = styled.table`
  &,
  & > * {
    display: block;
  }
  ${Background}
  & > * {
    ${ScreenWidth};
  }
`;
