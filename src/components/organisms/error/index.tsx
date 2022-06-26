import React from "react";
import { Anchor, Heading } from "../../atoms";
import { Wrapper } from "./style";

type Props = {
  title: string;
  href: string;
  linkTitle: string;
};

const Error = ({ title, href, linkTitle }: Props) => {
  return (
    <Wrapper>
      <div>
        <Heading type="h4" title={title} $isBold />
        <div className="href-container">
          <Anchor href={href} title={linkTitle} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Error;
