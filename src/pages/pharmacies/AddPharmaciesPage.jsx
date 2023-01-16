import axios from 'axios';
import React from 'react'
import { useForm } from '../../hooks/useForm'

const AddPharmaciesPage = () => {

  const { form, changed } = useForm({});

  const addPharmacy = async (e) => {

    e.preventDefault();

    const request = await axios.post(`http://127.0.0.1:8000/api/farmacias/agregar`, form);

    console.log(request);

  }

  return (
    <>

      <h1>Registrar farmacia</h1>

      <div>

        <form onSubmit={addPharmacy}>

          <label>Nombre</label>
          <input type="text" name="nombre" onChange={changed} />

          <label>Direccion</label>
          <input type="text" name="direccion" onChange={changed} />

          <label>Email</label>
          <input type="email" name="mail" onChange={changed} />

          <input type="submit" value="Registrar" />

        </form>

      </div>

    </>
  )
}

export default AddPharmaciesPage