import styled from "styled-components";
import { Background, ScreenWidth } from "../../../style";

export const StyledChartSection = styled.section`
  ${Background}
  padding-top: 7.5rem;

  & > div:first-child {
    margin-bottom: 3.8rem;
  }

  & > div {
    ${ScreenWidth};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
