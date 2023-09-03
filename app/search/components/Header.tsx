import SearchBar from "@/app/components/SearchBar";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#5f6984] to-[#0f1f47]">
      <SearchBar />
    </header>
  );
}

{
  /* <div className=" flex justify-center m-auto py-3 text-left">
<input
  className="w-[450px] rounded mr-3 p-2 text-lg"
  type="text"
  id="search"
  placeholder="Location, Restaurant or Cuisine"
/>
<button className=" bg-red-600 rounded font-semibold text-white px-9 p-3">
  Let's Go
</button>
</div> */
}
