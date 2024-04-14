import { Navbar } from '../components/navbar'
import { Bottom } from '../components/Bottom'
import { Hero } from '../components/Hero'
import { Table } from '../components/Table'
import { ToggleDarklight } from '../components/Toggle_darklight'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import '../index.css';



function LandingPage({ handleCheckboxChange, isChecked, theme }: any) {

  const [user, Setuser] = useState(false);

  const [params] = useSearchParams();

  const id = params.get("id")
  useEffect(() => {
    if (!id) {
      Setuser(true)
    }
  })



  return (


    <div>
      <Navbar theme={theme} />
      <div className="md:mt-10 md:mb-10 mt-0 mb-0">
        <ToggleDarklight handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} theme={theme} />
        <Hero theme={theme} />
      </div>
      <div className="justify-center">
        <Table theme={theme} />
      </div>

      <div className={user ? "fixed bottom-0 w-full flex justify-center sm:justify-center bg-gradient-to-b from-transparent/70 to-tableheadgrey" : "hidden"}>
        <Bottom theme={theme} />
      </div>
    </div>

  )
}

export default LandingPage;
