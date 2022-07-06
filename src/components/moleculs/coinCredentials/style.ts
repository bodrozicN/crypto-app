import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:nth-child(1) {
    margin-bottom: 4rem;
  }

  & > *:nth-child(3) {
    margin-bottom: 1rem;
  }

  @media (max-width: 560px) {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    & > *:nth-child(1) {
      margin-bottom: 0;
    }
    & > *:nth-child(3),
    & > *:nth-child(4) {
      display: none;
    }
  }
`;
