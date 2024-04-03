import './App.css'
import Button from './components/button'
import { Navbar } from './components/navbar'
import { Bottom } from './components/Bottom'
import { Hero } from './components/Hero'

import { Table } from './components/Table'

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-10 mb-10">
        <Hero />
      </div>
      <Table />
      <div className="fixed bottom-0 w-full flex justify-center sm:justify-center bg-gradient-to-b from-tableheadgrey to-transparent">
        <Bottom />
      </div>
    </div>
  )
}

export default App
