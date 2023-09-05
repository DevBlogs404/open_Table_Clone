import Header from "./components/Header";
import SearchSidebar from "./components/SearchSidebar";
import RestaurantCard from "./components/RestaurantCard";
import { Location, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurantsByLocation = async (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    price: true,
    main_image: true,
    location: true,
    cuisine: true,
    slug: true,
  };
  if (!city) {
    return prisma.restaurant.findMany({ select });
  } else {
    return prisma.restaurant.findMany({
      where: {
        location: {
          name: {
            equals: city.toLowerCase(),
          },
        },
      },
      select,
    });
  }
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantsByLocation(searchParams.city);

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => {
              return <RestaurantCard restaurant={restaurant} />;
            })
          ) : (
            <p>Sorry, No Restaurants found for your location</p>
          )}
        </div>
      </div>
    </>
  );
}
