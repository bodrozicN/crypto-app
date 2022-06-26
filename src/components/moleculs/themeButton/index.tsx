import React from "react";
import { Wrapper } from "./style";
import { BsFillSunFill } from "react-icons/bs";
import { IoIosMoon } from "react-icons/io";

type Props = {
  onClick: () => void;
};

const ThemeButton = ({ onClick }: Props) => {
  return (
    <Wrapper onClick={onClick}>
      <BsFillSunFill className="icon icon--sun" />
      <span />
      <IoIosMoon className="icon icon--moon" />
    </Wrapper>
  );
};

export default ThemeButton;
