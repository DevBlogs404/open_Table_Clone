import Header from "./components/Header";
import SearchSidebar from "./components/SearchSidebar";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface SearchParams {
  city: string;
  cuisine: string;
  price: PRICE;
}

const fetchRestaurantsByLocation = async (SearchParams: SearchParams) => {
  const where: any = {};

  if (SearchParams.city) {
    const location = {
      name: {
        equals: SearchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }

  if (SearchParams.cuisine) {
    const cuisine = {
      name: {
        equals: SearchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }

  if (SearchParams.price) {
    const price = {
      equals: SearchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    price: true,
    main_image: true,
    location: true,
    cuisine: true,
    slug: true,
    reviews: true,
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = async () => {
  return await prisma.location.findMany();
};

const fetchCuisines = async () => {
  return await prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const restaurants = await fetchRestaurantsByLocation(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => {
              return (
                <RestaurantCard restaurant={restaurant} key={restaurant.id} />
              );
            })
          ) : (
            <p>Sorry, No Restaurants found for your location</p>
          )}
        </div>
      </div>
    </>
  );
}
