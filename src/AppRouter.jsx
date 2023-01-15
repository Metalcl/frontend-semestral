import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'

/*----------CREAR ARCHIVOS DE BARRIL PARA MINIMIZAR LAS EXPORTACIONES----------*/
import AddCenterOfDistributionPage from './pages/centerOfDistribution/AddCenterOfDistributionPage'
import CenterOfDistributionPage from './pages/centerOfDistribution/CenterOfDistributionPage'
import DeleteCenterOfDistributionPage from './pages/centerOfDistribution/DeleteCenterOfDistributionPage'
import SearchCenterOfDistributionPage from './pages/centerOfDistribution/SearchCenterOfDistributionPage'
import UpdateCenterOfDistributionPage from './pages/centerOfDistribution/UpdateCenterOfDistributionPage'

import AddMedicinesPage from './pages/medicines/AddMedicinesPage'
import DeleteMedicinesPage from './pages/medicines/DeleteMedicinesPage'
import MedicinesPage from './pages/medicines/MedicinesPage'
import SearchMedicinesPage from './pages/medicines/SearchMedicinesPage'
import UpdateMedicinesPage from './pages/medicines/UpdateMedicinesPage'

import AddPharmaciesPage from './pages/pharmacies/AddPharmaciesPage'
import DeletePharmaciesPage from './pages/pharmacies/DeletePharmaciesPage'
import PharmaciesPage from './pages/pharmacies/PharmaciesPage'
import SearchPharmacyPage from './pages/pharmacies/SearchPharmacyPage'
import UpdatePharmaciesPage from './pages/pharmacies/UpdatePharmaciesPage'

import AddTransfersPage from './pages/transfers/AddTransfersPage'
import UpdateTransfersPage from './pages/transfers/UpdateTransfersPage'
import DeleteTransfersPage from './pages/transfers/DeleteTransfersPage'
import TransfersPage from './pages/transfers/TransfersPage'
import SearchTransfersPage from './pages/transfers/SearchTransfersPage'

import AddIncomesPage from './pages/incomes/AddIncomesPage'
import UpdateIncomesPage from './pages/incomes/UpdateIncomesPage'
import DeleteIncomesPage from './pages/incomes/DeleteIncomesPage'
import IncomesPage from './pages/incomes/IncomesPage'
import SearchIncomesPage from './pages/incomes/SearchIncomesPage'

import DeleteExpensesPage from './pages/expenses/DeleteExpensesPage'
import UpdateExpensesPage from './pages/expenses/UpdateExpensesPage'
import ExpensesPage from './pages/expenses/ExpensesPage'
import SearchExpensesPage from './pages/expenses/SearchExpensesPage'
import AddExpensesPage from './pages/expenses/AddExpensesPage'

const AppRouter = () => {
  return (
    <Routes>
        {/* navbar */}
        <Route path='/' element={<Navigation/>}>
            <Route index element={<HomePage/>}/>

            {/* farmacias */}
            <Route path='/farmacias/agregar' element={<AddPharmaciesPage/>}/>
            <Route path='/farmacias/actualizar/:id' element={<UpdatePharmaciesPage/>}/>
            <Route path='/farmacias/eliminar/:id' element={<DeletePharmaciesPage/>}/>
            <Route path='/farmacias/all' element={<PharmaciesPage/>}/>
            <Route path='/farmacias/ver/:id' element={<SearchPharmacyPage/>}/>
            
            {/* centros de distribucion */}
            <Route path='/centros_distribucion/agregar' element={<AddCenterOfDistributionPage/>}/>
            <Route path='/centros_distribucion/actualizar/:id' element={<UpdateCenterOfDistributionPage/>}/>
            <Route path='/centros_distribucion/eliminar/:id' element={<DeleteCenterOfDistributionPage/>}/>
            <Route path='/centros_distribucion/all' element={<CenterOfDistributionPage/>}/>
            <Route path='/centros_distribucion/ver/:id' element={<SearchCenterOfDistributionPage/>}/>

            {/* medicamentos */}
            <Route path='/medicamentos/agregar' element={<AddMedicinesPage/>}/>
            <Route path='/medicamentos/actualizar/:id' element={<UpdateMedicinesPage/>}/>
            <Route path='/medicamentos/eliminar/:id' element={<DeleteMedicinesPage/>}/>
            <Route path='/medicamentos/all' element={<MedicinesPage/>}/>
            <Route path='/medicamentos/ver/:id' element={<SearchMedicinesPage/>}/>

            {/* traspasos */}
            <Route path='/traspasos/agregar' element={<AddTransfersPage/>}/>
            <Route path='/traspasos/actualizar/:id' element={<UpdateTransfersPage/>}/>
            <Route path='/traspasos/eliminar/:id' element={<DeleteTransfersPage/>}/>
            <Route path='/traspasos/all' element={<TransfersPage/>}/>
            <Route path='/traspasos/ver/:id' element={<SearchTransfersPage/>}/>

            {/* ingresos */}
            <Route path='/ingresos/agregar' element={<AddIncomesPage/>}/>
            <Route path='/ingresos/actualizar/:id' element={<UpdateIncomesPage/>}/>
            <Route path='/ingresos/eliminar/:id' element={<DeleteIncomesPage/>}/>
            <Route path='/ingresos/all' element={<IncomesPage/>}/>
            <Route path='/ingresos/ver/:id' element={<SearchIncomesPage/>}/>

            {/* egresos */}
            <Route path='/egresos/agregar' element={<AddExpensesPage/>}/>
            <Route path='/egresos/actualizar/:id' element={<UpdateExpensesPage/>}/>
            <Route path='/egresos/eliminar/:id' element={<DeleteExpensesPage/>}/>
            <Route path='/egresos/all' element={<ExpensesPage/>}/>
            <Route path='/egresos/ver/:id' element={<SearchExpensesPage/>}/>
        </Route>
        <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}

export default AppRouter