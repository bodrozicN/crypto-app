import styled, { css } from "styled-components";

interface IStyledFormWrapper {
  $type: "small" | "large";
}

export const FormWrapper = styled.div<IStyledFormWrapper>`
  position: relative;

  height: ${({ $type }) => ($type === "large" ? "5.2rem" : "3.8rem")};

  form {
    height: 100%;
  }

  .searchIcon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #fff;
    font-size: 1.4rem;
  }
`;
