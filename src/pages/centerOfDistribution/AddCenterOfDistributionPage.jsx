import React from 'react'
import axios from 'axios'
import { useForm } from '../../hooks/useForm'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';

const AddCenterOfDistributionPage = () => {
  const { form, changed } = useForm({});
  const addCenterOfDistribution = async (e) => {
    e.preventDefault();
    const request = await axios.post('http://127.0.0.1:8000/api/centros_distribucion/agregar', form);
  }

  return (
    <>
      <h1>Registrar centro de distribucion</h1>
      <Box>
        <form onSubmit={addCenterOfDistribution}>
          <InputLabel>Código</InputLabel>
          <TextField type="text" name="codigo" onChange={changed} />
          <InputLabel>Dirección</InputLabel>
          <TextField type="text" name="direccion" onChange={changed} />
          <InputLabel>Teléfono</InputLabel>
          <TextField type="text" name="telefono" onChange={changed} />
          <Button  type="submit" variant='contained' color='primary'>
            Registrar
          </Button>
          {/* <input type="submit" value="Registrar" /> */}
        </form>
      </Box>
    </>
  )
}

export default AddCenterOfDistributionPage