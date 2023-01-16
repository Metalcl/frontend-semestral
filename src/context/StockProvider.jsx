import { StockContext } from "./StockContext"


export const StockContext = ({children}) => {
  return (
    <StockContext.Provider value={{
        
    }}>
        {children}
    </StockContext.Provider>
  )
}
