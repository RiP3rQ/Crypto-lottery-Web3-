import React from "react";
import { useMetamask } from "@thirdweb-dev/react";

type Props = {};

const Login = (props: Props) => {
  const connectWithMetamask = useMetamask();

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <img
          className="rounded-full h-56 w-56 mb-10"
          src="https://static.vecteezy.com/system/resources/previews/005/519/087/original/grim-reaper-mascot-logo-free-free-vector.jpg"
          alt="logo"
        />
        <h1 className="text-6xl text-white font-bold">RiP3rQ Draw Lottery</h1>
        <h2 className="text-white">
          Get Started by logging in with your Metamask!
        </h2>

        <button
          onClick={() => connectWithMetamask()}
          className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
        >
          Login with Metamask
        </button>
      </div>
    </div>
  );
};

export default Login;
