import styled from "styled-components";

import { ScreenWidth, Background } from "../../../style";

export const Wrapper = styled.table`
  ${Background}
  &,
  & > * {
    display: block;
  }
  & > * {
    ${ScreenWidth};
  }
`;
