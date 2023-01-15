import { TransfersContext } from "./TransfersContext"


export const TransfersProvider = ({children}) => {
  return (
    <TransfersContext.Provider value={{
        
    }}>
        {children}
    </TransfersContext.Provider>
  )
}
