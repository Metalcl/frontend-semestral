import { CenterOfDistributionContext } from "./CenterOfDistributionContext"
import axios from "axios"
import { useEffect, useState } from "react"

export const CenterOfDistributionProvider = ({children}) => {

  useEffect(() => {
    getCenterOfDistribution();
  
  }, []);
  

  const [centerOfDistribution, setCenterOfDistribution] = useState([]);

  const getCenterOfDistribution = async() => {
    const request = await axios.get("http://127.0.0.1:8000/api/centros_distribucion/all");
    setCenterOfDistribution(request.data.centros_distribucion);
  }

  return (
    <CenterOfDistributionContext.Provider value={{
      centerOfDistribution, setCenterOfDistribution
    }}
    >
        {children}
    </CenterOfDistributionContext.Provider>
  )
}
