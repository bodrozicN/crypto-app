import React from "react";
import { StyledLink } from "./style";

const OLink = {
  linkPrimary: "linkPrimary",
  linkSecondary: "linkSecondary",
} as const;

export type TLink = typeof OLink[keyof typeof OLink];

type Props = {
  to: string;
  title: string;
  type: TLink;
};

const Link = ({ title, to, type }: Props) => {
  return (
    <StyledLink $type={type} to={to}>
      {title}
    </StyledLink>
  );
};

export { Link, OLink };
