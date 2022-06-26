import styled from "styled-components";

interface IInput {
  $type: "small" | "medium";
}

export const Wrapper = styled.input<IInput>`
  width: 100%;
  height: ${({ $type }) => ($type === "small" ? "3.8rem" : "5.2rem")};
  border-radius: 400px;
  outline: none;
  border: none;
  font-family: lightFont;
  font-size: 1.4rem;
  background-color: rgba(255, 255, 255, 0.18);
  padding-left: 3.5rem;

  &,
  &::placeholder {
    color: #fff;
  }
`;
