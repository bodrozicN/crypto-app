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
`;
