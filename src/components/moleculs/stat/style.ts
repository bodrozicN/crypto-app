import styled from "styled-components";

export const StyledStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  & > span > span:nth-child(2) {
    margin-left: 2px;
  }
`;