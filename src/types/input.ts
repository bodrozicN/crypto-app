import { FormProps } from "./form";

export type InputProps = Pick<FormProps, "value" | "onChange"> & {
  $type: "small" | "medium";
  placeholder: string;
  className?: string;
  type: string;
  disabled?: boolean;
};
