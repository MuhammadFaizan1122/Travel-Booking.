import Link from "next/link";

const SearchItem = () => {
  return (
    <div className="border-[1px] border-[lightgrey] p-[10px] rounded flex justify-between gap-[20px] mt-[20px]">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="w-[200px] h-[200px] object-cover"
      />
      <div className="flex flex-col gap-[10px] flex-2">
        <h1 className="text-[20px] text-[#0071c2]">Tower Street Apartments</h1>
        <span className="text-[12px]">500m from center</span>
        <span className="text-[12px] bg-[#008009] text-white w-max p-[3px] rounded">
          Free airport taxi
        </span>
        <span className="text-[12px] font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-[12px]">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="text-[12px] text-[#008009] font-bold">Free cancellation </span>
        <span className="text-[12px] text-[#008009]">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="font-medium">Excellent</span>
          <button className="bg-[#7B4B94] text-white p-[5px] font-bold border-none">8.9</button>
        </div>
        <div className="items-right flex flex-col gap-[5px]">
          <span className="text-[24px]">$112</span>
          <span className="text-[12px] text-[grey]">Includes taxes and fees</span>
          <Link href="/hotels/abc">
          <button className="text-white font-bold bg-[#7B4B94] px-[5px] py-[10px] border-none cursor-pointer rounded">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default SearchItem;