import React from "react";
import { ExcangesDetails } from "../../../../types";
import { TableCell } from "../../../moleculs";
import { StyledExcangesBodyTr } from "./style";
import uniqid from "uniqid";
import { numberFormatter } from "../../../../helpers";

type Props = {
  excange: ExcangesDetails | undefined;
};

const ExcangesTbodyTr = ({ excange }: Props) => {
  const [currency, price] = numberFormatter(excange?.price, "5k-_VTxqtCEI");
  const [, btcPrice] = numberFormatter(excange?.btcPrice, "Qwsogvtv82FCd");
  const [, volume] = numberFormatter(excange?.["24hVolume"], "Qwsogvtv82FCd");

  return (
    <StyledExcangesBodyTr>
      <TableCell
        uuid={uniqid()}
        rank={
          excange && excange?.rank < 10 ? `0${excange?.rank}` : excange?.rank
        }
        src={excange?.iconUrl}
        alt={excange?.name}
      />
      <TableCell
        uuid={uniqid()}
        name={
          excange && excange?.name.length > 8
            ? excange?.name.slice(0, 8) + "..."
            : excange?.name
        }
      />
      <TableCell uuid={uniqid()} price={price} currnecy={currency} />
      <TableCell uuid={uniqid()} price={btcPrice} />
      <TableCell uuid={uniqid()} price={volume} currnecy={currency} />
      <TableCell uuid={uniqid()} symbol={excange?.recommended ? "Yes" : "No"} />
    </StyledExcangesBodyTr>
  );
};

export default ExcangesTbodyTr;
