import styled from "styled-components";

export const StyledCoinSupply = styled.div`
  & > *:nth-child(1) {
    margin-bottom: 2.2rem;
    background-color: ${({ theme }) => (theme.isDark ? "#292929" : "#fff")};
    height: 32.4rem;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: ${({ theme }) => !theme.isDark && "1px solid #d9d9d9"};
    border-radius: 4px;

    & > div {
      position: relative;
    }

    & > div:nth-child(1)::after,
    & > div:nth-child(2)::after,
    & > div:nth-child(3)::after {
      content: "";
      position: absolute;
      bottom: -2rem;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: white;
      opacity: 0.06;
    }
  }
`;
