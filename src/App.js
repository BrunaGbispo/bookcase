import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import BookCase from './components/bookcase/bookcase';
import Review from './components/review/review';
import InstrumentosMortais from "../src/components/images/capa_instrumentos_mortais.jpg";
import AGarotaDoLago from "../src/components/images/capa-a-garota-do-lago.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header qtdLida="130" queroLer="60"/>
      </header>
      <hr/>
      <main>
        <Sidebar/>
        <BookCase/>
      </main>
      <section id="lastReviews">
        <h1 id="titleLastReviews">Últimas Avaliações</h1>
        <div id="reviewCard">
          <Review  capa={InstrumentosMortais} alt="capa do livro instrumentos mortais vol 6" titlereview="O melhor livro da saga!" review="Sem duvidas o melhor livro da saga!!! A historia te prende desde o primeiro capitulo e acaba com um final extremamente emocionante. Nota 100000"/>
          <Review  capa={AGarotaDoLago} alt="capa do livro a garota do lago" titlereview="Me tirou da ressaca literária!" review="QUE LIVRO INCRÍVEL! Havia meses que não conseguia engatar em uma leitura, mas este livro me pegou de tal maneira que terminei em 7 dias. História intrigante do inicio ao fim, muitas reviravoltas, tensão, romance, enfim... PERFEITO. Espero um dia encontrar outro livro a altura deste."/>
        </div>
      </section>

    </div>
  );
}

export default App;
