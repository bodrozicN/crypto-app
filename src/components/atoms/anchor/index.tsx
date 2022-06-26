import React from "react";
import { Wrapper } from "./style";

type Props = {
  href: any;
  title: unknown;
};

const Anchor = ({ href, title }: Props) => {
  return href ? (
    <Wrapper href={href as string} target="_blank">
      {title as string}
    </Wrapper>
  ) : null;
};

export default Anchor;
