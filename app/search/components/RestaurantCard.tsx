import Link from "next/link";
import Image from "next/image";

export default function RestaurantCard() {
  return (
    <div className=" border-b flex pb-5">
      <Image src="" alt="" className="w-44 border bg-red-400 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">Aiana Restaurant Collection</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-5">
          <div className="font-light flex text-md">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Ottawa</p>
          </div>
        </div>
        <div className="text-red-600 ">
          <Link href="/restaurant/random"> View More Information</Link>
        </div>
      </div>
    </div>
  );
}
