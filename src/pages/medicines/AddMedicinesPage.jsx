import React from 'react'
import { useForm } from '../../hooks/useForm'
import axios from 'axios';

const AddMedicinesPage = () => {

  const { form, changed } = useForm({});

  const addMedicine = async (e) => {

    e.preventDefault();

    const request = await axios.post(`http://127.0.0.1:8000/api/medicamentos/agregar`, form);

    location.reload();

  }

  return (
    <>

      <h1>Registrar farmacia</h1>

      <div>

        <form onSubmit={addMedicine}>

          <label>Nombre</label>
          <input type="text" name="nombre" onChange={changed} />

          <label>Compuesto</label>
          <input type="text" name="compuesto" onChange={changed} />

          <input type="submit" value="Registrar" />

        </form>

      </div>

    </>
  )
}

export default AddMedicinesPage