import { TableHeading } from "../../../atoms";
import { StyledPortfolioTr } from "./styled";

type Props = {
  theadContent: string[];
};

const PortfolioTheadTr = ({ theadContent }: Props) => {
  return (
    <StyledPortfolioTr>
      {theadContent.map((title, index) => (
        <TableHeading key={`${title}${index}`} title={title} />
      ))}
    </StyledPortfolioTr>
  );
};

export default PortfolioTheadTr;
