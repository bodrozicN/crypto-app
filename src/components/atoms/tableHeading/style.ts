import styled from "styled-components";
import { OFontWeight } from "../../../types";

export const StyledTableHeading = styled.th`
  font-size: 1.5rem;
  color: ${({ theme }) =>
    theme.isDark ? "var(--white)" : "var(--grey-light-3)"};
  justify-self: start;
  font-weight: ${OFontWeight.light};
`;
