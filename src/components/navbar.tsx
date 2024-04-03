import { EnterIcon } from "@radix-ui/react-icons"
import Button from "./button"


export const Navbar = () => {

  const handleClick = () => {
    console.log("clicked")
  }

  return (
    <div className="flex flex-row items-center justify-between p-10">
      <div className="text-4xl font-extrabold bg-gradient-to-r from-primaryPink to-primaryBlue inline-block p-1 bg-clip-text text-transparent">Linkly</div>
      <div className="flex gap-5">
        <Button variant="secondary" onClick={handleClick}>Login <EnterIcon className="w-5 h-full" /></Button>
        <Button variant="primary" className="mx-0 hidden sm:block" onClick={handleClick}>Register Now</Button>
      </div>
    </div>
  )
}
