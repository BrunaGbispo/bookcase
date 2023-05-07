import React from "react";
import "./bookcase.css";
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
import LastReviews from "../review/last reviews/LastReviews";

function BookCase(props) {
    return(
        <div id="bookcase">
            <h1 id="titleBookCase">Minha Estante</h1>
            <div id="top">
                <Book nota="5" capa={InstrumentosMortais} alt="capa do livro instrumentos mortais vol 6"/>
                <Book nota="5" capa={AGarotaDoLago} alt="capa do livro a garota do lago"/>
                <Book nota="4" capa={MunizSodre} alt="capa do livro Reinventando a educação"/>
                <Book nota="3" capa={PsicanaliseDeBoteco} alt="capa do livro Psicanalise de Boteco"/>
                <Book nota="5" capa={MulherRacaClasse} alt="capa do livro Mulher, Raça e Classe"/>
            </div>
            <div id="bottom">
                <Book nota="2" capa={HaeminSunim} alt="capa do livro As coisas que você só vê quando desacelera: Como manter a calma em um mundo frenético"/>
                <Book nota="4" capa={LeliaGonzales} alt="capa do livro por um feminismo afro-latino-americano"/>
                <Book nota="5" capa={OProgramadorApaixonado} alt="capa do livro O Programador Apaixonado"/>
                <Book nota="1" capa={PensarNago} alt="capa do livro Pensar Nagô"/>
                <Book nota="3" capa={ODiarioDeAnneFrank} alt="capa do livro O Diario de Anne Frank"/>
            </div>
            <div id="lastReviews">
                <LastReviews/>
            </div>
        </div>
    )
}
export default BookCase;