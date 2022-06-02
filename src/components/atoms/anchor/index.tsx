import React from "react";
import { StyledAnchor } from "./style";

type Props = {
  href: any;
  title: unknown;
};

const Anchor = ({ href, title }: Props) => {
  return href ? (
    <StyledAnchor href={href as string} target="_blank">
      {title as string}
    </StyledAnchor>
  ) : null;
};

export default Anchor;
