import Link from "next/link";
import AuthModal from "./AuthModal";

export default function NavBar() {
  return (
    <nav className="flex justify-between p-2">
      <Link href="/" className="text-2xl text-gray-700 font-semibold">
        {" "}
        OpenTable{" "}
      </Link>
      <div>
        <div className="flex gap-4">
          {/* <button className="border px-3 p-2 rounded-sm bg-blue-400 text-white mr-4">
            Sign Up
          </button> */}
          <AuthModal isSignIn={true} />
          <AuthModal isSignIn={false} />
          {/* <button className="border px-3 p-2 rounded-sm  text-black">
            Log In
          </button> */}
        </div>
      </div>
    </nav>
  );
}
