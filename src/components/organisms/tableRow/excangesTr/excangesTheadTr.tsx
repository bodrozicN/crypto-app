import { TableHeading } from "../../../atoms";
import { StyledExcangesTr } from "./style";

type Props = {
  theadContent: string[];
};

const ExcangesTheadTr = ({ theadContent }: Props) => {
  return (
    <StyledExcangesTr>
      {theadContent.map((title, index) => (
        <TableHeading title={title} key={`${title}${index}`} />
      ))}
    </StyledExcangesTr>
  );
};

export default ExcangesTheadTr;
