export default function AuthModalInputs() {
  return (
    <div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="rounded border  p-2 py-3 w-[49%]"
          placeholder="First Name"
        />
        <input
          type="text"
          className="rounded border p-2 py-3 w-[49%]"
          placeholder="Last Name"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="email"
          className="rounded border p-2 py-3 w-full"
          placeholder="E-mail"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="rounded border p-2 py-3 w-[49%]"
          placeholder="City"
        />
        <input
          type="text"
          className="rounded border p-2 py-3 w-[49%]"
          placeholder="Phone"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="rounded border  p-2 py-3 w-full"
          placeholder="Password"
        />
      </div>
    </div>
  );
}
