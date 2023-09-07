import Header from "./components/Header";

export default function Loading() {
  return (
    <>
      <Header />
      <div className=" max-w-screen-2xl h-screen m-auto bg-white text-center px-36 py-3 mt-10">
        <div className="text-red-400 text-4xl font-bold">Loading...</div>
      </div>
    </>
  );
}
