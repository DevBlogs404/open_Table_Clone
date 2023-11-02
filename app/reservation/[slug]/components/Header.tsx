import { Times, convertToDisplayTime } from "@/utils/convertToDisplayTime";
import Image from "next/image";
import format from "date-fns/format";

export default function Header({
  image,
  name,
  date,
  partySize,
}: {
  image: string;
  name: string;
  date: string;
  partySize: string;
}) {
  const [day, time] = date.split("T");

  return (
    <div>
      <h3 className="font-bold">You&apos;re Almost done!!</h3>
      <div className="mt-5 flex">
        <Image
          src={image}
          width={150}
          height={150}
          alt=""
          className="rounded w-32 h-18"
        />
        <div className="ml-4">
          <h1 className="text-3xl  font-bold">{name}</h1>
          <div className="mt-3 flex">
            <p className="mr-6">{format(new Date(day), "ccc MMM d")}</p>
            <p className="mr-6">{convertToDisplayTime(time as Times)}</p>
            <p className="mr-6">
              {partySize}
              {parseInt(partySize) === 1 ? " person" : " people"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
