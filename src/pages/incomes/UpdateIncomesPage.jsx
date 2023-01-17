import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateIncomesPage = () => {

  useEffect(() => {
    getIncome();
  }, []);

  

  const [income, setIncome] = useState([]);
  const params = useParams();

  const getIncome = async () => {
    const request = await axios.get(`http://127.0.0.1:8000/api/ingreso/ver/${params.id}`);
    //console.log(request.data.ingreso)
    setIncome(request.data.ingreso);
  }

  const updateIncome = async (e) => {
    e.preventDefault();
    console.log(e.target)
    const request = await axios({
      method: 'put',
      url: `http://127.0.0.1:8000/api/ingreso/actualizar/${params.id}`,
      data: {
        nombre: e.target.nombre.value,
        compuesto: e.target.compuesto.value
      }
    });
    console.log(request.data);
  }

  return (
    <div>
      <h1>Actualizar Ingresos</h1>
      {income.map((income, index) => {
        return (
            <div key={index}>
              <form onSubmit={updateIncome}>
                <label>Centro de distribución</label>
                {/* cambiar por un select */}
                <input type="text" defaultValue={income.ingr_centro_dist} name="nombre" />
                <label>Fecha ingreso</label>
                <input type="date" defaultValue={income.ingr_fecha} name="compuesto" />
                <input type="submit" value="Actualizar" />
              </form>
            </div>
          )
        })}
    </div>
  )
}

export default UpdateIncomesPage