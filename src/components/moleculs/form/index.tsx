import React from "react";
import { FormWrapper } from "./style";
import { Input } from "../../atoms";
import { CgSearch } from "react-icons/cg";

type Props = {
  query: string;
  handleChangeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({ handleChangeInputValue, query }: Props) => {
  return (
    <FormWrapper>
      <CgSearch className="searchIcon" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          placeholder="Search..."
          onChange={handleChangeInputValue}
          value={query}
          className="searchInput"
        />
      </form>
    </FormWrapper>
  );
};

export default Form;
