import Image from "next/image";
import Link from "next/link";

export default function RestaurantCard() {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href="/restaurant/random">
        <Image src="" alt="" className="w-full h-36 object-contain" />
        <div className="p-1">
          <h3 className="font-bold text-2xl">Card Name</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">70 reviews</p>
          </div>
          <div className="flex text-sm font-light capitalize">
            <p className=" mr-3">Mexican</p>
            <p className="mr-3">$$$$</p>
            <p>Toronto</p>
          </div>
          <p className="font-bold text-sm mt-1">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
