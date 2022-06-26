import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 63rem;
    background-color: var(--grey-tertiary);
    padding: 0 3.2rem 6.4rem 3.2rem;
    border-radius: 7px;
    .heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 10.4rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }

  form {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
      text-align: center;
      font-size: 12rem;
      font-family: boldFont;
      background-color: transparent;
      border: none;
      color: #fff;
      opacity: 0.2;
      outline: none;
    }

    .price-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-bottom: 6.4rem;

      &:nth-child(2) {
        opacity: 0.6;
      }
    }

    .add-btn {
      width: 19.5rem;
      height: 5.2rem;
    }
  }
`;
