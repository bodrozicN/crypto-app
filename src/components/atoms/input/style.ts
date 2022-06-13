import styled from "styled-components";

export const StyledInput = styled.input`
  font-family: lightFont;
  font-size: 1.4rem;
  color: var(--white);
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 300px;
  outline: none;
  padding-left: 3rem;
  background-color: rgba(255, 255, 255, 0.18);

  &::placeholder {
    font-family: lightFont;
    font-size: 1.4rem;
    color: var(--white);
  }
`;
