import React, { useContext, useState } from 'react'
import { StockContext } from '../../context/StockContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';

const StockPage = () => {

  const { medicines, setMedicines, centerOfDistribution, setCenterOfDistribution, stocks, setStocks } = useContext(StockContext);

  const deleteStock = async (id) => {

    const request = await axios.delete(`http://127.0.0.1:8000/api/stock/eliminar/${id}`);
    location.reload();

  }

  return (
    <>

      <h1>Listado de stocks</h1>

      <Button variant="contained"><Link to="/stock/agregar">Registrar</Link></Button>

      <TableContainer>

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>Medicamento</TableCell>
            <TableCell>Centro de distribucion</TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell>Creado</TableCell>
            <TableCell>Actualizado</TableCell>
            <TableCell>Acciones</TableCell>

          </TableRow>

        </TableHead>

        {stocks.length === 0 &&

          <TableBody>

            <TableRow>

              <TableCell colSpan={6}>No hay medicinas registradas</TableCell>

            </TableRow>

          </TableBody>}

        {stocks.map((stock, index) => {

          return (

            <TableBody key={index}>

              <TableRow>
                
                <TableCell>{medicines.map((medicine, index) => { return (<div key={index}>{medicine.id === stock.scd_id_medicamento && medicine.med_nombre}</div>)})}</TableCell>
                <TableCell>{centerOfDistribution.map((center, index) => { return (<div key={index}>{center.id === stock.scd_centro_dist && center.cd_direccion}</div>) })}</TableCell>
                <TableCell>{stock.scd_cantidad}</TableCell>
                <TableCell>{new Date(stock.created_at).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(stock.updated_at).toLocaleDateString()}</TableCell>
                <TableCell>

                  <Button variant='contained' color='warning'><Link to={`/stock/actualizar/${stock.id}`}>Editar</Link></Button>

                  <Button variant='contained' color='error' onClick={() => {

                    deleteStock(stock.id);

                  }}>Eliminar</Button>

                </TableCell>

              </TableRow>

            </TableBody>

          )

        })}

      </Table>

      </TableContainer>

    </>
  )
}

export default StockPage