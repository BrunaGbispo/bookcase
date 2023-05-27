import React from "react";
import Book from "../../book/book";
import Livro3 from "../../images/capa-o-progamador-apaixonado.jpg";
import Profile from "../profile/profile";

export default function Settings(){
    return(
        <div>
            <Profile/>
            <Book capa={Livro3} nota="4" alt="livro"/>
        </div>
    )
}