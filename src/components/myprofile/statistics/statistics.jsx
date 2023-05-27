import React from "react";
import Book from "../../book/book";
import Livro4 from "../../images/jogos-vorazes.jpg";
import Profile from "../profile/profile";

export default function Statistics(){
    return(
        <div>
            <Profile/>
            <Book capa={Livro4} nota="4" alt="livro"/>
        </div>
    )
}