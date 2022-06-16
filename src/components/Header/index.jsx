import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ContainerHead } from "./style";

function Header({ ...props }) {
  const history = useHistory();

  const handleRedirect = (path) => {
    localStorage.clear();
    props.setAuthenticate(false);
    return history.push(path);
  };

  if (props.back !== undefined) {
    return (
      <ContainerHead>
        <div>
          <img src={logo} alt="logo"></img>
          <button onClick={() => handleRedirect("/login")}>Voltar</button>
        </div>
      </ContainerHead>
    );
  } else if (props.logout !== undefined) {
    return (
      <ContainerHead>
        <div>
          <img src={logo} alt="logo"></img>
          <button onClick={() => handleRedirect("/login")}>Sair</button>
        </div>
      </ContainerHead>
    );
  } else {
    return (
      <ContainerHead>
        <img src={logo} alt="logo"></img>
      </ContainerHead>
    );
  }
}

export default Header;
