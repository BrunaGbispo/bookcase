import React from "react";
import "./mywishes.css";
import Book from "../book/book";
import PsicanaliseDeBoteco from "../images/capa_psicanalise_de_boteco.jpg";
import MulherRacaClasse from "../images/capa-angelas-davis.jpg";
import ODiarioDeAnneFrank from "../images/capa_diario_anne_frank.jpg";
import LeliaGonzales from "../images/capa-lelia-gonzales.jpg"
import HaeminSunim from "../images/capa-haemin-sunim.jpg";
import MicheleObama from "../images/michlleObama.jpg"
import HarryPotter from "../images/hp1.jpg"
import EvelynHugo from "../images/evelyn-hugo.jpg"
import BibliotecaMeiaNoite from "../images/biblioteca-meia-noite.jpg"
import IncendeiaMe from "../images/incendeia-me.jpg"
import Emchamas from "../images/emChamas.jpg"
import TheWhicher from "../images/theWhicher.jpg"
import BruxaAkata from "../images/bruxa-akata.jpg"


function Desejados(props) {
    return(
        <div id="bookcase">
            <h1 id="titleWishes">Desejados</h1>

            <div className="top">
                <Book capa={LeliaGonzales} alt="capa do livro instrumentos mortais vol 6"/>
                <Book capa={HarryPotter} alt="capa do livro a garota do lago"/>
                <Book capa={BruxaAkata} alt="capa do livro Reinventando a educação"/>
                <Book capa={PsicanaliseDeBoteco} alt="capa do livro Psicanalise de Boteco"/>
                <Book capa={MulherRacaClasse} alt="capa do livro Mulher, Raça e Classe"/>
            </div>

            <div className="middle">
                <Book capa={HaeminSunim} alt="capa do livro As coisas que você só vê quando desacelera: Como manter a calma em um mundo frenético"/>
                <Book capa={MicheleObama} alt="capa do livro por um feminismo afro-latino-americano"/>
                <Book capa={Emchamas} alt="capa do livro O Programador Apaixonado"/>
                <Book capa={TheWhicher} alt="capa do livro Pensar Nagô"/>
                <Book capa={ODiarioDeAnneFrank} alt="capa do livro O Diario de Anne Frank"/>
            </div>

            <div className="bottom">
                <Book capa={ODiarioDeAnneFrank} alt="capa do livro As coisas que você só vê quando desacelera: Como manter a calma em um mundo frenético"/>
                <Book capa={IncendeiaMe} alt="capa do livro por um feminismo afro-latino-americano"/>
                <Book capa={BruxaAkata} alt="capa do livro O Programador Apaixonado"/>
                <Book capa={EvelynHugo} alt="capa do livro Pensar Nagô"/>
                <Book capa={BibliotecaMeiaNoite} alt="capa do livro O Diario de Anne Frank"/>
            </div>
        </div>
    )
}
export default Desejados;