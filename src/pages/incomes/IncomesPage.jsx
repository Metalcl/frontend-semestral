import React from 'react'
import { IncomesContext } from '../../context/IncomesContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const IncomesPage = () => {

  const { incomes, setIncomes } = useContext(IncomesContext);

  const deleteIncome = async (id) => {
    const request = await axios.delete(`http://127.0.0.1:8000/api/ingreso/eliminar/${id}`);
    location.reload();
  }



  return (
    <>
      <h1>Listado de ingresos</h1>
      <Link to="/ingresos/agregar">Nuevo ingreso</Link>
      <table>
        <thead>
          <tr>
            <th>Centro de distribución</th>
            <th>Fecha ingreso</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {incomes.map((income, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{income.ingr_centro_dist}</td>
                <td>{new Date(income.ingr_fecha).toLocaleDateString()}</td>
                <td>{new Date(income.created_at).toLocaleDateString()}</td>
                <td>{new Date(income.updated_at).toLocaleDateString()}</td>
                <td>
                  <button><Link to={`/ingresos/actualizar/${income.ingr_centro_dist}`}>Editar</Link></button>
                  <button
                    onClick={() => deleteIncome(income.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </>
  )
}

export default IncomesPage