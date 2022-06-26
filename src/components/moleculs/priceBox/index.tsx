import React from "react";
import { Span, Paragraph } from "../../atoms";
import { Wrapper } from "./style";

type Props = {
  price: string;
  date: string;
  title: string;
};

const PriceBox = ({ date, price, title }: Props) => {
  return (
    <Wrapper>
      <Span type="heroPrimary" content={title} $switchColor />
      <div>
        <Paragraph type="priceParagraph" title={price} />
        <Span type="heroSecondary" content={date} $switchColor />
      </div>
    </Wrapper>
  );
};

export default PriceBox;
