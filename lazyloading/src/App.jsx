import { useState } from 'react'

import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RevenueCard title={"Amount pending"} amount={"92,312.30"} orderCount={13}></RevenueCard>
    
         
    
    </>
  )
}

export default App
