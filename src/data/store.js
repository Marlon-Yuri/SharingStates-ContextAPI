import React, { useState } from "react";

const globalStates = {
    number: 5,
    text:'Estudando Context API, bora bora'
}

export const GlobalContext = React.createContext(globalStates)

const Store = ({children}) =>{
  
    const [state, setState] = useState(globalStates)

    function updateState(key, newValue){
        setState({...state, [key]: newValue})
    }

    return(
        <GlobalContext.Provider value= {{
            number: state.number,
            text: state.text,
            setNumber: coisa => updateState('number', coisa),
            setText: coisa => updateState('text', coisa)
        }}>
        {children}
        </GlobalContext.Provider>
    )
}
export default Store