import React, { useContext } from 'react'
import { StockContext } from '../../context/StockContext';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

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

        <div>

          <label>Medicamento</label>
          <select name="id_medicamento" onChange={changed}>

            <option selected="true" disabled="disabled">Seleccione un medicamento</option>
            {
              medicines.map((medicine, index) => (
                <option key={index} value={medicine.id}>{medicine.med_nombre}</option>
              ))
            }

          </select>

        </div>

        <div>

          <label>Centro de distribucion</label>
          <select name="centro_dist" onChange={changed}>

            <option selected="true" disabled="disabled">Seleccione un centro de distribucion</option>
            {
              centerOfDistribution.map((center, index) => (
                <option key={index} value={center.id}>{center.cd_direccion}</option>
              ))
            }

          </select>

        </div>

        <div>

          <label>Cantidad de medicamentos</label>
          <input type="number" name="cantidad" placeholder="Ingrese una cantidad" min={1} onChange={changed} />

        </div>

        <div>

          <input type="submit" value="Registrar" />

        </div>

      </form>

    </>
  )
}

export default AddStockPage