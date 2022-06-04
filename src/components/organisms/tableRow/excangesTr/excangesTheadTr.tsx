import React from "react";
import { TableHeading } from "../../../atoms";
import uniqid from "uniqid";
import { StyledExcangesTr } from "./style";

type Props = {
  theadContent: string[];
};

const ExcangesTheadTr = ({ theadContent }: Props) => {
  return (
    <StyledExcangesTr>
      {theadContent.map((title) => (
        <TableHeading title={title} key={uniqid()} />
      ))}
    </StyledExcangesTr>
  );
};

export default ExcangesTheadTr;
