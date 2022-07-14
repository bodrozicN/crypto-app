import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;

  .popup {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0%;
    left: 0%;
    background-color: orangered;
  }

  font-family: boldFont;

  font-size: 2rem;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;

    li {
      list-style: none;
      cursor: pointer;
    }
  }
  .user-uuid-container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;
