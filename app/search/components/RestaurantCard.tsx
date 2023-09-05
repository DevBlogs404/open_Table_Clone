import Link from "next/link";
import Image from "next/image";
import { RestaurantCardType } from "@/app/page";
import Price from "@/app/components/Price";

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: RestaurantCardType;
}) {
  return (
    <div className=" border-b flex pb-5 ml-4">
      <Image
        src={restaurant.main_image}
        alt="random"
        width={150}
        height={150}
        className="w-44 h-36 border bg-red-400 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-5">
          <div className="font-light flex text-md">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600 ">
          <Link href={`/restaurant/${restaurant.slug}`}>
            {" "}
            View More Information
          </Link>
        </div>
      </div>
    </div>
  );
}
