import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';

const UpdatePharmaciesPage = () => {
  useEffect(() => {
    getPharmacy();
  }, []);

  const [pharmacy, setPharmacy] = useState([]);
  const params = useParams();
  const getPharmacy = async () => {
    const request = await axios.get(`http://127.0.0.1:8000/api/farmacias/ver/${params.id}`);
    setPharmacy(request.data.farmacias);
  }

  const updatePharmacy = async (e) => {
    e.preventDefault();
    const request = await axios({
      method: 'put',
      url: `http://127.0.0.1:8000/api/farmacias/actualizar/${params.id}`,
      data: {
        nombre: e.target.nombre.value,
        direccion: e.target.direccion.value,
        mail: e.target.mail.value
      }
    });
    location.reload();
  }

  return (
    <>
      <h1>Modificar farmacia</h1>
      {pharmacy.map((pharmacy, index) => {
        return (
          <Box key={index}>
            <form onSubmit={updatePharmacy}>
              <InputLabel>Nombre</InputLabel>
              <TextField  type="text" defaultValue={pharmacy.farm_nombre} name="nombre" />
              <InputLabel>Direccion</InputLabel>
              <TextField  type="text" defaultValue={pharmacy.farm_direccion} name="direccion" />
              <InputLabel>Email</InputLabel>
              <TextField  type="email" defaultValue={pharmacy.farm_mail} name="mail" />
              <Button  type="submit" variant='contained' color='primary'>
                {/* <input type="submit" value="Registrar" /> */}
                Actualizar
              </Button>
            </form>
          </Box>
        )
      })}
    </>
  )
}

export default UpdatePharmaciesPage