import React, { useContext } from 'react'
import { CenterOfDistributionContext } from '../../context/CenterOfDistributionContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CenterOfDistributionPage = () => {

  const {centerOfDistribution, setCenterOfDistribution} = useContext(CenterOfDistributionContext);

  const deleteCenterOfDistribution = async (id) => {
    const request = await axios.delete(`http://127.0.0.1:8000/api/centros_distribucion/eliminar/${id}`);
    console.log(request);
  }


  return (
    <>
      <h1>Listado de centros de distribución</h1>
      <Link to={`/centros_distribucion/agregar`}>Registrar</Link>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {centerOfDistribution.length === 0 &&
          <tbody>
            <tr>
              <td colSpan={4}>No hay centros de distribución registrados</td>
            </tr>
          </tbody>
        }
        {centerOfDistribution.map((centerOfDistribution, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{centerOfDistribution.cd_codigo}</td>
                <td>{centerOfDistribution.cd_direccion}</td>
                <td>{centerOfDistribution.cd_telefono}</td>
                <td>{new Date(centerOfDistribution.created_at).toLocaleDateString()}</td>
                <td>{new Date(centerOfDistribution.updated_at).toLocaleDateString()}</td>
                <td>
                  <button><Link to={`/centros_distribucion/actualizar/${centerOfDistribution.id}`}>Editar</Link></button>
                  <button
                    onClick={() => deleteCenterOfDistribution(centerOfDistribution.id)}
                  >Eliminar</button>
                </td>
              </tr>
            </tbody>
    )

    })}
      </table>
    </>
  )
}

export default CenterOfDistributionPage