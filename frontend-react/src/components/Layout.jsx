import { Outlet, useLocation } from "react-router-dom";
import FloatingBtn from "./floatingBtn/FloatingBtn";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  const Location = useLocation();
  return (
    <>
      <Navbar />

      <main className="App">
        <Outlet />
      </main>

      {Location.pathname.includes("movies") ? null : <FloatingBtn />}
    </>
  );
};

export default Layout;
