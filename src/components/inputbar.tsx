import Button from "./button"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export const Inputbar = () => {
  const handleClick = () => {
    console.log("Clicked")
  }

  return (
    <div className="w-full sm:w-4/5 md:w-2/5 lg:w-1/2  flex flex-row gap-2 justify-center ">
      <Button onClick={handleClick} variant="secondary" className="w-full border-4 px-[4px] py-[4px]">
        <FontAwesomeIcon className="m-4 mr-2" icon={faLink} />
        <input style={{ fontFamily: 'Light' }} className="bg-Grey w-full focus:outline-none tracking-wide text-md" placeholder="Enter the link here" />
        <Button onClick={handleClick} variant="primary" className="m-0 w-56 hidden sm:flex">
          Shorten Now!
        </Button>
        <Button onClick={handleClick} variant="round" className="sm:hidden">
          <ArrowRightIcon />
        </Button>
      </Button>
    </div>
  )
}

