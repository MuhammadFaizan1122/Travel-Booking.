import Navbar from "../components/navbar/Navbar";
import Header from "../components/Header/Header";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useRouter } from "next/router";
import SearchItem from "../components/searchItem/searchItems";
import Footer from "../components/Footer/Footer";
import MailList from "../components/MailList/MailList";
import Details from "../Atoms/flightsData";

const Hotels = () => {
  const [flights, setFligths] = useRecoilState(Details);
  const [destination, setDestination] = useState(flights.destination);
  const [date, setDate] = useState(flights.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(flights.options);

  return (
    <div>
      <div>
        <Navbar />
        <Header type="list" />
        <div className="flex justify-center mt-[20px]">
          <div className="w-[100%] max-w-[1024px] flex gap-[20px]">
            <div className="flex-1 bg-[#7B4B94] p-[10px] rounded-md sticky top-[10px] h-max">
              <h1 className="text-[20px] text-white mb-[10px]">Search</h1>
              <div className="flex flex-col gap-[5px] mb-[10px]">
                <label className="text-[20px] text-white">Destination</label>
                <input
                  placeholder={destination}
                  type="text"
                  className="h-[30px] border-none p-[5px]"
                />
              </div>
              <div className="flex flex-col gap-[5px] mb-[10px]">
                <label className="text-[20px] text-white">Check-in Date</label>
                <span
                  className="h-[30px] p-[5px] bg-white flex justify-center cursor-pointer"
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </div>
              <div className="flex flex-col gap-[5px] mb-[10px]">
                <label className="text-[20px] text-white">Options</label>
                <div className="p-[10px]">
                  <div className="flex justify-between mb-[10px] text-white text-[12px]">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      className=" border-none text-[12px] text-black"
                    />
                  </div>
                  <div className="flex justify-between mb-[10px] text-white text-[12px]">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className="text-[12px] text-black" />
                  </div>
                  <div className="flex justify-between mb-[10px] text-white text-[12px]">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="text-[12px] text-black"
                      placeholder={options?.adult}
                    />
                  </div>
                  <div className="flex justify-between mb-[10px] text-white text-[12px]">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="text-[12px] text-black"
                      placeholder={options?.children}
                    />
                  </div>
                  <div className="flex justify-between mb-[10px] text-white text-[12px]">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="text-[12px] text-black"
                      placeholder={options?.room}
                    />
                  </div>
                </div>
              </div>
              <button className="p-[10px] bg-[#D287FA] text-white border-none w-[100%] font-medium cursor-pointer">
                Search
              </button>
            </div>
            <div className="flex-3">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] flex flex-col	items-center gap-[30px]">
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotels;
