import React, { useContext } from 'react'
import { MedicinesContext } from '../../context/MedicinesContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';

const MedicinesPage = () => {

  const { medicines, setMedicines } = useContext(MedicinesContext);

  const deleteMedicine = async (id) => {

    const request = await axios.delete(`http://127.0.0.1:8000/api/medicamentos/eliminar/${id}`);
    
    location.reload();

  }

  return (
    <>

      <h1>Listado de medicamentos</h1>

      <Button variant="contained"><Link to="/medicamentos/agregar">Registrar</Link></Button>

      <TableContainer>

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>Nombre</TableCell>
            <TableCell>Compuesto</TableCell>
            <TableCell>Creado</TableCell>
            <TableCell>Actualizado</TableCell>
            <TableCell>Acciones</TableCell>

          </TableRow>

        </TableHead>

        {medicines.length === 0 &&

          <TableBody>

            <TableRow>

              <TableCell colSpan={6}>No hay medicinas registradas</TableCell>

            </TableRow>

          </TableBody>}

        {medicines.map((medicine, index) => {

          return (

            <TableBody key={index}>

              <TableRow>

                <TableCell>{medicine.med_nombre}</TableCell>
                <TableCell>{medicine.med_compuesto}</TableCell>
                <TableCell>{new Date(medicine.created_at).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(medicine.updated_at).toLocaleDateString()}</TableCell>
                <TableCell>

                  <Button variant='contained' color='warning'><Link to={`/medicamentos/actualizar/${medicine.id}`}>Editar</Link></Button>

                  <Button variant='contained' color='error' onClick={() => {

                    deleteMedicine(medicine.id);

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

export default MedicinesPage