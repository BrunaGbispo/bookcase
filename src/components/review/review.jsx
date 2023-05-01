import React from "react";
import  ReviewStyle from "./review.css";
import Book from "../book/book";

function Review (props){
    return(
        <div id="reviewContainer">
            <Book capa={props.capa} alt={props.alt}/>
            <div id="review">
                <h1 id="title">{props.titlereview}</h1>
                <p>{props.review}</p>
            </div>
        </div>
    )
}

export default Review;