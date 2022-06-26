import React from "react";
import { Heading } from "../../atoms";
import { Wrapper } from "./style";

type Props = {
  content: unknown;
};

const MessageContainer = ({ content }: Props) => {
  return (
    <Wrapper>
      <div>
        <Heading type="h4" $isBold title={content} />
      </div>
    </Wrapper>
  );
};

export default MessageContainer;
