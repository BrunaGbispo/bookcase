import Reac from "react";
import "../profile/profile.css";

export default function Profile (){
    return(
        <div className="container">
            <h1 className="titleProfile">Meu Perfil</h1>
            <section  id="sectionProfile">
                <nav id="navProfile">
                    <button>Editar perfil</button>
                    <button>Estatisticas</button>
                    <button>Notificações</button>
                    <button>Configurações</button>
                </nav>
                
            </section>

        </div>

    )
}
