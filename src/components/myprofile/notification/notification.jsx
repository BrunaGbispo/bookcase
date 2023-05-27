import React from "react";
import Book from "../../book/book";
import Livro2 from "../../images/capa-kaká-werá.jpg";
import Profile from "../profile/profile";

export default function Notifications(){
    return(
        <div className="navProfrofileContainer">
            <div className="NavProfileInside"><Profile/></div>
            <div><Book capa={Livro2} nota="5" alt="livro"/></div>
        </div>
    )
}