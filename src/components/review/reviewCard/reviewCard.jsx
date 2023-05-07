import React from "react";
import "./reviewCard.css";
import Book from "../../book/book";

function ReviewCard (props){
    return(
        <div id="reviewContainer">
            <Book id="capaReview" nota="5" capa={props.capa} alt={props.alt}/>
            <div id="review">
                <h1 id="title">{props.titlereview}</h1>
                <p id="contentReview">{props.review}</p>
            </div>
        </div>
    )
}

export default ReviewCard;