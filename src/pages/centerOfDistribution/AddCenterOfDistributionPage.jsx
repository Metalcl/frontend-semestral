import React from 'react'
import axios from 'axios'
import { useForm } from '../../hooks/useForm'

const AddCenterOfDistributionPage = () => {

  const { form, changed } = useForm({});

  const addCenterOfDistribution = async (e) => {

    e.preventDefault();

    const request = await fetch('http://127.0.0.1:8000/api/centros_distribucion/agregar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });
    const response = await request.json();
    // console.log(response);

  }

  return (
    <>
      <h1>Registrar centro de distribucion</h1>
      <div>
        <form onSubmit={addCenterOfDistribution}>
          <label>Código</label>
          <input type="text" name="codigo" onChange={changed} />
          <label>Dirección</label>
          <input type="text" name="direccion" onChange={changed} />
          <label>Teléfono</label>
          <input type="text" name="telefono" onChange={changed} />
          <input type="submit" value="Registrar" />
        </form>
      </div>
    </>
  )
}

export default AddCenterOfDistributionPage