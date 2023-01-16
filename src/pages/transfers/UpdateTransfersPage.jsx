import React, { useContext } from 'react'
import { TransfersContext } from '../../context/TransfersContext';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

        <div>

          <label>Centro de distribucion origen</label>
          <select name="tras_cd_origen" onChange={changed}>

            <option>Seleccione un centro de distribucion</option>
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

            <option>Seleccione un centro de distribucion</option>
            {
              centerOfDistribution.map((center, index) => (
                <option key={index} value={center.id}>{center.cd_direccion}</option>
              ))
            }

          </select>

        </div>

        <div>

          <label>Estado</label>
          <select name="tras_estado" onChange={changed}>

            <option>Seleccione el nuevo estado</option>
            <option>Finalizado</option>
            <option>En curso</option>
            <option>Cancelado</option>

          </select>

        </div>

        <div>

          <label>Medicamento</label>
          <select name="id_medicamento" onChange={changed}>

            <option>Seleccione un medicamento</option>
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

          <input type="submit" value="Actualizar" />

        </div>

      </form>

    </>
  )
}

export default UpdateTransfersPage