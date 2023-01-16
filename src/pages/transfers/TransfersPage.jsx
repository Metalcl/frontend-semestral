import React, { useContext } from 'react'
import { TransfersContext } from '../../context/TransfersContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TransfersPage = () => {

  const { centerOfDistribution, setCenterOfDistribution, transfers, setTransfers } = useContext(TransfersContext);

  const deleteTransfer = async (id) => {

    const request = await axios.delete(`http://127.0.0.1:8000/api/traspaso/eliminar/${id}`);
    location.reload();

  }

  return (
    <div>

      <h1>Listado de traspasos</h1>

      <Link to="/traspasos/agregar">Registrar</Link>

      <table>

        <thead>

          <tr>

            <th>Centro de distribucion origen</th>
            <th>Centro de distribucion destino</th>
            <th>Estado</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Acciones</th>

          </tr>

        </thead>

        {transfers.length === 0 &&

          <tbody>

            <tr>

              <td colSpan={6}>No hay traspasos registrados</td>

            </tr>

          </tbody>}

        {transfers.map((transfer, index) => {

          return (

            <tbody key={index}>

              <tr>

                <td>{centerOfDistribution.map((center, index) => { return (<div key={index}>{center.id === transfer.tras_cd_origen && center.cd_direccion}</div>) })}</td>
                <td>{centerOfDistribution.map((center, index) => { return (<div key={index}>{center.id === transfer.tras_cd_destino && center.cd_direccion}</div>) })}</td>
                <td>{transfer.tras_estado}</td>
                <td>{new Date(transfer.created_at).toLocaleDateString()}</td>
                <td>{new Date(transfer.updated_at).toLocaleDateString()}</td>
                <td>

                  <button><Link to={`/traspasos/actualizar/${transfer.id}`}>Editar</Link></button>

                  <button onClick={() => {

                    deleteTransfer(transfer.id);

                  }}>Eliminar</button>

                </td>

              </tr>

            </tbody>

          )

        })}

      </table>


    </div>
  )
}

export default TransfersPage