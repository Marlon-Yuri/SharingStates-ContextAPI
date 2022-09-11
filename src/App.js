import React, { useState } from 'react'
import { DataContext, data } from './data/dataContext';
import Rotas from './routes';
import Store from './data/store'


export default function App() {

  const [state, setState] = useState(data)

  return (
    <Store>
      <DataContext.Provider value={{state, setState}}>
      <Rotas />
      </DataContext.Provider>
    </Store>
    
  )
}
