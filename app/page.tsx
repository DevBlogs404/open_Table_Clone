import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE, PrismaClient, Cuisine, Location, Review } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      slug: true,
      price: true,
      cuisine: true,
      location: true,
      reviews: true,
    },
  });
  return restaurants;
};

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  reviews: Review[];
}

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <Header />
      <div className="flex flex-wrap px-36 py-3 mt-10">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
}
