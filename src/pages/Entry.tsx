import { Outlet } from "react-router-dom";
import { Header } from "../components/organisms";

export default function EntryPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
