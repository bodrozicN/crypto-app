import { Outlet } from "react-router-dom";
import Header from "@/shared/sections/header/Header";

export default function EntryPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
