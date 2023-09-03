import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between p-2">
      <Link href="/" className="text-2xl text-gray-700 font-semibold">
        {" "}
        OpenTable{" "}
      </Link>
      <div>
        <div>
          <button className="border px-3 p-2 rounded-sm bg-blue-400 text-white mr-4">
            Sign Up
          </button>
          <button className="border px-3 p-2 rounded-sm  text-black">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
}
