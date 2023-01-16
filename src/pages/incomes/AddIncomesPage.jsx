import React from 'react'
import axios from 'axios'
import { useForm } from '../../hooks/useForm'

const AddIncomesPage = () => {

  const {form, changed } = useForm({});

  const addIncome = async (e) => {
    e.preventDefault();
    const request = await axios.post(`http://127.0.0.1:8000/api/ingreso/agregar`,form);
  }

  return (
    <div>
      <h1>Registrar ingreso</h1>
      <div>
        <form onSubmit={addIncome}>
          <label>Fecha Ingreso</label>
          <input type="date" name='ingr_fecha' onChange={changed}/>
          <label>Ingresar centro de distribución</label>
          <input type="text" name='ingr_centro_dist' onChange={changed}/>
          <input type="submit" value="Registrar"/>
        </form>
      </div>
    </div>
  )
}

export default AddIncomesPage