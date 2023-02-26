import React from "react";
import { PropagateLoader } from "react-spinners";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div>
      <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
        <div className="flex items-center space-x-2 mb-10">
          <img
            className="rounded-full h-20 w-20"
            src="https://static.vecteezy.com/system/resources/previews/005/519/087/original/grim-reaper-mascot-logo-free-free-vector.jpg"
            alt="logo"
          />
          <h1 className="text-lg text-white font-bold">
            Loading the RiP3rQ Draw Lottery
          </h1>
        </div>
        <PropagateLoader color="white" size={30} />
      </div>
    </div>
  );
};

export default Loading;
