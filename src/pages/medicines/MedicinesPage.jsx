import React, { useContext } from 'react'
import { MedicinesContext } from '../../context/MedicinesContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MedicinesPage = () => {

  const { medicines, setMedicines } = useContext(MedicinesContext);

  const deleteMedicine = async (id) => {

    const request = await axios.delete(`http://127.0.0.1:8000/api/medicamentos/eliminar/${id}`);
    console.log(request);
    location.reload();

  }

  return (
    <>

      <h1>Listado de medicamentos</h1>

      <Link to="/medicamentos/agregar">Registrar</Link>

      <table>

        <thead>

          <tr>

            <th>Nombre</th>
            <th>Compuesto</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Acciones</th>

          </tr>

        </thead>

        {medicines.length === 0 &&

          <tbody>

            <tr>

              <td colSpan={6}>No hay medicinas registradas</td>

            </tr>

          </tbody>}

        {medicines.map((medicine, index) => {

          return (

            <tbody key={index}>

              <tr>

                <td>{medicine.med_nombre}</td>
                <td>{medicine.med_compuesto}</td>
                <td>{new Date(medicine.created_at).toLocaleDateString()}</td>
                <td>{new Date(medicine.updated_at).toLocaleDateString()}</td>
                <td>

                  <button><Link to={`/medicamentos/actualizar/${medicine.id}`}>Editar</Link></button>

                  <button onClick={() => {

                    deleteMedicine(medicine.id);

                  }}>Eliminar</button>

                </td>

              </tr>

            </tbody>

          )

        })}

      </table>

    </>
  )
}

export default MedicinesPage