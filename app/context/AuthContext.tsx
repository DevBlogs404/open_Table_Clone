"use client";

import { useState, createContext } from "react";

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
}

interface State {
  loading: boolean;
  data: IUser | null;
  error: string | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  data: null,
  error: null,
  setAuthState: () => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<State>({
    loading: false,
    data: null,
    error: null,
  });

  return (
    <div>
      <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
        {children}
      </AuthenticationContext.Provider>
    </div>
  );
}
