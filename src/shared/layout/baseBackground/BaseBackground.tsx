import { ReactNode } from "react";
import style from "@/shared/layout/baseBackground/style.module.css";

export default function BaseBackground({ children }: { children: ReactNode }) {
  return <div className={style.background}>{children}</div>;
}
