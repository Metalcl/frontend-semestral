import React, { useState, useEffect }from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

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
          <div key={index}>
            <form onSubmit={updateCenterOfDistribution}>
              <label>Código</label>
              <input type="text" defaultValue={center.cd_codigo} name="codigo"/>
              <label>Dirección</label>
              <input type="text" defaultValue={center.cd_direccion} name="direccion"/>
              <label>Teléfono</label>
              <input type="text" defaultValue={center.cd_telefono} name="telefono"/>
              <input type="submit" value="Registrar" />
            </form>
          </div>
        )
      })}
    </>
  )
}

export default UpdateCenterOfDistributionPage