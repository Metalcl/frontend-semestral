import { ExpensesContext } from "./ExpensesContext"


export const ExpensesProvider = ({children}) => {
  return (
    <ExpensesContext.Provider value={{
        
    }}>
        {children}
    </ExpensesContext.Provider>
  )
}
