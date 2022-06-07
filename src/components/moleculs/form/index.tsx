import React from "react";
import { FormWrapper } from "./style";
import { Input } from "../../atoms";
import { CgSearch } from "react-icons/cg";
import { FormProps } from "../../../types";

type Props = FormProps & {
  placeHolder: string;
};

const Form = (props: Props) => {
  const { onChange, value, onSubmit, placeHolder } = props;
  return (
    <FormWrapper>
      <CgSearch className="searchIcon" />
      <form onSubmit={onSubmit}>
        <Input
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
          className="searchInput"
        />
      </form>
    </FormWrapper>
  );
};

export default React.memo(Form);
