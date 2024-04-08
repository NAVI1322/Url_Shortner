import { GitHubLogoIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useState } from "react";

export default function Register() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/api/v1/auth/register", {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      })
      console.log("User created", res.data)
    } catch (error: any) {
      console.error("Error creating user", error.res?.data)
    }
  }

  return (
    <div className="flex flex-row justify-between bg-[#18181a] w-full h-screen">
      <div className="w-[50%] h-screen m-12">
        <div className="text-4xl font-sfBold text-neutral-100 inline-block p-1 bg-clip-text">Linkly</div>
      </div>
      <div className="flex flex-row items-center justify-center w-[50%] h-screen bg-[#09090b]">
        <div className="flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center p-8 rounded-lg">
              <div className="text-slate-100 font-semi text-4xl">Create an account</div>
              <p className="text-neutral-400 font-Regular text-xl">Enter your details below to create your account</p>
              <div className="flex flex-row mt-4">
                <div>
                  <p className="text-slate-100 font-Regular text-xl mb-2">First name</p>
                  <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} className="w-[90%] bg-[#09090b] text-neutral-400 text-xl font-Regular outline outline-1 outline-neutral-700 p-3 rounded-lg" placeholder="John" />
                </div>
                <div>
                  <p className="text-slate-100 font-Regular text-xl mb-2">Last name</p>
                  <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} className="w-full bg-[#09090b] text-neutral-400 text-xl font-Regular outline outline-1 outline-neutral-700 p-3 rounded-lg" placeholder="Doe" />
                </div>
              </div>
              <div className="w-full mt-4">
                <p className="text-slate-100 font-Regular text-xl mb-2">Email</p>
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="w-full bg-[#09090b] text-neutral-400 text-xl font-Regular outline outline-1 outline-neutral-700 p-3 rounded-lg" placeholder="John@example.com" />
              </div>
              <div className="w-full mt-4">
                <p className="text-slate-100 font-Regular text-xl mb-2">Password</p>
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="w-full bg-[#09090b] text-neutral-400 text-xl font-Regular outline outline-1 outline-neutral-700 p-3 rounded-lg" placeholder="" />
              </div>
              <div className="w-full mt-4">
                <button type="submit" className="text-Grey bg-slate-100 font-semi text-xl p-3 w-full rounded-lg ">Sign up</button>
              </div>
              <div className="w-full mt-4">
                <button className="flex flex-row items-center justify-center gap-2 text-neutral-100 font-semi text-xl p-3 w-full rounded-lg outline outline-1 outline-neutral-700"><GitHubLogoIcon className="w-6 h-6" />GitHub</button>
              </div>
              <div className="flex flex-row justify-center w-full mt-4 font-Regular text-xl text-slate-100">
                <p>Already have an account? <span className="underline">Sign In</span></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

