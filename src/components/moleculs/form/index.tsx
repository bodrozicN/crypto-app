import React from "react";
import { FormWrapper } from "./style";
import { Input } from "../../atoms";
import { CgSearch } from "react-icons/cg";

const Form = () => {
  return (
    <FormWrapper>
      <CgSearch className="searchIcon" />
      <form>
        <Input placeholder="Search..." />
      </form>
    </FormWrapper>
  );
};

export default Form;
