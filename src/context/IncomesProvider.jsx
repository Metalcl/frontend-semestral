import { IncomesContext } from "./IncomesContext"


export const IncomesProvider = ({children}) => {
  return (
    <IncomesContext.Provider value={{
        
    }}
    >
        {children}
    </IncomesContext.Provider>
  )
}
