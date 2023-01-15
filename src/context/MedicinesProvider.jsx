import { MedicinesContext } from "./MedicinesContext"

export const MedicinesProvider = ({children}) => {
  return (
    <MedicinesContext.Provider
        value={{}}
    >
        {children}
    </MedicinesContext.Provider>
  )
}
