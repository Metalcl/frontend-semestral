import React, { useContext } from 'react'
import { StockContext } from '../../context/StockContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';

const UpdateStockPage = () => {

  const { medicines, setMedicines } = useContext(StockContext);
  const { centerOfDistribution, setCenterOfDistribution } = useContext(StockContext);
  const params = useParams();

  const updateStock = async (e) => {

    e.preventDefault();

    const request = await axios({
      method: 'put',
      url: `http://127.0.0.1:8000/api/stock/actualizar/${params.id}`,
      data: {
        scd_id_medicamento: e.target.id_medicamento.value,
        scd_cantidad: e.target.cantidad.value,
        scd_centro_dist: e.target.centro_dist.value
      }
    });

    location.reload();

  }

  return (

    <>

      <h1>Modificar stock</h1>

      <form onSubmit={updateStock}>

        <Box>

          <InputLabel>Medicamento</InputLabel>
          <select name="id_medicamento">

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
          <select name="centro_dist">

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
          <TextField type="number" name="cantidad" placeholder="Ingrese una cantidad" min={1} />

        </Box>

        <Box>

          <Button  type="submit" variant='contained' color='primary'>
            {/* <input type="submit" value="Registrar" /> */}
            Actualizar
          </Button>

        </Box>

      </form>

    </>

  )
}

export default UpdateStockPage