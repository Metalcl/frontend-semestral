import React from 'react'
import { useForm } from '../../hooks/useForm'
import axios from 'axios';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';

const AddMedicinesPage = () => {

  const { form, changed } = useForm({});

  const addMedicine = async (e) => {

    e.preventDefault();

    const request = await axios.post(`http://127.0.0.1:8000/api/medicamentos/agregar`, form);

    location.reload();

  }

  return (
    <>

      <h1>Registrar medicamentos</h1>

      <Box>

        <form onSubmit={addMedicine}>

          <InputLabel>Nombre</InputLabel>
          <TextField type="text" name="nombre" onChange={changed} />

          <InputLabel>Compuesto</InputLabel>
          <TextField type="text" name="compuesto" onChange={changed} />

          <Button  type="submit" variant='contained' color='primary'>
            {/* <input type="submit" value="Registrar" /> */}
            Registrar
          </Button>

        </form>

      </Box>

    </>
  )
}

export default AddMedicinesPage