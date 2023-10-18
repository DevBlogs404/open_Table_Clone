"use client";
import { partySize as PartySizes, times } from "@/data/index";
import { useState } from "react";
import DatePicker from "react-datepicker";
import useAvailability from "@/hooks/useAvailability";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { convertToDisplayTime } from "@/utils/convertToDisplayTime";

export default function ReservationCard({
  openTime,
  closeTime,
  slug,
}: {
  openTime: string;
  closeTime: string;
  slug: string;
}) {
  const { loading, error, data, fetchAvailability } = useAvailability();

  // console.log(data);

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState("2");
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split("T")[0]);
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const handleClick = () => {
    fetchAvailability({
      slug,
      day,
      time,
      partySize,
    });
  };

  const filterTimeByRestaurantOpenWindow = () => {
    let timesInWindow: typeof times = [];

    let isWithinWindow = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesInWindow.push(time);
      }
      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });

    return timesInWindow;
  };

  return (
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
      <div className="border-b pb-2 font-bold text-center">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="partySize">Party size</label>
        <select
          name=""
          id="partySize"
          className="py-3 border-b font-light"
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
        >
          {PartySizes.map((size) => (
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
          <select
            name=""
            id=""
            className="py-3 border-b font-light"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {filterTimeByRestaurantOpenWindow().map((time) => (
              <option key={time.time} value={time.time}>
                {time.displayTime}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button
          className="bg-red-600 rounded px-4 text-white w-full font-bold h-16"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? <CircularProgress color="inherit" /> : "Find a Time"}
        </button>
      </div>
      {data && data.length ? (
        <div className="mt-4">
          <p className="text-md">Select a Time</p>
          <div className="flex flex-wrap mt-2">
            {data.map((d) => {
              return d.available ? (
                <Link
                  href={`/reserve/${slug}?date=${day}T${d.time}&partySize=${partySize}`}
                  className="p-2 w-24 bg-red-600 rounded text-center text-white cursor-pointer mb-3 mr-3"
                >
                  <p className="text-sm font-bold">
                    {convertToDisplayTime(d.time)}
                  </p>
                </Link>
              ) : (
                <p className="bg-gray-300 w-24 p-2 rounded mb-3 mr-3"></p>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
