"use client";
import { partySize, times } from "@/data/index";
import { useState } from "react";
import DatePicker from "react-datepicker";

export default function ReservationCard({
  openTime,
  closeTime,
}: {
  openTime: string;
  closeTime: string;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  return (
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
      <div className="border-b pb-2 font-bold text-center">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="partySize">Party size</label>
        <select name="" id="partySize" className="py-3 border-b font-light">
          {partySize.map((size) => (
            <option value={size.value} key={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="date">Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleChangeDate}
            className="py-3 border-b w-24 font-light"
            wrapperClassName="w-[48%]"
            dateFormat={"MMMM d"}
          />
          {/* <input type="text" className="py-3 border-b font-light w-28" /> */}
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="date">Time</label>
          <select name="" id="" className="py-3 border-b font-light">
            {times.map((time) => (
              <option key={time.time} value={time.time}>
                {time.displayTime}
              </option>
            ))}
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
