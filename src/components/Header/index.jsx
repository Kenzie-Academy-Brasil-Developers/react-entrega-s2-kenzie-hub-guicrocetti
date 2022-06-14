import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../Img/logo.svg";
import { ContainerHead } from "./style";

function Header({ ...props }) {
  const history = useHistory();

  const handleRedirect = ( path, e ) => {
    console.log(e)
    history.push(path)
  }

  if (props.back !== undefined) {
    return (
      <ContainerHead className="button">
        <img src={logo} alt="logo"></img>
        <button onClick={(e) => handleRedirect('/login')}>Voltar</button>
      </ContainerHead>
    );
  } else if (props.logout !== undefined) {
    return (
      <ContainerHead className="button">
        <img src={logo} alt="logo"></img>
        <button onClick={(e) => handleRedirect('/login')}>Sair</button>
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
