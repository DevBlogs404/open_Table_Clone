"use client";

export default function ReservationCard() {
  return (
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
      <div className="border-b pb-2 font-bold text-center">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="partySize">Party size</label>
        <select name="" id="partySize" className="py-3 border-b font-light">
          <option value="1">1 person</option>
          <option value="2">2 people</option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="date">Date</label>
          <input type="text" className="py-3 border-b font-light w-28" />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="date">Time</label>
          <select name="" id="" className="py-3 border-b font-light">
            <option value="">7:30pm</option>
            <option value="">9:30pm</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-red-600 rounded px-4 text-white w-full font-bold h-16">
          Find a Time
        </button>
      </div>
    </div>
  );
}
