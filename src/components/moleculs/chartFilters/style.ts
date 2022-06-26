import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 400px;
  background-color: ${({ theme }) =>
    theme.isDark ? "#292929" : "var(--grey-secondary)"};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .active-btn {
    background-color: ${({ theme }) => (theme.isDark ? "#EF00B6" : "#2300fa")};
    color: #fff;
    font-family: boldFont;
  }
`;
