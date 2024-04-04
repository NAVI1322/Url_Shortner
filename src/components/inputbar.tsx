import Button from "./button"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

export const Inputbar = () => {
  const handleClick = () => {
    console.log("licked")
  }
  return (
    <div className="md:w-1/2  md:h-20  flex justify-center w-[378px] h-16" >
    <Button onClick={handleClick} variant="secondary" className="w-full h-100 border-1 rounded-[48px] ">
      <FontAwesomeIcon className="md:inline hidden  " icon={faLink} />
      <input className="bg-Grey w-full p-4 outline-none md:text-xl font-thin text-sm" placeholder="Enter the link here" />
      {/* Use a conditional statement to display the icon or the button */}
      <div className="md:hidden ">
        <Button onClick={handleClick} variant="primary" className="w-10 h-10 rounded-full " >
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </Button>
      </div>
      <div className="hidden md:inline ">
        <Button onClick={handleClick} variant="primary" className="m-0 md:w-52  md:text-lg text-sm ">Shorten Now!</Button>
      </div>
    </Button>
  </div>
  )
}
  