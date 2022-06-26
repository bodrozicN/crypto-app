import styled from "styled-components";

export const Wrapper = styled.li`
  width: 20rem;
  height: 5rem;
  list-style: none;
  & > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    overflow: hidden;
    padding: 1rem;
  }
`;
