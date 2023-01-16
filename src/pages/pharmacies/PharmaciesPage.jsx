import React, { useContext } from 'react'
import { PharmaciesContext } from '../../context/PharmaciesContext'
import { Link } from 'react-router-dom'
import axios from 'axios';

const PharmaciesPage = () => {

  const { pharmacies, setPharmacies } = useContext(PharmaciesContext);

  const deletePharmacy = async (id) => {

    const request = await axios.delete(`http://127.0.0.1:8000/api/farmacias/eliminar/${id}`);

    console.log(request);

  }

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
            <th>Acciones</th>

          </tr>

        </thead>

        {pharmacies.length === 0 &&

        <tbody>
          
          <tr>
                  
            <td colSpan={6}>No hay farmacias registradas</td>
          
          </tr>
        
        </tbody>}

        {pharmacies.map((pharmacy, index) => {

          return (

            <tbody key={index}>

              <tr>

                <td>{pharmacy.farm_nombre}</td>
                <td>{pharmacy.farm_direccion}</td>
                <td>{pharmacy.farm_mail}</td>
                <td>{new Date(pharmacy.created_at).toLocaleDateString()}</td>
                <td>{new Date(pharmacy.updated_at).toLocaleDateString()}</td>
                <td>

                  <button><Link to={`/farmacias/actualizar/${pharmacy.id}`}>Editar</Link></button>

                  <button onClick={() => {

                    deletePharmacy(pharmacy.id);

                  }}>Eliminar</button>

                </td>

              </tr>

            </tbody>

          )

        })}

      </table>

    </>
  )
}

export default PharmaciesPage