import { Location, Cuisine, PRICE } from "@prisma/client";
import Link from "next/link";
import { SearchParams } from "../page";

export default function SearchSidebar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: SearchParams;
}) {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
    },
  ];

  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <p className="text-md capitalize font-light" key={location.id}>
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  city: location.name,
                },
              }}
            >
              {location.name}
            </Link>
          </p>
        ))}
      </div>
      <div className="border-b pb-4">
        <h1 className="mb-2">Cuisines</h1>
        {cuisines.map((cuisine) => (
          <p className="text-md capitalize font-light" key={cuisine.id}>
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  cuisine: cuisine.name,
                },
              }}
            >
              {cuisine.name}
            </Link>
          </p>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map(({ label, price }) => {
            return (
              <Link
                href={{
                  pathname: "/search",
                  query: {
                    ...searchParams,
                    price: price,
                  },
                }}
                key={price}
                className="border text-center rounded-l p-2 w-full text-md font-light"
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
