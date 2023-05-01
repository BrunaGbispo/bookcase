import React from "react";
import BookStyle from "./book.css";
import { AiFillStar } from "react-icons/ai";

function Book (props){
    return(
        <div id="bookContent">
            <div><img  className="capaLivro"src={props.capa} alt={props.alt}/></div>
            <span id="rating">
                <AiFillStar className="star"/>
                <AiFillStar className="star"/>
                <AiFillStar className="star"/>
                <AiFillStar className="star"/>
                <AiFillStar className="star"/>
            </span>
        </div>
    )
}

export default Book;
