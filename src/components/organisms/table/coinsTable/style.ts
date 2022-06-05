import styled from "styled-components";
import { Background, ScreenWidth } from "../../../../style";

export const StyledCoinsTable = styled.table`
  &,
  & > * {
    display: block;
  }
  ${Background}
  & > * {
    ${ScreenWidth};
  }
`;
