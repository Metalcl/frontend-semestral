import { PharmaciesContext } from "./PharmaciesContext"

export const PharmaciesProvider = ({ children }) => {
  return (
    <PharmaciesContext.Provider
        value={{}}
    >
        {children}
    </PharmaciesContext.Provider>
  )
}
