"use client";
import useReservation from "@/hooks/useReservation";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function Form({
  slug,
  partySize,
  date,
}: {
  slug: string;
  partySize: string;
  date: string;
}) {
  const [inputs, setInputs] = useState({
    bookerFirstName: "",
    bookerLastName: "",
    bookerEmail: "",
    bookerPhone: "",
    bookerOcassion: "",
    bookerRequest: "",
  });

  const [day, time] = date.split("T");
  const [disabled, setDisabled] = useState(true);
  const [didBook, setDidBook] = useState(false);

  const { error, loading, createReservation } = useReservation();

  const handleClick = async () => {
    const booking = await createReservation({
      slug,
      partySize,
      day,
      time,
      bookerFirstName: inputs.bookerFirstName,
      bookerLastName: inputs.bookerLastName,
      bookerEmail: inputs.bookerEmail,
      bookerPhone: inputs.bookerPhone,
      bookerOcassion: inputs.bookerOcassion,
      bookerRequest: inputs.bookerRequest,
      setDidBook,
    });
  };

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerEmail &&
      inputs.bookerPhone
    ) {
      return setDisabled(false);
    } else {
      return setDisabled(true);
    }
  }, [inputs]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-wrap justify-between mt-10 w-[660px]">
      {didBook ? (
        <div>
          <h1>Thanks for Booking with us Successfully!</h1>
          <p>Enjoy your reservation..</p>
        </div>
      ) : (
        <>
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="First name"
            name="bookerFirstName"
            value={inputs.bookerFirstName}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Last name"
            name="bookerLastName"
            value={inputs.bookerLastName}
            onChange={handleChangeInput}
          />
          <input
            type="email"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Email "
            name="bookerEmail"
            value={inputs.bookerEmail}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Phone Number"
            name="bookerPhone"
            value={inputs.bookerPhone}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Occasion (optional)"
            name="bookerOcassion"
            value={inputs.bookerOcassion}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Requests (optional)"
            name="bookerRequest"
            value={inputs.bookerRequest}
            onChange={handleChangeInput}
          />
          <button
            disabled={disabled || loading}
            className="bg-red-600 w-full p-3  text-white font-bold rounded disabled:bg-gray-300"
            onClick={handleClick}
          >
            {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              "Complete Reservation"
            )}
          </button>
          <p className="text-sm mt-4">
            By clicking &quot;complete reservation&quot; you agree to OpenTable
            Terms of Use and privacy. Standard text message may apply.You may
            opt out of recieving messages any time.
          </p>
        </>
      )}
    </div>
  );
}
