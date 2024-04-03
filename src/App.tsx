import Button from './components/button'
import './App.css'
import { EnterIcon } from '@radix-ui/react-icons'
import { AppBar } from './comps/AppBar'
import { Bottom } from './comps/Bottom'
import { Hero } from './comps/Hero'

import { Table } from './comps/Table'
import { ToggleDarklight } from './comps/Toggle_darklight'


function handleClick() {
  console.log("Clicked")
}
function App() {
  return (
    <div>
      <Button onClick={handleClick} variant='primary'>Login<EnterIcon className='w-5 h-full' /></Button>
      <Button onClick={handleClick} variant='primary-disabled'>Login<EnterIcon className='w-5 h-full' /></Button>
      <Button onClick={handleClick} variant='secondary'>Login<EnterIcon className='w-5 h-full' /></Button>
      <Button onClick={handleClick} variant='secondary-disabled'>Login<EnterIcon className='w-5 h-full' /></Button>
      <AppBar />
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
