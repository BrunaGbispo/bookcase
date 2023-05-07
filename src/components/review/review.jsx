import Reac from "react";
import "./review.css";
import Book from "../book/book";
import OProgramadorApaixonado from "../images/capa-o-progamador-apaixonado.jpg";
import BtnContagem from "../btnCount/BtnCount";
import BtnRead from "../btnCount/btnRead";

function Review (){
    return(
        <div className="container">
            <h1 className="title">Resenha</h1>
            <div className="reviewContent">
                <span id="bookSelected"><Book nota="" capa={OProgramadorApaixonado} alt=""/></span>
                <span id="tituloCard">
                    <h1 className="title">Muitos aprendizados!</h1>
                    <p id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste aut excepturi, itaque rerum nisi nemo corrupti, quos vel veniam non error quibusdam totam distinctio quas sequi qui culpa consequuntur obcaecati optio. Aut hic enim quae quos sed obcaecati maiores, iste modi, ipsum ea odit commodi a amet, magnam nostrum.</p>
                </span>
            </div>
            <div id="buttons">
                <BtnContagem/>
            </div>
        </div>

    )
}

export default Review;