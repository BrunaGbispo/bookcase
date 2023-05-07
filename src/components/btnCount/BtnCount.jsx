import React, { useContext, useState } from "react";
import { CountContext } from "../../context/CountContext";


function BtnContagem(){
    const { contagemLidos, setContagem } = useContext(CountContext)
    const [leitura, setLeitura] = useState ("Marcar como lido")
    function handleClick(){
            setContagem(contagemLidos + 1);
            setLeitura("Lido")
    }
    return(
        <div>
            <button onClick={handleClick}>{leitura}</button>
        </div>
    );
}
export default BtnContagem;