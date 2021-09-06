import React from "react"

const AppContext = React.createContext(null)

export function useAppContext(){
  return React.useContext(AppContext)
}

export function AppProvider({children}){
  return (
    <AppContext.Provider value = {}>
      {children}
    </AppContext.Provider>
  )
}