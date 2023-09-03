export default function SearchSidebar() {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        <p className="text-md font-light">Toronto</p>
        <p className="text-md font-light">British Columbia</p>
        <p className="text-md font-light">Ottawa</p>
        <p className="text-md font-light">Ontario</p>
        <p className="text-md font-light">Montreal</p>
        <p className="text-md font-light">Hamilton</p>
        <p className="text-md font-light">Niagra</p>
      </div>
      <div className="border-b pb-4">
        <h1 className="mb-2">Cuisines</h1>
        <p className="text-md font-light">Mexican</p>
        <p className="text-md font-light">Chinese </p>
        <p className="text-md font-light">Italian</p>
        <p className="text-md font-light">Continental</p>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border rounded-l p-2 w-full text-md font-light">
            $
          </button>
          <button className="border-b border-t  p-2 w-full text-md font-light">
            $$
          </button>
          <button className="border p-2 w-full text-md font-light">$$$</button>
        </div>
      </div>
    </div>
  );
}
