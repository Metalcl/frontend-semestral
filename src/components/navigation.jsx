import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';

function navigation() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Button>
            <Link to='/'>
              <p>Página Principal</p>
            </Link>
          </Button>
          <Button>
            <Link to='/farmacias/all'>
              <p>Farmacias</p>
            </Link>
          </Button>
          <Button>
            <Link to='/centros_distribucion/all'>
              <p>Centros de distribución</p>
            </Link>
          </Button>
          <Button>
            <Link to='/medicamentos/all'>
              <p>Medicamentos</p>
            </Link>
          </Button>
          <Button>
            <Link to='/traspasos/all'>
              <p>Traspasos</p>
            </Link>
          </Button>
          <Button>
            <Link to='/ingresos/all'>
              <p>Ingresos</p>
            </Link>
          </Button>
          <Button>
            <Link to='/stock/all'>
              <p>Stock</p>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet/>
    </Box>
  )
}

export default navigation