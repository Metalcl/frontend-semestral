import React, { useContext } from 'react'
import { StockContext } from '../../context/StockContext';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';

const AddStockPage = () => {

  const { medicines, setMedicines } = useContext(StockContext);
  const { centerOfDistribution, setCenterOfDistribution } = useContext(StockContext);
  const { form, changed } = useForm({});

  const addStock = async (e) => {

    e.preventDefault();

    const request = await axios.post(`http://127.0.0.1:8000/api/stock/agregar`, form);
    location.reload();

  }

  return (
    <>

      <h1>Registrar stock</h1>

      <form onSubmit={addStock}>

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

          <InputLabel>Centro de distribucion</InputLabel>
          <select name="centro_dist" onChange={changed}>

            <option>Seleccione un centro de distribucion</option>
            {
              centerOfDistribution.map((center, index) => (
                <option key={index} value={center.id}>{center.cd_direccion}</option>
              ))
            }

          </select>

        </Box>

        <Box>

          <InputLabel>Cantidad de medicamentos</InputLabel>
          <TextField type="number" name="cantidad" placeholder="Ingrese una cantidad" min={1} onChange={changed} />

        </Box>

        <Box>

          <Button  type="submit" variant='contained' color='primary'>
            {/* <input type="submit" value="Registrar" /> */}
            Registrar
          </Button>

        </Box>

      </form>

    </>
  )
}

export default AddStockPage