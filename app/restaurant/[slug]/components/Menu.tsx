import MenuCard from "./MenuCard";
export default function Menu() {
  return (
    <main className="mt-5 bg-white">
      <div>
        <div className="mb-1 mt-4 pb-1">
          <h1 className="text-4xl font-bold">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {/* menu card */}
          <MenuCard />
          {/* menu card */}
        </div>
      </div>
    </main>
  );
}
