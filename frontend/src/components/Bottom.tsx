import { useNavigate } from "react-router-dom"

export function Bottom({theme}:any) {

  const navigate = useNavigate()
  return (
    <div className={`flex justify-center dark:bg-Grey  dark:backdrop-blur-sm backdrop-blur-sm items-center md:w-[1421px] md:h-[148px] w-[479px] h-[148px] lg:w-full dark:text-white font-mid ${theme && "dark"} `}>
      <div className=""><span className="underline dark:text-blue-900 text-blue-600  mr-1 cursor-pointer relative z-10 " onClick={() => navigate('/register')} > Register Now</span>to enjoy Unlimited History</div>
    </div>)
}
