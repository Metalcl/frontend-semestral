import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateMedicinesPage = () => {

  useEffect(() => {

    getMedicine();

  }, []);

  const [medicine, setMedicine] = useState([]);
  const params = useParams();

  const getMedicine = async () => {

    const request = await axios.get(`http://127.0.0.1:8000/api/medicamentos/ver/${params.id}`);
    setMedicine(request.data.medicamentos);

  }

  const updateMedicine = async (e) => {

    e.preventDefault();

    const request = await axios({
      method: 'put',
      url: `http://127.0.0.1:8000/api/medicamentos/actualizar/${params.id}`,
      data: {
        nombre: e.target.nombre.value,
        compuesto: e.target.compuesto.value
      }
    });

    location.reload();

  }

  return (
    <>

      <h1>Modificar medicamento</h1>

      {medicine.map((medicine, index) => {

        return (

          <div key={index}>

            <form onSubmit={updateMedicine}>

              <label>Nombre</label>
              <input type="text" defaultValue={medicine.med_nombre} name="nombre" />

              <label>Compuesto</label>
              <input type="text" defaultValue={medicine.med_compuesto} name="compuesto" />

              <input type="submit" value="Actualizar" />

            </form>

          </div>

        )

      })}

    </>
  )
}

export default UpdateMedicinesPage