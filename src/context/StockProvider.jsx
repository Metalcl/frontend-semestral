import React, { useContext, useEffect, useState } from 'react'
import { StockContext } from "./StockContext"
import { MedicinesContext } from './MedicinesContext';
import { CenterOfDistributionContext } from './CenterOfDistributionContext';
import axios from 'axios';

export const StockProvider = ({children}) => {

  useEffect(() => {

    getStocks();

  }, []);

  const [ stocks, setStocks ] = useState([]);
  const { medicines, setMedicines } = useContext(MedicinesContext);
  const { centerOfDistribution, setCenterOfDistribution } = useContext(CenterOfDistributionContext);

  const getStocks = async () => {

    const request = await axios.get(`http://127.0.0.1:8000/api/stock/all`);

    setStocks(request.data.stocks);

  }

  return (
    <StockContext.Provider value={{
        medicines,
        setMedicines,
        centerOfDistribution,
        setCenterOfDistribution,
        stocks,
        setStocks
    }}>
        {children}
    </StockContext.Provider>
  )
}
