import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';

const UpdateIncomesPage = () => {

  useEffect(() => {

    getIncome();
    
  }, []);

  const [income, setIncome] = useState([]);
  const params = useParams();

  const getIncome = async () => {

    const request = await axios.get(`http://127.0.0.1:8000/api/ingreso/ver/${params.id}`);

    setIncome(request.data.ingreso);

  }

  const updateIncome = async (e) => {

    e.preventDefault();
  
    const request = await axios({
      method: 'put',
      url: `http://127.0.0.1:8000/api/ingreso/actualizar/${params.id}`,
      data: {
        ingr_centro_dist: e.target.ingr_centro_dist.value,
        ingr_fecha: e.target.ingr_fecha.value
      }
    });

    location.reload();

  }

  return (
    <>
      <h1>Actualizar Ingresos</h1>
      {income.map((income, index) => {
        return (
            <Box key={index}>
              <form onSubmit={updateIncome}>
                <InputLabel>Centro de distribución</InputLabel>
                <TextField type="text" defaultValue={income.ingr_centro_dist} name='ingr_centro_dist' />
                <InputLabel>Fecha ingreso</InputLabel>
                <TextField type="date" defaultValue={income.ingr_fecha} name='ingr_fecha' />
                <Button  type="submit" variant='contained' color='primary'>
                  Actualizar
                </Button>
              </form>
            </Box>
          )
        })}
    </>
  )
}

export default UpdateIncomesPage