import React, { useContext } from 'react'
import { TransfersContext } from '../../context/TransfersContext';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

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

        <div>

          <label>Centro de distribucion origen</label>
          <select name="tras_cd_origen" onChange={changed}>

            <option selected="true" disabled="disabled">Seleccione un centro de distribucion</option>
            {
              centerOfDistribution.map((center, index) => (
                <option key={index} value={center.id}>{center.cd_direccion}</option>
              ))
            }

          </select>

        </div>

        <div>

          <label>Centro de distribucion destino</label>
          <select name="tras_cd_destino" onChange={changed}>

            <option selected="true" disabled="disabled">Seleccione un centro de distribucion</option>
            {
              centerOfDistribution.map((center, index) => (
                <option key={index} value={center.id}>{center.cd_direccion}</option>
              ))
            }

          </select>

        </div>

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

          <label>Cantidad de medicamentos</label>
          <input type="number" name="det_tra_cantidad" placeholder="Ingrese una cantidad" min={1} onChange={changed} />

        </div>

        <div>

          <input type="submit" value="Registrar" />

        </div>

      </form>

    </>
  )
}

export default AddTransfersPage