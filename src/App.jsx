import AppRouter from './AppRouter'
import { PharmaciesProvider } from './context/PharmaciesProvider'
import { CenterOfDistributionProvider } from './context/CenterOfDistributionProvider'
import { ExpensesProvider } from './context/ExpensesProvider'
import { IncomesProvider } from './context/IncomesProvider'
import { TransfersProvider } from './context/TransfersProvider'
import { MedicinesProvider } from './context/MedicinesProvider'
import { StockProvider } from './context/StockProvider'

function App() {

  return (

    <CenterOfDistributionProvider>

      <ExpensesProvider>

        <IncomesProvider>

          <TransfersProvider>

            <MedicinesProvider>

              <StockProvider>

                <PharmaciesProvider>

                  <AppRouter />

                </PharmaciesProvider>

              </StockProvider>

            </MedicinesProvider>

          </TransfersProvider>

        </IncomesProvider>

      </ExpensesProvider>

    </CenterOfDistributionProvider>
  )
}

export default App
