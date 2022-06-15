import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ContainerHead } from "./style";

function Header({ ...props }) {
  const history = useHistory();

  const handleRedirect = (path) => {
    localStorage.clear();
    history.push(path);
  };

  if (props.back !== undefined) {
    return (
      <ContainerHead>
        <img src={logo} alt="logo"></img>
        <button onClick={() => handleRedirect("/login")}>Voltar</button>
      </ContainerHead>
    );
  } else if (props.logout !== undefined) {
    return (
      <ContainerHead>
        <img src={logo} alt="logo"></img>
        <button onClick={() => handleRedirect("/login")}>Sair</button>
      </ContainerHead>
    );
  } else {
    return (
        <img src={logo} alt="logo"></img>
    );
  }
}

export default Header;
