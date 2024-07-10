import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer />
    </>
  );
}
