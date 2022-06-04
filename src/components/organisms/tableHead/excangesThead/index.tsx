import React from "react";
import { ExcangesTheadTr } from "../../../organisms";

type Props = {
  theadContent: string[];
};

const ExcangesThead = ({ theadContent }: Props) => {
  return (
    <thead>
      <ExcangesTheadTr theadContent={theadContent} />
    </thead>
  );
};

export default ExcangesThead;
