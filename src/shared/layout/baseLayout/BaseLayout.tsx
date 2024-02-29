import { ReactNode } from "react";
import style from "@/shared/layout/baseLayout/style.module.css";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return <div className={style.layout}>{children}</div>;
}
