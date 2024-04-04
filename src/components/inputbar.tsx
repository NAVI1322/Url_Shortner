import Button from "./button"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Inputbar = () => {
  const handleClick = () => {
    console.log("licked")
  }
  return (
    <div className="w-1/2 flex flex-row gap-2 justify-center" >
      <Button onClick={handleClick} variant="secondary" className="w-full border-4 px-[4px] py-[4px] sm:">
        <FontAwesomeIcon className="m-4" icon={faLink} /><input style={{ fontFamily: 'Light' }} className="bg-Grey w-full focus:outline-none tracking-wide text-xl" placeholder="Enter the link here" />
        <Button onClick={handleClick} variant="primary" className="m-0 w-56">Shorten Now!</Button>
      </Button>
    </div>
  )
}
