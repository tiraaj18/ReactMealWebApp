import React, { useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

  useEffect(() => {
    console.log('fetch data here')
  }, [])
  
 return <AppContext.Provider value='Hey'>
  {children}
 </AppContext.Provider> 
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { useGlobalContext, AppProvider }