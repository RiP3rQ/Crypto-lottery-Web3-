import React from "react";
import NavButton from "./NavButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      {/* LEFT SIDE */}
      <div className="flex items-center space-x-2">
        <img
          className="rounded-full h-20 w-20"
          src="https://static.vecteezy.com/system/resources/previews/005/519/087/original/grim-reaper-mascot-logo-free-free-vector.jpg"
          alt="logo"
        />

        <div>
          <h1 className="text-lg text-white font-bold">RiP3rQ Lottery</h1>
          <p className="text-xs text-emerald-500 truncate">User: RiP3rQ</p>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="hidden md:flex md:col-span-3 items-center justify-center rounded-sm">
        <div className="bg-[#0A1F1c] p-4 space-x-2">
          <NavButton title="Buy Tickets" isActive />
          <NavButton title="Logout" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />
        <span className="md:hidden">
          <NavButton title="Logout" />
        </span>
      </div>
    </div>
  );
};

export default Header;
