import React, { useState, useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdatePharmaciesPage = () => {

  useEffect(() => {

    getPharmacy();

  }, []);

  useEffect(() => {

    updatePharmacy();

  }, []);

  const { form, changed } = useForm({});
  const [pharmacy, setPharmacy] = useState([]);
  const params = useParams();

  const getPharmacy = async () => {

    const request = await axios.get("http://127.0.0.1:8000/api/farmacias/ver/" + params.id);

    setPharmacy(request.data.farmacias);

  }

  const updatePharmacy = async (e) => {

    e.preventDefault();

    console.log(e.target.nombre.value);
    console.log(e.target.direccion.value);
    console.log(e.target.mail.value);

    const request = await axios({
      method: 'put',
      url: 'http://127.0.0.1:8000/api/farmacias/actualizar/'+params.id,
      data: {
        nombre: e.target.nombre.value,
        direccion: e.target.direccion.value,
        mail: e.target.mail.value
      }
    });

    console.log(request);

  }

  return (
    <>

      <h1>Modificar farmacia</h1>

      {pharmacy.map((pharmacy, index) => {

        return (

          <div key={index}>

            <form onSubmit={updatePharmacy}>

              <label>Nombre</label>
              <input type="text" defaultValue={pharmacy.farm_nombre} name="nombre" onChange={changed} />

              <label>Direccion</label>
              <input type="text" defaultValue={pharmacy.farm_direccion} name="direccion" onChange={changed} />

              <label>Email</label>
              <input type="email" defaultValue={pharmacy.farm_mail} name="mail" onChange={changed} />

              <input type="submit" value="Registrar" />

            </form>

          </div>

        )

      })}

    </>

  )
  
}

export default UpdatePharmaciesPage