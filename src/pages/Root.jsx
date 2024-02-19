import AppFooter from "../components/AppFooter/AppFooter";
import AppNavbar from "../components/AppNavbar/AppNavbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
}

export default Root