import Button from './components/button'
import './App.css'
import { EnterIcon } from '@radix-ui/react-icons'

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
    </div>

  )
}

export default App
