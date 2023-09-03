import Link from "next/link";

export default function RestaurantNavbar() {
  return (
    <nav className=" flex text-md border-b pb-2">
      <Link href="/restaurant/random" className="mr-7">
        OverView
      </Link>
      <Link href="/restaurant/random/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
