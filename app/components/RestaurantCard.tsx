import Image from "next/image";
import Link from "next/link";
import Price from "./Price";
import { RestaurantCardType } from "../page";
import Star from "./Star";

interface Props {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <Image
          src={restaurant.main_image}
          alt="res"
          className="w-full h-36 object-contain"
          width={150}
          height={150}
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl">{restaurant.name}</h3>
          <div className="flex items-start">
            {/* <div className="flex mb-2"> */}
            <Star reviews={restaurant.reviews} />
            {/* </div> */}
            <p className="ml-2 capitalize">
              {restaurant.reviews.length}
              {restaurant.reviews.length > 1 ? " reviews" : " review"}
            </p>
          </div>
          <div className="flex text-sm font-light capitalize">
            <p className=" mr-3">{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
          <p className="font-bold text-sm mt-1">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
