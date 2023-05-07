import React, { useContext, useState } from "react";
import { CountContext } from "../../context/CountContext";

export default function BtnRead (){
    const {contagemLer, setLer} = useContext(CountContext)
    const [desejados, setDesejados] = useState("Quero ler")

    function handleClickRead() {
        setLer(contagemLer +1)
        setDesejados("Adicionado aos seus desejados!")
    }
    return(
        <div>
            <button onClick={handleClickRead}>{desejados}</button>
        </div>
    )
}