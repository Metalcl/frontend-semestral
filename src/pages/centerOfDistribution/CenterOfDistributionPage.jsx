import React, { useContext } from 'react'
import { CenterOfDistributionContext } from '../../context/CenterOfDistributionContext'
import { Link } from 'react-router-dom'

const CenterOfDistributionPage = () => {

  const {centerOfDistribution, setCenterOfDistribution} = useContext(CenterOfDistributionContext);

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
                  <button><Link to={`/centros_distribución/actualizar/${centerOfDistribution.id}`}>Editar</Link></button>
                  <button><Link to=''>Eliminar</Link></button>
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