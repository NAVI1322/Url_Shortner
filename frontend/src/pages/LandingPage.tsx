import { Navbar } from '../components/navbar'
import { Bottom } from '../components/Bottom'
import { Hero } from '../components/Hero'
import { Table } from '../components/Table'
import { ToggleDarklight } from '../components/Toggle_darklight'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'


function LandingPage() {


const [user,Setuser] = useState(false);

const [params] = useSearchParams();

  const id = params.get("id")
  useEffect(()=>{
    if(!id)
  {
    Setuser(true)
  }

  })

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
      <div className= {user?"fixed bottom-0 w-full flex justify-center sm:justify-center bg-gradient-to-b from-transparent/70 to-tableheadgrey":"hidden"}>
        <Bottom />
      </div>
    </div>
  )
}

export default LandingPage;
