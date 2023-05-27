import React from "react";
import Book from "../../book/book";
import Livro1 from "../../images/bruxa-akata.jpg";
import Profile from "../profile/profile";

export default function EditProfile(){
    return(
        <div>
            <Profile/>
            <Book capa={Livro1} nota="4" alt="livro"/>
        </div>
    )
}