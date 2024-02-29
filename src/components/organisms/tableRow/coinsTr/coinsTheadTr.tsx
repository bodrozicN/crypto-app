import { StyledCoinsHeadRow } from "./style";
import { TableHeading } from "../../../atoms";

type Props = {
  theadContent: string[];
};

const CoinsHeadRow = ({ theadContent }: Props) => {
  return (
    <StyledCoinsHeadRow>
      {theadContent.map((title, index) => (
        <TableHeading key={`${title}/${index}`} title={title} />
      ))}
    </StyledCoinsHeadRow>
  );
};

export default CoinsHeadRow;
