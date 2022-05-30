import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: rgb(var(--blue-primary));
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);
  & > div {
    position: relative;
    height: 6.8rem;
    margin: 0 auto;
    max-width: var(--screen-width-desktop);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
