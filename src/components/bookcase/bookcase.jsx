import React from "react";
import BookCaseStyle from "./bookcase.css";
import Book from "../book/book";
import InstrumentosMortais from "../images/capa_instrumentos_mortais.jpg";
import AGarotaDoLago from "../images/capa-a-garota-do-lago.jpg";
import PsicanaliseDeBoteco from "../images/capa_psicanalise_de_boteco.jpg";
import MulherRacaClasse from "../images/capa-angelas-davis.jpg";
import HaeminSunim from "../images/capa-haemin-sunim.jpg";
import LeliaGonzales from "../images/capa-lelia-gonzales.jpg";
import OProgramadorApaixonado from "../images/capa-o-progamador-apaixonado.jpg";
import ODiarioDeAnneFrank from "../images/capa_diario_anne_frank.jpg";
import PensarNago from  "../images/pensar_nago.jpg";
import MunizSodre from "../images/muniz_sodré.jpg";

function BookCase(props) {
    return(
        <div id="bookcase">
            <h1 id="titleBookCase">Minha Estante</h1>
            <div id="top">
                <Book capa={InstrumentosMortais} alt="capa do livro instrumentos mortais vol 6"/>
                <Book capa={AGarotaDoLago} alt="capa do livro a garota do lago"/>
                <Book capa={MunizSodre} alt="capa do livro Reinventando a educação"/>
                <Book capa={PsicanaliseDeBoteco} alt="capa do livro Psicanalise de Boteco"/>
                <Book capa={MulherRacaClasse} alt="capa do livro Mulher, Raça e Classe"/>
            </div>
            <div id="bottom">
                <Book capa={HaeminSunim} alt="capa do livro As coisas que você só vê quando desacelera: Como manter a calma em um mundo frenético"/>
                <Book capa={LeliaGonzales} alt="capa do livro por um feminismo afro-latino-americano"/>
                <Book capa={OProgramadorApaixonado} alt="capa do livro O Programador Apaixonado"/>
                <Book capa={PensarNago} alt="capa do livro Pensar Nagô"/>
                <Book capa={ODiarioDeAnneFrank} alt="capa do livro O Diario de Anne Frank"/>
            </div>
        </div>
    )
}
export default BookCase;