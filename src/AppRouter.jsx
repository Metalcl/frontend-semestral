import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'

/*----------CREAR ARCHIVOS DE BARRIL PARA MINIMIZAR LAS EXPORTACIONES----------*/
import AddCenterOfDistributionPage from './pages/centerOfDistribution/AddCenterOfDistributionPage'
import CenterOfDistributionPage from './pages/centerOfDistribution/CenterOfDistributionPage'
import SearchCenterOfDistributionPage from './pages/centerOfDistribution/SearchCenterOfDistributionPage'
import UpdateCenterOfDistributionPage from './pages/centerOfDistribution/UpdateCenterOfDistributionPage'

import AddMedicinesPage from './pages/medicines/AddMedicinesPage'
import MedicinesPage from './pages/medicines/MedicinesPage'
import SearchMedicinesPage from './pages/medicines/SearchMedicinesPage'
import UpdateMedicinesPage from './pages/medicines/UpdateMedicinesPage'

import AddPharmaciesPage from './pages/pharmacies/AddPharmaciesPage'
import PharmaciesPage from './pages/pharmacies/PharmaciesPage'
import SearchPharmacyPage from './pages/pharmacies/SearchPharmacyPage'
import UpdatePharmaciesPage from './pages/pharmacies/UpdatePharmaciesPage'

import AddTransfersPage from './pages/transfers/AddTransfersPage'
import UpdateTransfersPage from './pages/transfers/UpdateTransfersPage'
import TransfersPage from './pages/transfers/TransfersPage'
import SearchTransfersPage from './pages/transfers/SearchTransfersPage'

import AddIncomesPage from './pages/incomes/AddIncomesPage'
import UpdateIncomesPage from './pages/incomes/UpdateIncomesPage'
import IncomesPage from './pages/incomes/IncomesPage'
import SearchIncomesPage from './pages/incomes/SearchIncomesPage'

import AddExpensesPage from './pages/expenses/AddExpensesPage'
import UpdateExpensesPage from './pages/expenses/UpdateExpensesPage'
import ExpensesPage from './pages/expenses/ExpensesPage'
import SearchExpensesPage from './pages/expenses/SearchExpensesPage'
import AddStockPage from './pages/stock/AddStockPage'
import UpdateStockPage from './pages/stock/UpdateStockPage'
import StockPage from './pages/stock/StockPage'


const AppRouter = () => {
  return (
    <Routes>
        {/* navbar */}
        <Route path='/' element={<Navigation/>}>
            <Route index element={<HomePage/>}/>

            {/* farmacias */}
            <Route path='/farmacias/agregar' element={<AddPharmaciesPage/>}/>
            <Route path='/farmacias/actualizar/:id' element={<UpdatePharmaciesPage/>}/>
            <Route path='/farmacias/all' element={<PharmaciesPage/>}/>
            <Route path='/farmacias/ver/:id' element={<SearchPharmacyPage/>}/>
            
            {/* centros de distribucion */}
            <Route path='/centros_distribucion/agregar' element={<AddCenterOfDistributionPage/>}/>
            <Route path='/centros_distribucion/actualizar/:id' element={<UpdateCenterOfDistributionPage/>}/>
            <Route path='/centros_distribucion/all' element={<CenterOfDistributionPage/>}/>
            <Route path='/centros_distribucion/ver/:id' element={<SearchCenterOfDistributionPage/>}/>

            {/* medicamentos */}
            <Route path='/medicamentos/agregar' element={<AddMedicinesPage/>}/>
            <Route path='/medicamentos/actualizar/:id' element={<UpdateMedicinesPage/>}/>
            <Route path='/medicamentos/all' element={<MedicinesPage/>}/>
            <Route path='/medicamentos/ver/:id' element={<SearchMedicinesPage/>}/>

            {/* traspasos */}
            <Route path='/traspasos/agregar' element={<AddTransfersPage/>}/>
            <Route path='/traspasos/actualizar/:id' element={<UpdateTransfersPage/>}/>
            <Route path='/traspasos/all' element={<TransfersPage/>}/>
            <Route path='/traspasos/ver/:id' element={<SearchTransfersPage/>}/>

            {/* ingresos */}
            <Route path='/ingresos/agregar' element={<AddIncomesPage/>}/>
            <Route path='/ingresos/actualizar/:id' element={<UpdateIncomesPage/>}/>
            <Route path='/ingresos/all' element={<IncomesPage/>}/>
            <Route path='/ingresos/ver/:id' element={<SearchIncomesPage/>}/>

            {/* egresos */}
            <Route path='/egresos/agregar' element={<AddExpensesPage/>}/>
            <Route path='/egresos/actualizar/:id' element={<UpdateExpensesPage/>}/>
            <Route path='/egresos/all' element={<ExpensesPage/>}/>
            <Route path='/egresos/ver/:id' element={<SearchExpensesPage/>}/>

            {/* stock */}
            <Route path='/stock/agregar' element={<AddStockPage/>}/>
            <Route path='/stock/actualizar/:id' element={<UpdateStockPage/>}/>
            <Route path='/stock/all' element={<StockPage/>}/>
        
        </Route>
        <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}

export default AppRouter