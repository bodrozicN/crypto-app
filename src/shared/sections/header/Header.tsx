import BaseLayout from "@/shared/layout/baseLayout/BaseLayout";
import BaseBackground from "@/shared/layout/baseBackground/BaseBackground";
import style from "@/shared/sections/header/style.module.css";
import { NavLink } from "react-router-dom";
import { routePaths } from "@/router/routePaths";
import BaseInput from "@/shared/components/baseInput/BaseInput";

export default function Header() {
  const homePath = routePaths.HOME();

  return (
    <BaseBackground>
      <BaseLayout>
        <div className={style.header}>
          <NavLink to={homePath} className={style.navLink}>
            <span className={`${style.link} ${style.link__bold}`}>Crypto</span>
            <span className={`${style.link} ${style.link__light}`}>App</span>
          </NavLink>
          <form className={style.form}>
            <BaseInput placeholder="Search..." type="text" />
          </form>
        </div>
      </BaseLayout>
    </BaseBackground>
  );
}
