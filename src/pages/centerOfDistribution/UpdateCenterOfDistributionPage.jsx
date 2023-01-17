import React, { useState, useEffect }from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';

const UpdateCenterOfDistributionPage = () => {
  useEffect(() => {
    getCenterOfDistribution();
  }, []);

  const [centerOfDistribution, setCenterOfDistribution] = useState([]);
  const params = useParams();

  const getCenterOfDistribution = async () => {
    const request = await axios.get(`http://127.0.0.1:8000/api/centros_distribucion/ver/${params.id}`);
    setCenterOfDistribution(request.data.centros_distribucion);
  }

  const updateCenterOfDistribution = async (e) => {
    e.preventDefault();
    const request = await axios({
      method: 'put',
      url: 'http://127.0.0.1:8000/api/centros_distribucion/actualizar/'+params.id,
      data: {
        codigo: e.target.codigo.value,
        direccion: e.target.direccion.value,
        telefono: e.target.telefono.value
      }
    });
    location.reload();
  }

  return (
    <>
      <h1>Actualizar Centro de Distribución</h1>
      {centerOfDistribution.map((center, index) => {
        return (
          <Box key={index}>
            <form onSubmit={updateCenterOfDistribution}>
              <InputLabel>Código</InputLabel>
              <TextField type="text" defaultValue={center.cd_codigo} name="codigo"/>
              <InputLabel>Dirección</InputLabel>
              <TextField type="text" defaultValue={center.cd_direccion} name="direccion"/>
              <InputLabel>Teléfono</InputLabel>
              <TextField type="text" defaultValue={center.cd_telefono} name="telefono"/>
              <Button  type="submit" variant='contained' color='primary'>
                Actualizar
              </Button>
              {/* <input type="submit" value="Registrar" /> */}
            </form>
          </Box>
        )
      })}
    </>
  )
}

export default UpdateCenterOfDistributionPage