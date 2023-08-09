import React from "react";
import navStyle from "./Nav.module.css";
import logo from "../../source/logo.jpg";
import { useNavigate } from "react-router-dom";

export default function Nav(props) {
  const navigateTo = useNavigate();
  return (
    <nav className={navStyle.nav}>
      <img srcSet={logo} width={"40px"} />
      <ul className={navStyle.list}>
        <li onClick={() => navigateTo("/home")}>Inicio</li>
        <li onClick={() => navigateTo("/about")}>Quienes Somos</li>
        <li onClick={() => navigateTo("/prices")}>Precios</li>
        <li>Contratanos</li>
      </ul>
    </nav>
  );
}
