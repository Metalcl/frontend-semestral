import { CenterOfDistributionContext } from "./CenterOfDistributionContext"

export const CenterOfDistributionProvider = ({children}) => {
  return (
    <CenterOfDistributionContext.Provider
        value={{}}
    >
        {children}
    </CenterOfDistributionContext.Provider>
  )
}
