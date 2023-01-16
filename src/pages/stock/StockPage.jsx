import React, { useContext, useState } from 'react'
import { StockContext } from '../../context/StockContext';
import { Link } from 'react-router-dom';

const StockPage = () => {

  const { medicines, setMedicines, centerOfDistribution, setCenterOfDistribution, stocks, setStocks } = useContext(StockContext);

  const deleteStock = async (id) => {

    const request = await axios.delete(`http://127.0.0.1:8000/api/stock/eliminar/${id}`);
    location.reload();

  }

  return (
    <div>

      <h1>Listado de stocks</h1>

      <Link to="/stock/agregar">Registrar</Link>

      <table>

        <thead>

          <tr>

            <th>Medicamento</th>
            <th>Centro de distribucion</th>
            <th>Cantidad</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Acciones</th>

          </tr>

        </thead>

        {stocks.length === 0 &&

          <tbody>

            <tr>

              <td colSpan={6}>No hay medicinas registradas</td>

            </tr>

          </tbody>}

        {stocks.map((stock, index) => {

          return (

            <tbody key={index}>

              <tr>
                
                <td>{medicines.map((medicine, index) => { return (<div key={index}>{medicine.id === stock.scd_id_medicamento && medicine.med_nombre}</div>)})}</td>
                <td>{centerOfDistribution.map((center, index) => { return (<div key={index}>{center.id === stock.scd_centro_dist && center.cd_direccion}</div>) })}</td>
                <td>{stock.scd_cantidad}</td>
                <td>{new Date(stock.created_at).toLocaleDateString()}</td>
                <td>{new Date(stock.updated_at).toLocaleDateString()}</td>
                <td>

                  <button><Link to={`/stock/actualizar/${stock.id}`}>Editar</Link></button>

                  <button onClick={() => {

                    deleteStock(stock.id);

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

export default StockPage