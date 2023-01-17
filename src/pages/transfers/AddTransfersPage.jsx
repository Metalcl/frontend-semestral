import React, { useContext } from 'react'
import { TransfersContext } from '../../context/TransfersContext';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const AddTransfersPage = () => {
  const { centerOfDistribution, setCenterOfDistribution, medicines, setMedicines } = useContext(TransfersContext);
  const { form, changed } = useForm({});
  const addTransfer = async (e) => {
    e.preventDefault();
    const request = await axios.post(`http://127.0.0.1:8000/api/traspaso/agregar`, {
      "tras_cd_origen": form.tras_cd_origen,
      "tras_cd_destino": form.tras_cd_destino,
      "tras_estado": "En curso",
      "id_medicamento": form.id_medicamento,
      "det_tra_cantidad": form.det_tra_cantidad
    });
    location.reload();
  }

  return (
    <>
      <h1>Registrar traspasos</h1>
      <form onSubmit={addTransfer}>
        <Box>
          <InputLabel>Centro de distribucion origen</InputLabel>
          <select name="tras_cd_origen" onChange={changed}>
            <option disabled="disabled">Seleccione un centro de distribucion</option>
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
            <option disabled="disabled">Seleccione un centro de distribucion</option>
            {
              centerOfDistribution.map((center, index) => (
                <option key={index} value={center.id}>{center.cd_direccion}</option>
              ))
            }
          </select>
        </Box>
        <Box>
          <InputLabel>Medicamento</InputLabel>
          <select name="id_medicamento" onChange={changed}>
            <option disabled="disabled">Seleccione un medicamento</option>
            {
              medicines.map((medicine, index) => (
                <option key={index} value={medicine.id}>{medicine.med_nombre}</option>
              ))
            }
          </select>
        </Box>
        <Box>
          <InputLabel>Cantidad de medicamentos</InputLabel>
          <TextField type="number" name="det_tra_cantidad" placeholder="Ingrese una cantidad" min={1} onChange={changed} />
        </Box>
        <Box>
        <Button  type="submit" variant='contained' color='primary'>
          Registrar
        </Button>
          {/* <input type="submit" value="Registrar" /> */}
        </Box>
      </form>
    </>
  )
}

export default AddTransfersPage