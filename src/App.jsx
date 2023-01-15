import AppRouter from './AppRouter'
import { PharmaciesProvider } from './context/PharmaciesProvider'
import { CenterOfDistributionProvider } from './context/CenterOfDistributionProvider'
import { ExpensesProvider } from './context/ExpensesProvider'
import { IncomesProvider } from './context/IncomesProvider'
import { TransfersProvider } from './context/TransfersProvider'
import { MedicinesProvider } from './context/MedicinesProvider'

function App() {

  return (

    <CenterOfDistributionProvider>

      <ExpensesProvider>

        <IncomesProvider>

          <TransfersProvider>

            <MedicinesProvider>

              <PharmaciesProvider>

                <AppRouter />

              </PharmaciesProvider>

            </MedicinesProvider>

          </TransfersProvider>

        </IncomesProvider>

      </ExpensesProvider>

    </CenterOfDistributionProvider>
  )
}

export default App
