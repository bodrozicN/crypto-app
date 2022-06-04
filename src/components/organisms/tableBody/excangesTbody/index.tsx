import React from "react";
import { ExcangesDetails } from "../../../../types";
import { ExcangesTbodyTr } from "../../../organisms";
import uniqid from "uniqid";

type Props = {
  excanges: ExcangesDetails[] | undefined;
};

const ExcangesTbody = ({ excanges }: Props) => {
  return (
    <tbody>
      {excanges?.map((excange) => (
        <ExcangesTbodyTr excange={excange} key={uniqid()} />
      ))}
    </tbody>
  );
};

export default ExcangesTbody;
