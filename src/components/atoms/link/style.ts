import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { TLink, OLink } from "./";

interface ILink {
  $type: TLink;
}

export const Wrapper = styled(Link)<ILink>`
  font-size: 1.4rem;
  text-decoration: none;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ $type }) =>
    $type === OLink.linkSecondary ? "lightFont" : "boldFont"};
  font-weight: 400;

  // home link styling
  ${({ $type, theme }) =>
    $type === OLink.linkPrimary &&
    css`
      color: #fff;
      background-color: ${theme.isDark ? "var(--pink)" : "var(--blue)"};
      border-radius: 300px;
    `}

  // other nav links styling
  ${({ $type, theme }) =>
    $type === OLink.linkSecondary &&
    css`
      color: ${theme.isDark ? "#fff" : "var(--grey-primary)"};
    `}

    @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
