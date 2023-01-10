import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faPerson,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { Link } from "next/Link";
import Details from "../../Atoms/flightsData";
import { useRouter } from "next/router";

export default function Header({ type }) {
  
  const [openDate, setOpenDate] = useState(false);
  const [optionOpen, setOptionOpen] = useState(false);
  const [flights, setFligths] = useRecoilState(Details);
  const router = useRouter();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [destination, setDestination] = useState("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 0,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    router.push('/hotels')
    setFligths({ date, destination, options });
  };

  return (
    <div className="bg-[#7B4B94] flex justify-center text-white">
      <div
        className={`w-[100%] max-w-[1024px] mt-[20px] mr-[0px] ml-[0px] ${
          type == "list" ? "mb-[0px]" : "mb-[100px]"
        }`}
      >
        <div className="flex gap-[40px] mb-[50px]">
          <div className="flex items-center gap-[10px] border-[1px] border-transparent active:border-white p-[10px] active:rounded-2xl cursor-pointer">
            <FontAwesomeIcon icon={faBed} className="w-[20px] text-[22px]" />
            <span>Stays</span>
          </div>
          <div className="flex items-center gap-[10px] border-[1px] border-transparent active:border-white p-[10px] active:rounded-2xl cursor-pointer">
            <FontAwesomeIcon icon={faPlane} className="w-[20px] text-[22px]" />
            <span>Flights</span>
          </div>
          <div className="flex items-center gap-[10px] border-[1px] border-transparent active:border-white p-[10px] active:rounded-2xl cursor-pointer">
            <FontAwesomeIcon icon={faCar} className="w-[20px] text-[22px]" />
            <span>Car Rentals</span>
          </div>
          <div className="flex items-center gap-[10px] border-[1px] border-transparent active:border-white p-[10px] active:rounded-2xl cursor-pointer">
            <FontAwesomeIcon icon={faBed} className="w-[20px] text-[22px]" />
            <span>Attractions</span>
          </div>
          <div className="flex items-center gap-[10px] border-[1px] border-transparent active:border-white p-[10px] active:rounded-2xl cursor-pointer">
            <FontAwesomeIcon icon={faTaxi} className="w-[20px] text-[22px]" />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="text-[36px] font-bold">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="my-[20px] text-[20px]">
              Get rewards for your travels - unlock instant savings of 10% or
              more with a free tavelbooking account
            </p>
            <button className="bg-[#D287FA] px-[15px] py-[10px] border-none outline-none text-white">
              Sign in / Register
            </button>
            <div className="h-[30px] bg-white border-[3px] border-[yellow] flex items-center justify-around py-[30px] rounded-lg mt-[65px] w-[100%] max-w-[1024px] absolute">
              <div className="flex items-center gap-[10px]">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="w-[14px] text-[18px] text-[grey]"
                />
                <input
                  type="text"
                  placeholder="Where are you going ?"
                  className=" text-[grey] border-none outline-none"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-[10px]">
                <FontAwesomeIcon
                  icon={faTaxi}
                  className="w-[14px] text-[18px] text-[grey]"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="text-[grey] cursor-pointer"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="absolute top-[60px] z-20"
                  />
                )}
              </div>
              <div className="flex items-center gap-[10px]">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="w-[14px] text-[18px] text-[grey]"
                />
                <span
                  className="text-[grey] cursor-pointer"
                  onClick={() => setOptionOpen(!optionOpen)}
                >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                {optionOpen && (
                  <div className="absolute top-[50px] bg-white text-[gray] rounded-md options z-20">
                    <div className="flex w-[150px] justify-between m-[10px]">
                      <span>Adult</span>
                      <div className="flex gap-[10px] items-center text-[12px] text-black">
                        <button
                          className="w-[20px] h-[20px] border-[1px] border-[#7B4B94] cursor-pointer text-[#7B4B94]"
                          onClick={() => handleOption("adult", "d")}
                          disabled={options.adult < 2}
                        >
                          -
                        </button>
                        <span>{options.adult}</span>
                        <button
                          className="w-[20px] h-[20px] border-[1px] border-[#7B4B94] cursor-pointer text-[#7B4B94]"
                          onClick={() => handleOption("adult", "i")}
                          disabled={options.adult > 20}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex w-[150px] justify-between m-[10px]">
                      <span>Children</span>
                      <div className="flex gap-[10px] items-center text-[12px] text-black">
                        <button
                          className="w-[20px] h-[20px] border-[1px] border-[#7B4B94] cursor-pointer text-[#7B4B94]"
                          onClick={() => handleOption("children", "d")}
                          disabled={options.children < 1}
                        >
                          -
                        </button>
                        <span>{options.children}</span>
                        <button
                          className="w-[20px] h-[20px] border-[1px] border-[#7B4B94] cursor-pointer text-[#7B4B94]"
                          onClick={() => handleOption("children", "i")}
                          disabled={options.children > 9}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex w-[150px] justify-between m-[10px]">
                      <span>Room</span>
                      <div className="flex gap-[10px] items-center text-[12px] text-black">
                        <button
                          className="w-[20px] h-[20px] border-[1px] border-[#7B4B94] cursor-pointer text-[#7B4B94]"
                          onClick={() => handleOption("room", "d")}
                          disabled={options.room < 2}
                        >
                          -
                        </button>
                        <span>{options.room}</span>
                        <button
                          className="w-[20px] h-[20px] border-[1px] border-[#7B4B94] cursor-pointer text-[#7B4B94]"
                          onClick={() => handleOption("room", "i")}
                          disabled={options.room > 5}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex">
                  <button
                    className="bg-[#D287FA] px-[15px] py-[10px] border-none outline-none text-white"
                    onClick={() => handleSearch()}
                  >
                    Search
                  </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
