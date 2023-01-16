import React, { useState, useEffect, useContext } from "react"
import { TransfersContext } from "./TransfersContext"
import { CenterOfDistributionContext } from './CenterOfDistributionContext';
import { MedicinesContext } from './MedicinesContext';
import axios from 'axios';

export const TransfersProvider = ({children}) => {

  useEffect(() => {

    getTransfers();

  }, []);

  const { centerOfDistribution, setCenterOfDistribution } = useContext(CenterOfDistributionContext);
  const { medicines, setMedicines } = useContext(MedicinesContext);
  const [ transfers, setTransfers ] = useState([]);

  const getTransfers = async () => {

    const request = await axios.get(`http://127.0.0.1:8000/api/traspaso/all`);

    setTransfers(request.data.traspasos);

  }

  return (
    <TransfersContext.Provider value={{
        centerOfDistribution,
        setCenterOfDistribution,
        medicines,
        setMedicines,
        transfers,
        setTransfers
    }}>
        {children}
    </TransfersContext.Provider>
  )
}
