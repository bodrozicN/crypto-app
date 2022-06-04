import React from "react";
import { CoinsTheadTr } from "../../../organisms";

type Props = {
  tHeadContent: string[];
};

const CoinsThead = ({ tHeadContent }: Props) => {
  return (
    <thead>
      <CoinsTheadTr tHeadContent={tHeadContent} />
    </thead>
  );
};

export default CoinsThead;
