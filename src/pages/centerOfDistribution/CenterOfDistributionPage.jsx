import React, { useContext } from 'react'
import { CenterOfDistributionContext } from '../../context/CenterOfDistributionContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';

const CenterOfDistributionPage = () => {

  const { centerOfDistribution, setCenterOfDistribution } = useContext(CenterOfDistributionContext);
  const deleteCenterOfDistribution = async (id) => {
    const request = await axios.delete(`http://127.0.0.1:8000/api/centros_distribucion/eliminar/${id}`);
    console.log(request);
  }

  return (
    <>
      <h1>Listado de centros de distribución</h1>
      <Button variant="contained">
        <Link to={`/centros_distribucion/agregar`}>Registrar</Link>
      </Button>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>Código</TableCell>
            <TableCell>Dirección</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Creado</TableCell>
            <TableCell>Actualizado</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        {centerOfDistribution.length === 0 &&
          <TableBody>
            <TableRow>
              <TableCell colSpan={4}>No hay centros de distribución registrados</TableCell>
            </TableRow>
          </TableBody>
        }
        {centerOfDistribution.map((centerOfDistribution, index) => {
          return (
            <TableBody key={index}>
              <TableRow>
                <TableCell>{centerOfDistribution.cd_codigo}</TableCell>
                <TableCell>{centerOfDistribution.cd_direccion}</TableCell>
                <TableCell>{centerOfDistribution.cd_telefono}</TableCell>
                <TableCell>{new Date(centerOfDistribution.created_at).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(centerOfDistribution.updated_at).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button variant='contained' color='warning'>
                    <Link to={`/centros_distribucion/actualizar/${centerOfDistribution.id}`}>Editar</Link>
                  </Button>
                  <Button variant='contained' color='error'
                    onClick={() => deleteCenterOfDistribution(centerOfDistribution.id)}
                  >Eliminar</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          )
        })}
      </TableContainer>
    </>
  )
}

export default CenterOfDistributionPage