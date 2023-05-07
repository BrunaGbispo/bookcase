import React from "react";
import "./explorer.css";
import Book from "../book/book";
import AGarotaDoLago from "../images/capa-a-garota-do-lago.jpg";
import LeliaGonzales from "../images/capa-lelia-gonzales.jpg"
import MulherRacaClasse from "../images/capa-angelas-davis.jpg";
import HaeminSunim from "../images/capa-haemin-sunim.jpg";
import MicheleObama from "../images/michlleObama.jpg"
import ODiarioDeAnneFrank from "../images/capa_diario_anne_frank.jpg";
import HarryPotter from "../images/hp1.jpg"
import EvelynHugo from "../images/evelyn-hugo.jpg"
import BibliotecaMeiaNoite from "../images/biblioteca-meia-noite.jpg"
import EhAssimQueComeca from "../images/eh-assim-que-comeca.jpg"
import IncendeiaMe from "../images/incendeia-me.jpg"
import InstrumentosMortais from "../images/capa_instrumentos_mortais.jpg"
import Emchamas from "../images/emChamas.jpg"
import TheWhicher from "../images/theWhicher.jpg"


function Explorer(props) {
    return(
        <div id="explorerContainer">
            <input type="text" placeholder="Buscar livro"/>

            <h2 className="subtitle">Os Favoritos da galera</h2>
            <div className="top">
                <Book capa={HarryPotter} alt="capa do livro instrumentos mortais vol 6"/>
                <Book nota="5" capa={AGarotaDoLago} alt="capa do livro a garota do lago"/>
                <Book capa={EvelynHugo} alt="capa do livro Reinventando a educação"/>
                <Book capa={BibliotecaMeiaNoite} alt="capa do livro Psicanalise de Boteco"/>
                <Book capa={EhAssimQueComeca} alt="capa do livro Mulher, Raça e Classe"/>
            </div>

            <h2 className="subtitle">Top ficções</h2>
            <div className="middle">
                <Book capa={IncendeiaMe} alt="capa do livro As coisas que você só vê quando desacelera: Como manter a calma em um mundo frenético"/>
                <Book nota="5" capa={InstrumentosMortais} alt="capa do livro por um feminismo afro-latino-americano"/>
                <Book capa={HarryPotter} alt="capa do livro O Programador Apaixonado"/>
                <Book capa={Emchamas} alt="capa do livro Pensar Nagô"/>
                <Book capa={TheWhicher} alt="capa do livro O Diario de Anne Frank"/>
            </div>

            <h2 className="subtitle">Top Biografias</h2>
            <div className="bottom">
                <Book capa={HaeminSunim} alt="capa do livro As coisas que você só vê quando desacelera: Como manter a calma em um mundo frenético"/>
                <Book capa={MulherRacaClasse} alt="capa do livro por um feminismo afro-latino-americano"/>
                <Book capa={LeliaGonzales} alt="capa do livro O Programador Apaixonado"/>
                <Book capa={MicheleObama} alt="capa do livro Pensar Nagô"/>
                <Book capa={ODiarioDeAnneFrank} alt="capa do livro O Diario de Anne Frank"/>
            </div>
        </div>
    )
}
export default Explorer;