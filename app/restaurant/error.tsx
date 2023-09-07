"use client";
import Image from "next/image";
import errorMascot from "../../public/error.png";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="max-w-screen h-screen flex  justify-center items-center bg-slate-200">
      <div className=" flex flex-col justify-center items-center p-10 rounded bg-white">
        <Image src={errorMascot} alt="errormascot" className="w-56" />

        <p className="font-bold mt-10 text-2xl">{error.message}</p>
      </div>
    </div>
  );
}
