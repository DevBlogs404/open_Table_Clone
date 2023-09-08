"use client";

interface InputProps {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    city: string;
    phone: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

export default function AuthModalInputs({
  inputs,
  handleInputChange,
  isSignIn,
}: InputProps) {
  return (
    <div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="rounded border  p-2 py-3 w-[49%]"
            placeholder="First Name"
            value={inputs.firstName}
            name="firstName"
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="rounded border p-2 py-3 w-[49%]"
            placeholder="Last Name"
            value={inputs.lastName}
            name="lastName"
            onChange={handleInputChange}
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="email"
          className="rounded border p-2 py-3 w-full"
          placeholder="E-mail"
          value={inputs.email}
          name="email"
          onChange={handleInputChange}
        />
      </div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="rounded border p-2 py-3 w-[49%]"
            placeholder="City"
            value={inputs.city}
            name="city"
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="rounded border p-2 py-3 w-[49%]"
            placeholder="Phone"
            value={inputs.phone}
            name="phone"
            onChange={handleInputChange}
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="rounded border  p-2 py-3 w-full"
          placeholder="Password"
          value={inputs.password}
          name="password"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
