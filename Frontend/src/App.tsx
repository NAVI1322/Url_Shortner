
import { Navbar } from './components/navbar'
import { Bottom } from './components/Bottom'
import { Hero } from './components/Hero'

import { Table } from './components/Table'
import { ToggleDarklight } from './components/Toggle_darklight'


function App() {
  return (
    <div>
      <Navbar />
      <div className="md:mt-10 md:mb-10 mt-0 mb-0">
        <ToggleDarklight />
        <Hero />
      </div>
      <div className="justify-center">
        <Table />
      </div>
      <div className="fixed bottom-0 w-full flex justify-center sm:justify-center bg-gradient-to-b from-transparent/70 to-tableheadgrey">
        <Bottom />
      </div>
    </div>
  )
}

export default App;
