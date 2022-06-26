import styled from "styled-components";
import { Background, ScreenWidth } from "../../../style";

export const Wrapper = styled.div`
  ${Background};
  padding-top: 4.8rem;
  display: flex;
  align-items: center;
  & > div {
    ${ScreenWidth};
    border-top: ${({ theme }) =>
      theme.isDark
        ? "1px solid rgba(255, 255, 255, 0.2)"
        : "1px solid rgba(0, 0, 0, 0.2)"};
    height: 18.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      height: 4rem;
      gap: 1.4rem;
      margin-right: 4rem;
      span {
        font-size: 1.6rem;
        font-family: LightFont;
        color: ${({ theme }) => (theme.isDark ? "#fff" : "#000")};
      }
    }
  }

  .active {
    background-color: ${({ theme }) =>
      theme.isDark ? "var(--pink)" : "var(--blue)"};
    color: #fff;
  }
`;
