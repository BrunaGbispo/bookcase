import React from "react";
import "./book.css";
import { TiStar, TiStarOutline } from "react-icons/ti";

function Book (props){
    return(
        <div id="bookContent">
            <div><img  className="capaLivro"src={props.capa} alt={props.alt}/></div>
            <span id="rating">
            {props.nota > 0 ? <TiStar />:<TiStarOutline />}
            {props.nota > 1 ? <TiStar />:<TiStarOutline />}
            {props.nota > 2 ? <TiStar />:<TiStarOutline />}
            {props.nota > 3 ? <TiStar />:<TiStarOutline />}
            {props.nota > 4 ? <TiStar />:<TiStarOutline />}
            </span>
        </div>
    )
}

export default Book;