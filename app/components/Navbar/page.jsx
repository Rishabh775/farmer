import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function page() {
  return (
    <div className=" ">
      <div className=" flex justify-between items-center px-20 py-6">
        <div className=" flex items-center gap-1">
          <Image src={logo} className=" h-full w-full" alt="logo" />
          <h1 className=" font-black text-4xl">Suvidha</h1>
        </div>
        <ul className=" flex gap-6 uppercase text-xl">
          <li>Home</li>
          <li>Services</li>
          <li>Help</li>
          <li>Contact</li>
          <li>Admin</li>
        </ul>
        <div className="flex gap-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2
            px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2
            px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
