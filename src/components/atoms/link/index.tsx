import React from "react";
import { Wrapper } from "./style";

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
    <Wrapper $type={type} to={to}>
      {title}
    </Wrapper>
  );
};

export { Link, OLink };
