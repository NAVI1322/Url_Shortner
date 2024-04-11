import { useNavigate } from "react-router-dom"

export function Bottom() {

  const navigate = useNavigate()
  return (
    <div className="flex justify-center bg-Grey backdrop-blur-sm items-center md:w-[1421px] md:h-[148px] w-[479px] h-[148px] lg:w-full text-White font-mid ">
      <div className=""><span className="underline text-blue-900  mr-1 cursor-pointer relative z-10 " onClick={() => navigate('/register')} > Register Now</span>to enjoy Unlimited History</div>
    </div>)
}
