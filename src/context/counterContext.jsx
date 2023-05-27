import React from "react";

const CounterContext = React.createContext({
    contagem:0,
    setContagem: () => {} 
});


export default CounterContext;