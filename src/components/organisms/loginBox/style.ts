import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 200;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    background-color: var(--grey-tertiary);
    padding: 2.4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.6rem;
    border-radius: 7px;
    width: 30rem;
  }

  .switch-wrapper {
    & > * {
      cursor: pointer;
    }
  }
`;
