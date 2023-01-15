import React, { useContext } from 'react'
import { PharmaciesContext } from '../../context/PharmaciesContext'
import { Link } from 'react-router-dom'

const PharmaciesPage = () => {

  const { pharmacies, setPharmacies } = useContext(PharmaciesContext);

  return (
    <>

      <h1>Listado de farmacias</h1>

      <Link to="/farmacias/agregar">Registrar</Link>

      <table>

        <thead>

          <tr>

            <th>Nombre</th>
            <th>Direccion</th>
            <th>Email</th>
            <th>Creado</th>
            <th>Actualizado</th>

          </tr>

        </thead>

        {pharmacies.map((pharmacy, index) => {

          return (

            <tbody key={index}>

              <tr>

                <td>{pharmacy.farm_nombre}</td>
                <td>{pharmacy.farm_direccion}</td>
                <td>{pharmacy.farm_mail}</td>
                <td>{new Date(pharmacy.created_at).toLocaleDateString()}</td>
                <td>{new Date(pharmacy.updated_at).toLocaleDateString()}</td>

              </tr>

            </tbody>

          )

        })}

      </table>

    </>
  )
}

export default PharmaciesPage