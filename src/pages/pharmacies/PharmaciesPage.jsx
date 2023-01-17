import React, { useContext } from 'react'
import { PharmaciesContext } from '../../context/PharmaciesContext'
import { Link } from 'react-router-dom'
import axios from 'axios';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';

const PharmaciesPage = () => {
  const { pharmacies, setPharmacies } = useContext(PharmaciesContext);
  const deletePharmacy = async (id) => {
    const request = await axios.delete(`http://127.0.0.1:8000/api/farmacias/eliminar/${id}`);
    location.reload();
  }

  return (
    <>
      <h1>Listado de farmacias</h1>
      <Button variant="contained">
        <Link to="/farmacias/agregar">Registrar</Link>
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Creado</TableCell>
              <TableCell>Actualizado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          {
            pharmacies.length === 0 &&
            <TableBody>
              <TableRow>
                <TableCell colSpan={6}>No hay farmacias registradas</TableCell>
              </TableRow>
            </TableBody>
          }
          {
            pharmacies.map((pharmacy, index) => {
              return (
                <TableBody key={index}>
                  <TableRow>
                    <TableCell>{pharmacy.farm_nombre}</TableCell>
                    <TableCell>{pharmacy.farm_direccion}</TableCell>
                    <TableCell>{pharmacy.farm_mail}</TableCell>
                    <TableCell>{new Date(pharmacy.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(pharmacy.updated_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Button variant='contained' color='warning'>
                        <Link to={`/farmacias/actualizar/${pharmacy.id}`}>Editar</Link>
                      </Button>
                      <Button variant='contained' color='error' onClick={() => {
                        deletePharmacy(pharmacy.id);
                      }}>Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              )
            })
          }
        </Table>
      </TableContainer>
      {/* <table>
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
      </table> */}
    </>
  )
}

export default PharmaciesPage