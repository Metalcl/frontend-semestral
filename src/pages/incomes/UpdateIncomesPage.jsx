import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const UpdateIncomesPage = () => {

  const [incomes, setIncomes] = useState([]);
  const params = useParams();

  useEffect(() => {
    getIncome();
  }, []);

  

  const getIncome = async () => {
    const request = await axios.get(`http://127.0.0.1:8000/api/ingresos/ver/${params.id}`);
    setPharmacy(request.data.farmacias);
  }


  return (
    <div>
      <h1>Actualizar Ingresos</h1>

    </div>
  )
}

export default UpdateIncomesPage