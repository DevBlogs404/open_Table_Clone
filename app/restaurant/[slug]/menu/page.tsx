import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import Menu from "../components/Menu";

export default function RestaurantMenu() {
  return (
    <main className="w-screen min-h-screen bg-gray-100">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
        <div className="w-2/3 m-auto flex justify-between items-start  -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavbar />
            <Menu />
          </div>
        </div>
      </main>
    </main>
  );
}
