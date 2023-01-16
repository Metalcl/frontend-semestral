import React, {useState, useEffect} from "react"
import { PharmaciesContext } from "./PharmaciesContext"
import axios from "axios"

export const PharmaciesProvider = ({ children }) => {

  useEffect(() => {

    getPharmacies();

  }, []);

  const [pharmacies, setPharmacies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPharmacies = async() => {

    const request = await axios.get("http://127.0.0.1:8000/api/farmacias/all");

    setPharmacies(request.data.farmacias);

  }

  return (
    <PharmaciesContext.Provider
        value={{pharmacies, setPharmacies}}
    >
        {children}
    </PharmaciesContext.Provider>
  )
}
