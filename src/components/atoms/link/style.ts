import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { OFontWeight } from "../../../types";
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

  // home link styling
  ${({ $type }) =>
    $type === OLink.linkPrimary &&
    css`
      color: ${({ theme }) =>
        theme.isDark ? "rgb(var(--blue-primary))" : "var(--white)"};
      font-weight: ${OFontWeight.bold};
      background-color: ${({ theme }) =>
        theme.isDark ? "var(--white)" : "rgb(var(--blue-primary))"};
      border-radius: 300px;
    `}

  // other nav links styling
  ${({ $type }) =>
    $type === OLink.linkSecondary &&
    css`
      color: ${({ theme }) =>
        theme.isDark ? "var(--white)" : "var(--grey-light-2)"};
      font-weight: ${OFontWeight.light};
    `}
`;
