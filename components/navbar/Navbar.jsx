import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="h-[50px] bg-[#7B4B94] flex justify-center navbar">
      <div className="w-[100%] max-w-[1024px] text-white flex items-center justify-between">
        <Link href="/">
        <span className="font-bold text-[20px]">Travel Booking.</span>
        </Link>
        <div>
          <button className="ml-[20px] border-none px-[10px] py-[5px] cursor-pointer text-[#7B4B94] bg-white">
            Register{" "}
          </button>
          <button className="ml-[20px] border-none px-[10px] py-[5px] cursor-pointer text-[#7B4B94] bg-white">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
