import { MedicinesContext } from "./MedicinesContext"

export const MedicinesContextProvider = ({children}) => {
  return (
    <MedicinesContext.Provider
        value={{}}
    >
        {children}
    </MedicinesContext.Provider>
  )
}
