"use client";

import Link from "next/link";
import AuthModal from "./AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "@/hooks/useAuth";

export default function NavBar() {
  const { loading, data } = useContext(AuthenticationContext);
  const { LogOut } = useAuth();

  return (
    <nav className="flex justify-between p-2">
      <Link href="/" className="text-2xl text-gray-700 font-semibold">
        {" "}
        OpenTable{" "}
      </Link>
      {loading ? null : (
        <div>
          <div className="flex gap-4">
            {data ? (
              <>
                <div className="w-[3rem] h-[3rem] flex items-center justify-center bg-blue-300 rounded-full">
                  <h1 className=" text-xl text-white capitalize font-bold">
                    {data.firstName[0]}
                    {data.lastName[0]}
                  </h1>
                </div>

                <button
                  className="border px-3 p-2 rounded-sm bg-blue-400 text-white mr-4"
                  onClick={LogOut}
                >
                  Log-Out
                </button>
              </>
            ) : (
              <>
                <AuthModal isSignIn={false} />
                <AuthModal isSignIn={true} />
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
