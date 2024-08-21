import React, {createContext, useState } from 'react'


const darkModeContext = createContext()

const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
   
  return (
    <div>
        <darkModeContext.Provider value= {{darkMode, toggleDarkMode}}>
            {children}
        </darkModeContext.Provider>
    </div>
  )
}

export {darkModeContext, DarkModeProvider}





// const darkModeContext = createContext()

// const DarkModeProvider = ({children}) => {

//     const [darkMode, setDarkMode] = useState(false)
//     const toggleDarkMode = () => {
//         setDarkMode(!darkMode)
//     }
//   return (
//     <div>
//         <darkModeContext.Provider  value={{darkMode, toggleDarkMode}}>
//             {children}
//         </darkModeContext.Provider>
//     </div>
//   )
// }

// export {darkModeContext, DarkModeProvider}