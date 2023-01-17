import React, { useContext } from 'react'
import { TransfersContext } from '../../context/TransfersContext';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';

const UpdateTransfersPage = () => {
  const { centerOfDistribution, setCenterOfDistribution, medicines, setMedicines } = useContext(TransfersContext);
  const { form, changed } = useForm({});
  const params = useParams();

  const updateTransfer = async (e) => {
    e.preventDefault();
    const request = await axios.put(`http://127.0.0.1:8000/api/traspaso/actualizar/${params.id}`, form);
    location.reload();
  }

  return (
    <>
      <h1>Modificar traspaso</h1>
      <form onSubmit={updateTransfer}>
        <Box>
          <InputLabel>Centro de distribucion origen</InputLabel>
          <select name="tras_cd_origen" onChange={changed}>
            <option>Seleccione un centro de distribucion</option>
            {
              centerOfDistribution.map((center, index) => (
                <option key={index} value={center.id}>{center.cd_direccion}</option>
              ))
            }
          </select>
        </Box>
        <Box>
          <InputLabel>Centro de distribucion destino</InputLabel>
          <select name="tras_cd_destino" onChange={changed}>
            <option>Seleccione un centro de distribucion</option>
            {
              centerOfDistribution.map((center, index) => (
                <option key={index} value={center.id}>{center.cd_direccion}</option>
              ))
            }
          </select>
        </Box>
        <Box>
          <InputLabel>Estado</InputLabel>
          <select name="tras_estado" onChange={changed}>
            <option>Seleccione el nuevo estado</option>
            <option>Finalizado</option>
            <option>En curso</option>
            <option>Cancelado</option>
          </select>
        </Box>
        <Box>
          <InputLabel>Medicamento</InputLabel>
          <select name="id_medicamento" onChange={changed}>
            <option>Seleccione un medicamento</option>
            {
              medicines.map((medicine, index) => (
                <option key={index} value={medicine.id}>{medicine.med_nombre}</option>
              ))
            }
          </select>
        </Box>
        <Box>
          <InputLabel>Cantidad de medicamentos</InputLabel>
          <input type="number" name="det_tra_cantidad" placeholder="Ingrese una cantidad" min={1} onChange={changed} />
        </Box>
        <Box>
          <Button  type="submit" variant='contained' color='primary'>
            Actualizar
          </Button>
        </Box>
      </form>
    </>
  )
}

export default UpdateTransfersPage