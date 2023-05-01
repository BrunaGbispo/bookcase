import React from "react";
import HeaderStyle from "./header.css";
import FotoPerfil from "../images/foto_perfil.jpg"

function Header(props) {
    return(
        <header>
            <img id="profilePhoto" src={FotoPerfil} alt="foto de perfil do úsuario" />
            <h1>Bruna Bispo</h1>
            <span className="mystatistics">
                <h2>{props.qtdLida}</h2>
                <h3>lidos</h3>
            </span>
            <span className="mystatistics">
                <h2>{props.queroLer}</h2>
                <h3>vou ler</h3>
            </span>
        </header>
    )
}
export default Header;
