import { GitHubLogoIcon } from "@radix-ui/react-icons";



function Login() {

  return (
    <div className="flex flex-row justify-between bg-[#18181a] w-full h-screen">
      <div className="w-[50%] h-screen m-12">
        <div className="text-4xl font-sfBold text-neutral-100 inline-block p-1 bg-clip-text text-transparent">Linkly</div>
      </div>
      <div className="flex flex-row items-center justify-center w-[50%] h-screen bg-[#09090b]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center p-8 rounded-lg">
            <div className="text-slate-100 font-semi text-4xl">Create an account</div>
            <p className="text-neutral-400 font-Regular text-xl">Enter your details below to create your account</p>
            <div className="flex flex-row mt-4">
              <div>
                <p className="text-slate-100 font-Regular text-xl mb-2">First name</p>
                <input className="w-[90%] bg-[#09090b] text-neutral-400 text-xl font-Regular outline outline-1 outline-neutral-700 p-3 rounded-md" placeholder="John" />
              </div>
              <div>
                <p className="text-slate-100 font-Regular text-xl mb-2">Last name</p>
                <input className="w-full bg-[#09090b] text-neutral-400 text-xl font-Regular outline outline-1 outline-neutral-700 p-3 rounded-md" placeholder="Doe" />
              </div>
            </div>
            <div className="w-full mt-4">
              <p className="text-slate-100 font-Regular text-xl mb-2">Email</p>
              <input className="w-full bg-[#09090b] text-neutral-400 text-xl font-Regular outline outline-1 outline-neutral-700 p-3 rounded-md" placeholder="John@example.com" />
            </div>
            <div className="w-full mt-4">
              <p className="text-slate-100 font-Regular text-xl mb-2">Password</p>
              <input className="w-full bg-[#09090b] text-neutral-400 text-xl font-Regular outline outline-1 outline-neutral-700 p-3 rounded-md" placeholder="" />
            </div>
            <div className="w-full mt-4">
              <button className="text-Grey bg-slate-100 font-semi text-xl p-3 w-full rounded-md ">Sign up</button>
            </div>
            <div className="w-full mt-4">
              <button className="flex flex-row items-center justify-center gap-2 text-neutral-100 font-semi text-xl p-3 w-full rounded-md outline outline-1 outline-neutral-700"><GitHubLogoIcon className="w-6 h-6" />GitHub</button>
            </div>
            <div className="flex flex-row justify-center w-full mt-4 font-Regular text-xl text-slate-100">
              <p>Already have an account? <span className="underline">Sign In</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
