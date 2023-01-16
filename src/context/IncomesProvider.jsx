import { IncomesContext } from "./IncomesContext"
import axios from "axios"
import { useEffect, useState } from "react"

export const IncomesProvider = ({children}) => {

  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    getIncomes();
  }, []);

  const getIncomes = async () => {
    const request = await axios.get('http://127.0.0.1:8000/api/ingreso/all');
    setIncomes(request.data.ingresos);
  }

  return (
    <IncomesContext.Provider value={{
      incomes,
      setIncomes
    }}
    >
        {children}
    </IncomesContext.Provider>
  )
}
