import { EnterIcon } from "@radix-ui/react-icons";


export function Button() {
  return (
    <button className="flex flex-row items-center justify-center bg-primaryBlue font-regular font-semibold text-white px-[25px] py-[12px] m-4 rounded-full gap-1 text-base">Login<EnterIcon /> </button>
  )
}
