import React from "react";
import { Link } from 'react-router-dom'
import "./sidebar.css";

export const Sidebar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Minha Estante</Link></li>
                <li><Link to="/explorer">Explorar</Link></li>
                <li><Link to="/wishes">Desejados</Link></li>
                <li><Link to="/review">Resenhas</Link></li>
                <li><Link to="/myProfile">Meu Perfil</Link></li>
            </ul>
        </nav>
    )
}