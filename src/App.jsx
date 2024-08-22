import React from 'react'
import Movies from './Movies'
import { DarkModeProvider } from './DarkModeProvider'



const App = () => {

  return (
      <DarkModeProvider className="whole">
      < Movies />
      </DarkModeProvider>
  
  )
}

export default App