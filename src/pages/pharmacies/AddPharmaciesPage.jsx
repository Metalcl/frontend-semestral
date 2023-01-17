import axios from 'axios';
import React from 'react'
import { useForm } from '../../hooks/useForm'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';

const AddPharmaciesPage = () => {
  const { form, changed } = useForm({});
  const addPharmacy = async (e) => {
    e.preventDefault();
    const request = await axios.post(`http://127.0.0.1:8000/api/farmacias/agregar`, form);
    console.log(request);
    location.reload();
  }

  return (
    <>
      <h1>Registrar farmacia</h1>
      <Box>
        <form onSubmit={addPharmacy}>
          <InputLabel>Nombre</InputLabel>
          <TextField type="text" name="nombre" onChange={changed} />
          <InputLabel>Direccion</InputLabel>
          <TextField type="text" name="direccion" onChange={changed} />
          <InputLabel>Email</InputLabel>
          <TextField type="email" name="mail" onChange={changed} />
          <Button  type="submit" variant='contained' color='primary'>
            {/* <input type="submit" value="Registrar" /> */}
            Registrar
          </Button>
          {/* <input type="submit" value="Registrar" /> */}
        </form>
      </Box>
    </>
  )
}

export default AddPharmaciesPage