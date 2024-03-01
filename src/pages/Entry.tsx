import { Outlet } from "react-router-dom";
import Header from "@/shared/sections/header/Header";
import { Header as HeaderOld } from "@/components/organisms";

export default function EntryPage() {
  const showNewHeader = false;

  const HeaderComponent = showNewHeader ? Header : HeaderOld;

  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}
