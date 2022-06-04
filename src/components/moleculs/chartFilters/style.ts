import styled from "styled-components";

export const StyledChartFilters = styled.div`
  width: 20rem;
  height: 5rem;
  border-radius: 400px;
  background-color: ${({ theme }) =>
    theme.isDark ? "#1C1C1C" : "var(--grey-light-4)"};
  display: flex;
  align-items: center;
  justify-content: space-around;

  .active-btn {
    background-color: ${({ theme }) => (theme.isDark ? "#EF00B6" : "#2300fa")};
    color: #fff;
    font-family: boldFont;
  }
`;
