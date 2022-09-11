import React, { useContext, useEffect} from 'react'
import dataContext from '../data/dataContext'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../data/store'

export default function useContexto() {
 
const context = useContext(dataContext)


 function addNumber(){
    context.setState({
        ...context.state,
        number: context.state.number + 1
    })
}


const {number, text, setNumber, setText} = useContext(GlobalContext)


useEffect(() =>{
  if(number >= 8){
    setText('Caralho isso é sinistro')
  }
}, [setNumber, setText, number])

  return (
    <div>
      <h1>{context.state.text}</h1>  
      <p>{context.state.number}</p>
      <button onClick={() =>{addNumber()}}>plus</button>
          <hr/>
      <Link to='/'>Home</Link>
      <hr/>
      <h2>{number}</h2>
      <button onClick={() =>{setNumber(number +1)}}>add</button>
      <h3>{text}</h3>
    </div>
  )
}
