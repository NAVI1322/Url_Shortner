import Button from "./button"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Inputbar = () => {
  const handleClick = () => {
    console.log("licked")
  }
  return (
    <div className="w-1/2 flex justify-center" >
      <Button onClick={handleClick} variant="secondary" className="w-full border-4 rounded-[48px] ">
        <FontAwesomeIcon className="" icon={faLink} /><input className="bg-Grey w-full font-Thin text-base" placeholder="Enter the link here" />
        <Button onClick={handleClick} variant="primary" className="m-0 w-52">Shorten Now!</Button>
      </Button>
    </div>
  )
}
