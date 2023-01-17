import React, { useContext } from 'react'
import { TransfersContext } from '../../context/TransfersContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';

const TransfersPage = () => {
  const { centerOfDistribution, setCenterOfDistribution, transfers, setTransfers } = useContext(TransfersContext);
  const deleteTransfer = async (id) => {
    const request = await axios.delete(`http://127.0.0.1:8000/api/traspaso/eliminar/${id}`);
    location.reload();
  }

  return (
    <>
      <h1>Listado de traspasos</h1>
      <Button variant="contained">
        <Link to="/traspasos/agregar">Registrar</Link>
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Centro de distribición de origen</TableCell>
              <TableCell>Centro de distribución de destino</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Creado</TableCell>
              <TableCell>Actualizado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          {transfers.length === 0 &&
            <TableBody>
              <TableRow>
                <TableCell colSpan={6}>No hay traspasos registrados</TableCell>
              </TableRow>
            </TableBody>}
          {transfers.map((transfer, index) => {
            return (
              <TableBody key={index}>
                <TableRow>
                  <TableCell>{centerOfDistribution.map((center, index) => { return (<div key={index}>{center.id === transfer.tras_cd_origen && center.cd_direccion}</div>) })}</TableCell>
                  <TableCell>{centerOfDistribution.map((center, index) => { return (<div key={index}>{center.id === transfer.tras_cd_destino && center.cd_direccion}</div>) })}</TableCell>
                  <TableCell>{transfer.tras_estado}</TableCell>
                  <TableCell>{new Date(transfer.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(transfer.updated_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Button variant='contained' color='warning'>
                      <Link to={`/traspasos/actualizar/${transfer.id}`}>Editar</Link>
                    </Button>
                    <Button variant='contained' color='error' onClick={() => {
                      deleteTransfer(transfer.id);
                    }}>Eliminar
                    </Button>
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

export default TransfersPage