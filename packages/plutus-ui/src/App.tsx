import './App.css'

import { Transaction } from '@plutus/types/src/transaction'

function App() {
  const trx = new Transaction({ category: 'Food & Drinks', date: new Date(), username: 'sanjay', title: 'Snacks', amount: 20 })
  return (
    <div>
      {JSON.stringify(trx)}
    </div>
  )
}

export default App
