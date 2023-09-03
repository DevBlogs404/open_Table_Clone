import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <main className="w-screen min-h-screen bg-gray-100">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
        <div className="flex flex-wrap px-36 py-3 mt-10">
          <RestaurantCard />
        </div>
      </main>
    </main>
  );
}
