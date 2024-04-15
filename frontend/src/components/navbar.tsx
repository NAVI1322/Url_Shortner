import { EnterIcon } from "@radix-ui/react-icons"
import Button from "./button"
import { useNavigate } from "react-router-dom"
import { useEffect , useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ToggleDarklight } from "./Toggle_darklight"


export const Navbar = ({theme,handleCheckboxChange, isChecked}:any ) => {

  const navigate = useNavigate()
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
    <div className={`flex flex-row items-center justify-between p-10 ${theme && "dark"}`}>
      <div className="text-4xl font-sfBold bg-gradient-to-r dark:from-primaryPink dark:to-primaryBlue from-primaryPink to-blue-500 inline-block p-1 bg-clip-text text-transparent">Linkly</div>
     <div className= {user?"flex sm:gap-5 gap-0":"hidden"}>
        <div onClick={() => navigate('/login')}> <Button variant="secondary" >Login <EnterIcon className="w-5 h-full" /></Button></div>
        <div onClick={() => navigate('/register')}>  <Button variant="primary" className="mx-0 hidden sm:block" >Register Now</Button></div>
      </div>
       <div className="md:hidden">
      <ToggleDarklight ToggleDarklight handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} theme={theme}  />
       </div>
    </div>
  )
}
