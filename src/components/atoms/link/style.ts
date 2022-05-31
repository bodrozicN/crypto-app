import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { TLink, OLink } from "./";

interface ILink {
  $type: TLink;
}

export const StyledLink = styled(Link)<ILink>`
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
      background-color: ${theme.isDark
        ? "#EF00B6"
        : "rgb(var(--blue-primary))"};
      border-radius: 300px;
    `}

  // other nav links styling
  ${({ $type, theme }) =>
    $type === OLink.linkSecondary &&
    css`
      color: ${theme.isDark ? "var(--white)" : "var(--grey-light-2)"};
    `}
`;
