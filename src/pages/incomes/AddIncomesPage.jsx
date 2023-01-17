import React from 'react'
import axios from 'axios'
import { useForm } from '../../hooks/useForm'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';

const AddIncomesPage = () => {

  const {form, changed } = useForm({});

  const addIncome = async (e) => {

    e.preventDefault();

    const request = await axios.post(`http://127.0.0.1:8000/api/ingreso/agregar`,form);

    location.reload();
    
  }

  return (
    <>
      <h1>Registrar ingreso</h1>
      <Box>
        <form onSubmit={addIncome}> 
          <InputLabel>Ingresar centro de distribución</InputLabel>
          <TextField type="text" name='ingr_centro_dist' onChange={changed}/>
          <InputLabel>Fecha Ingreso</InputLabel>
          <TextField type="date" name='ingr_fecha' onChange={changed}/>
          <Button  type="submit" variant='contained' color='primary'>
            Registrar
          </Button>
        </form>
      </Box>
    </>
  )
}

export default AddIncomesPage