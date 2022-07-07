import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;

  & > div {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 10px solid transparent;
    border-top-color: var(--pink);
    border-radius: 50%;
    animation: spinnerOne 1.2s linear infinite;
  }

  & > div:nth-child(2) {
    border: 10px solid transparent;
    border-bottom-color: var(--pink);
  }

  @keyframes spinnerOne {
    0% {
      transform: rotate(0deg);
      border-width: 10px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 1px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 10px;
    }
  }
`;
