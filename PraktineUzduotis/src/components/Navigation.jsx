import Header from "../assets/img/Header.png";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className="nav_container flex justify-between items-center bg-slate-200">
        <div>
          <img src={Header} className="nav_Image pl-5" alt="" />
        </div>
        <ul className="flex gap-3 pr-5 font">
        <Link to="/" className="font-bold">Pagrindinis</Link>
      <Link to="/register" className="font-bold">Registracija</Link>
      <Link to="/donors" className="font-bold">Donorų sąrašas</Link>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
