import React, { useContext } from 'react'
import { MedicinesContext } from '../../context/MedicinesContext';

const MedicinesPage = () => {

  const { medicines, setMedicines } = useContext(MedicinesContext);

  return (
    <>

      <h1>Listado de medicamentos</h1>

    </>
  )
}

export default MedicinesPage