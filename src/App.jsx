import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
