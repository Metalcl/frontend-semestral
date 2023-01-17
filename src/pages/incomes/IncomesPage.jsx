import React from 'react'
import { IncomesContext } from '../../context/IncomesContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';

const IncomesPage = () => {
  const { incomes, setIncomes } = useContext(IncomesContext);
  const deleteIncome = async (id) => {
    const request = await axios.delete(`http://127.0.0.1:8000/api/ingreso/eliminar/${id}`);
    location.reload();
  }

  return (
    <>
      <h1>Listado de ingresos</h1>
      <Button variant="contained">
        <Link to="/ingresos/agregar">Nuevo ingreso</Link>
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Centro de distribución</TableCell>
              <TableCell>Fecha ingreso</TableCell>
              <TableCell>Creado</TableCell>
              <TableCell>Actualizado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          {incomes.map((income, index) => {
            return (
              <TableBody key={index}>
                <TableRow>
                  <TableCell>{income.id}</TableCell>
                  <TableCell>{income.ingr_centro_dist}</TableCell>
                  <TableCell>{new Date(income.ingr_fecha).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(income.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(income.updated_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Button variant='contained' color='warning'>
                      <Link to={`/ingresos/actualizar/${income.id}`}>Editar</Link>
                    </Button>
                    <Button variant='contained' color='error'
                      onClick={() => deleteIncome(income.id)}
                    >
                      Eliminar
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

export default IncomesPage