import React from "react";

export default function MailList() {
  return (
    <div className="w-[100%] mt-[50px] bg-[#7B4B94] text-white flex flex-col items-center gap-[20px] p-[50px]">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input
          type="text"
          placeholder="Your Email"
          className="w-[300px] h-[50px] p-[10px] border-none mr-[10px] rounded-sm text-black outline-none"
        />
        <button className="h-[50px] bg-[#D287FA] text-white font-medium border-none rounded-sm cursor-pointer px-4">
          Subscribe
        </button>
      </div>
    </div>
  );
}
