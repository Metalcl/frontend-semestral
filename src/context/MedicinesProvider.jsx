import React, {useState, useEffect} from "react"
import { MedicinesContext } from "./MedicinesContext"
import axios from "axios"

export const MedicinesProvider = ({children}) => {

  useEffect(() => {

    getMedicines();

  }, []);

  const [medicines, setMedicines] = useState([]);

  const getMedicines = async() => {

    const request = await axios.get(`http://127.0.0.1:8000/api/medicamentos/all`);

    setMedicines(request.data.medicamentos);

  }

  return (
    <MedicinesContext.Provider
        value={{medicines, setMedicines}}
    >
        {children}
    </MedicinesContext.Provider>
  )
}
