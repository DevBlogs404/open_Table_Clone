import NavBar from "./components/NavBar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap px-36 py-3 mt-10">
        <RestaurantCard />
      </div>
    </>
  );
}
