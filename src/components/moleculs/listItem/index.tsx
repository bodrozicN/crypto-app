import React from "react";
import { StyledListItem } from "./style";
import { SearchList } from "../../../types";
import { Img, Paragraph } from "../../atoms";
import { Link } from "react-router-dom";

const ListItem = ({ iconUrl, name, uuid }: SearchList) => {
  console.log(uuid);
  return (
    <StyledListItem>
      <Link to={`coin/${uuid}`}>
        <Img type="tableImg" src={iconUrl} alt={name} />
        <Paragraph
          type="bold"
          title={name.length > 12 ? name.slice(0, 12) + "..." : name}
        />
      </Link>
    </StyledListItem>
  );
};

export default ListItem;
