import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function navigation() {
  return (
    <div className='container-navbar'>
      <Link to='/'>
        <p>Página principal</p>
      </Link>
      <Link to='/farmacias/all'>
        <p>Farmacias</p>
      </Link>
      <Link to='/centros_distribucion/all'>
        <p>Centros de distribución</p>
      </Link>
      <Link to='/medicamentos/all'>
        <p>Medicamentos</p>
      </Link>
      <Link to='/traspasos/all'>
        <p>Traspasos</p>
      </Link>
      <Link to='/ingresos/all'>
        <p>Ingresos</p>
      </Link>
      <Link to='/egresos/all'>
        <p>Egresos</p>
      </Link>



      <Outlet/>
    </div>
  )
}

export default navigation