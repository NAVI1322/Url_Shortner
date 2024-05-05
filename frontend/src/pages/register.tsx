import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Loading } from "@/components/Loading";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [loading, Setloading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  setTimeout(() => {
    Setloading(false);
  }, 3000);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        {
          firstname: firstName,
          lastname: lastName,
          email: email.toLowerCase(),
          password: password,
        }
      );

      // Assuming the token is received in the response data as `token`
      const token = response.data.token;
      localStorage.setItem("token", token);

      // Set the authorization header for subsequent requests

      // Now you can navigate to the dashboard
      navigate("/dashboard?id=" + response.data.id);
      console.log("User created", response.data);
    } catch (error) {
      console.error("Error creating user", error);
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-row justify-between bg-[#18181a] w-full h-screen">
          <div className="w-[50%] h-screen  hidden sm:block">
            <img
              className="w-[100%] h-screen object-cover bg-fixed"
              src="../../public/blur.jpg"
              alt="no img"
            />
            <div className="text-4xl m-12 font-sfBold text-neutral-100 inline-block p-1 bg-clip-text absolute top-0 left-0">
              Linkly
            </div>
          </div>
          <div className="flex flex-row items-center justify-center sm:w-[50%] w-full h-screen bg-[#09090b]">
          <div className="text-4xl my-5 mr-6 font-sfBold text-neutral-100 absolute p-1 bg-clip-text md:hidden top-1 left-9">
              Linkly
            </div>
            <div className="flex flex-col items-center justify-center"> 
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-center py-8 px-12 rounded-lg">
                  <div className="text-slate-100 font-semi text-4xl">
                    Create an account
                  </div>
                  <p className="text-neutral-400 font-Regular text-xl">
                    Enter your details below to create your account
                  </p>
                  <div className="flex flex-row mt-4">
                    <div>
                      <p className="text-slate-100 font-Regular text-xl mb-2">
                        First name
                      </p>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        className="w-[90%] bg-[#09090b] text-neutral-400 text-xl font-Regular outline outline-1 outline-neutral-700 p-3 rounded-lg"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <p className="text-slate-100 font-Regular text-xl mb-2">
                        Last name
                      </p>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        className="w-full bg-[#09090b] text-neutral-400 text-xl font-Regular outline outline-1 outline-neutral-700 p-3 rounded-lg"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="w-full mt-4">
                    <p className="text-slate-100 font-Regular text-xl mb-2">
                      Email
                    </p>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="w-full bg-[#09090b] text-neutral-400 text-xl font-Regular outline outline-1 outline-neutral-700 p-3 rounded-lg"
                      placeholder="John@example.com"
                    />
                  </div>
                  <div className="w-full mt-4">
                    <p className="text-slate-100 font-Regular text-xl mb-2">
                      Password
                    </p>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="w-full bg-[#09090b] text-neutral-400 text-xl font-Regular outline outline-1 outline-neutral-700 p-3 rounded-lg"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full mt-4">
                    <button
                      type="submit"
                      className="text-[#181E298] bg-neutral-100 font-semi text-xl p-3 w-full rounded-lg dark:text-black text-white "
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="w-full mt-4">
                    <button className="flex flex-row items-center justify-center gap-2 text-neutral-100 font-semi text-xl p-3 w-full rounded-lg outline outline-1 outline-neutral-700">
                      <GitHubLogoIcon className="w-6 h-6" />
                      GitHub
                    </button>
                  </div>
                  <div className="flex flex-row justify-center w-full mt-4 font-Regular text-xl text-slate-100">
                    <p>
                      Already have an account?{" "}
                      <a  href='/login' className="underline">Sign In</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
