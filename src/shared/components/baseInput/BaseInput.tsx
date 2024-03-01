import React from "react";
import style from "@/shared/components/baseInput/style.module.css";

interface BaseInputProps extends React.ComponentPropsWithoutRef<"input"> {}

export default function BaseInput(props: BaseInputProps) {
  return <input className={style.input} {...props} />;
}
