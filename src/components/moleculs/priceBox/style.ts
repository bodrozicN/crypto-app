import styled from "styled-components";

export const StyledPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  height: 21rem;
  background-color: ${({ theme }) => (theme.isDark ? "#292929" : "#fff")};
  border: ${({ theme }) => !theme.isDark && "1px solid #d9d9d9"};
  border-radius: 4px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
