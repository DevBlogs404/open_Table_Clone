import Link from "next/link";
import Image from "next/image";
import { RestaurantCardType } from "@/app/page";
import Price from "@/app/components/Price";
import { generateReviewRating } from "@/utils/generateReviewRating";
import Star from "@/app/components/Star";

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: RestaurantCardType;
}) {
  function countReviewRating() {
    const countRating = generateReviewRating(restaurant.reviews);
    if (countRating > 4) return "Awesome";
    else if (countRating <= 4 && countRating > 3) return "Good";
    else if (countRating <= 3 && countRating > 0) return "Average";
    else "";
  }

  const reviewRating = countReviewRating();

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
          <div className="flex mb-2">
            {" "}
            <Star reviews={restaurant.reviews} />
          </div>
          <p className="ml-2 text-sm">{reviewRating}</p>
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
