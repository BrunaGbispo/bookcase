import React from "react";
import "./StyleLR.css";
import InstrumentosMortais from "../../images/capa_instrumentos_mortais.jpg";
import AGarotaDoLago from "../../images/capa-a-garota-do-lago.jpg";
import ReviewCard from "../reviewCard/reviewCard";

function LastReviews() {
    return (
        <div className="lastReviews">
            <h1 id="titleLastReviews">Últimas Avaliações</h1>
            <div id="reviewCard">
                <ReviewCard capa={InstrumentosMortais} alt="capa do livro instrumentos mortais vol 6" titlereview="O melhor livro da saga!" review="Sem duvidas o melhor livro da saga!!! A historia te prende desde o primeiro capitulo e acaba com um final extremamente emocionante. Nota 100000" />
                <ReviewCard capa={AGarotaDoLago} alt="capa do livro a garota do lago" titlereview="Me tirou da ressaca literária!" review="QUE LIVRO INCRÍVEL! Havia meses que não conseguia engatar em uma leitura, mas este livro me pegou de tal maneira que terminei em 7 dias. História intrigante do inicio ao fim, muitas reviravoltas, tensão, romance, enfim... PERFEITO. Espero um dia encontrar outro livro a altura deste." />
            </div>
        </div>
    )
}
export default LastReviews;

