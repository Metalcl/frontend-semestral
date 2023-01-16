import React, { useState, useEffect }from 'react'
import axios from 'axios'
import { useForm } from '../../hooks/useForm'
import { useParams } from 'react-router-dom'

const UpdateCenterOfDistributionPage = () => {

  const { Form, changed } = useForm({});
  const [centerOfDistribution, setCenterOfDistribution] = useState([]);
  const params = useParams();

  const getCenterOfDistribution = async () => {
    const request = await axios.get(`http://127.0.0.1:8000/api/centros_distribucion/ver/${id}`);
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
    console.log(request);
  }


  return (
    <>
      <h1>Actualizar Centro de Distribución</h1>
      {centerOfDistribution.map((centerOfDistribution, index) => {
        return (
          <div key={index}>
            <form onSubmit={updateCenterOfDistribution}>
              <label>Código</label>
              <input type="text" defaultValue={centerOfDistribution.codigo} name="nombre" onChange={changed} />
              <label>Dirección</label>
              <input type="text" defaultValue={centerOfDistribution.direccion} name="direccion" onChange={changed} />
              <label>Teléfono</label>
              <input type="text" defaultValue={centerOfDistribution.telefono} name="mail" onChange={changed} />
              <input type="submit" value="Registrar" />
            </form>
          </div>
        )
      })}
    </>
  )
}

export default UpdateCenterOfDistributionPage