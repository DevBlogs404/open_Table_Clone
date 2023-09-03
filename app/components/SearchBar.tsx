"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <div className=" flex justify-center m-auto py-3 text-left">
      <input
        className="w-[450px] rounded mr-3 p-2 text-lg"
        type="text"
        id="search"
        value={location}
        placeholder="Location, Restaurant or Cuisine"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className=" bg-red-600 rounded font-semibold text-white px-9 p-3"
        onClick={() => {
          if (location === "banana") return;
          router.push("/search");
        }}
      >
        Let's Go
      </button>
    </div>
  );
}
