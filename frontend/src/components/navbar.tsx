import { EnterIcon } from "@radix-ui/react-icons"
import Button from "./button"
import { useNavigate } from "react-router-dom"
import { useEffect , useState } from "react"
import { useSearchParams } from "react-router-dom"


export const Navbar = () => {

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
    <div className="flex flex-row items-center justify-between p-10">
      <div className="text-4xl font-sfBold bg-gradient-to-r from-primaryPink to-primaryBlue inline-block p-1 bg-clip-text text-transparent">Linkly</div>
      {user?<div className="flex sm:gap-5 gap-0">
        <div onClick={() => navigate('/login')}> <Button variant="secondary" >Login <EnterIcon className="w-5 h-full" /></Button></div>
        <div onClick={() => navigate('/register')}>  <Button variant="primary" className="mx-0 hidden sm:block" >Register Now</Button></div>
      </div>
      :<div> </div>
      }
    </div>
  )
}
