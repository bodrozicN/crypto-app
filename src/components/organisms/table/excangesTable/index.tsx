import React from "react";
import { ExcangesDetails } from "../../../../types";
import { ExcangesThead, ExcangesTbody } from "../../../organisms";

type Props = {
  theadContent: string[];
  excanges: ExcangesDetails[] | undefined;
};

const ExcangesTable = ({ theadContent, excanges }: Props) => {
  return (
    <table>
      <ExcangesThead theadContent={theadContent} />
      <ExcangesTbody excanges={excanges} />
    </table>
  );
};

export default ExcangesTable;
