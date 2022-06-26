import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 7rem;
  height: 4rem;
  border-radius: 600px;
  background-color: #fff;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .icon {
    font-size: 1.3rem;
    z-index: 2;
    transition: color 1s;
  }

  .icon--sun {
    color: ${({ theme }) => (theme.isDark ? "#DF1C9D" : "#fff")};
  }
  .icon--moon {
    color: ${({ theme }) => (theme.isDark ? "#fff" : "#DF1C9D")};
  }

  span {
    position: absolute;
    content: "";
    height: 3.5rem;
    width: 3.5rem;
    background-color: #df1c9d;
    border-radius: 50%;
    transition: transform 0.4s;
    transform: ${({ theme }) =>
      theme.isDark ? "translateX(42%)" : "translateX(-45%)"};
  }
`;
