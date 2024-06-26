import { Navbar } from '../components/navbar'
import { Bottom } from '../components/Bottom'
import { Hero } from '../components/Hero'
import { Table } from '../components/Table'
import { ToggleDarklight } from '../components/Toggle_darklight'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import '../index.css'



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


    <div className='h-screen'>
      <Navbar theme={theme}  ToggleDarklight handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} />
      <div className="md:mt-10 md:mb-10 mt-0 mb-0">
        <div className='fixed right-0 rotate-90 top-64 hidden md:flex '><ToggleDarklight ToggleDarklight handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} theme={theme}  /></div>
        <Hero theme={theme} />
      </div>
      <div className="justify-center  dark:bg-tableheadgrey bg-white">
        <Table theme={theme} />
      </div>

      <div className={user ? "fixed bottom-0 w-full flex justify-center sm:justify-center  bg-gradient-to-b from-transparent/70 to-slate-100  dark:bg-gradient-to-b dark:from-transparent/70 dark:to-tableheadgrey" : "hidden"}>
        <Bottom theme={theme} />
      </div>
    </div>

  )
}

export default LandingPage;
