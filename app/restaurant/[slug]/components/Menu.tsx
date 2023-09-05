import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";
export default function Menu({ menu }: { menu: Item[] }) {
  return (
    <main className="mt-5 bg-white">
      <div>
        <div className="mb-1 mt-4 pb-1">
          <h1 className="text-4xl font-bold">Menu</h1>
        </div>
        {menu.length ? (
          <div className="flex flex-wrap justify-between">
            {menu.map((item) => {
              return <MenuCard item={item} key={item.id} />;
            })}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between">
            <p>No Menu available for this Restaurant</p>
          </div>
        )}
      </div>
    </main>
  );
}
