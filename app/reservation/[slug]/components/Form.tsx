export default function Form() {
  return (
    <div className="flex flex-wrap justify-between mt-10 w-[660px]">
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="First name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Last name"
      />
      <input
        type="email"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Email "
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Phone Number"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Occasion (optional)"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Requests (optional)"
      />
      <button className="bg-red-600 w-full p-3  text-white font-bold rounded disabled:bg-gray-300">
        Complete Reservation
      </button>
      <p className="text-sm mt-4">
        By clicking &quot;complete reservation&quot; you agree to OpenTable
        Terms of Use and privacy. Standard text message may apply.You may opt
        out of recieving messages any time.
      </p>
    </div>
  );
}
