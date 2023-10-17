"use client";

import { AuthenticationContext } from "@/app/context/AuthContext";
import axios from "axios";
import { useContext } from "react";
import { deleteCookie } from "cookies-next";

const useAuth = () => {
  const { loading, data, error, setAuthState } = useContext(
    AuthenticationContext
  );

  const logIn = async (
    { email, password }: { email: string; password: string },
    handleClose: () => void
  ) => {
    setAuthState({
      loading: true,
      data: null,
      error: null,
    });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        }
      );

      setAuthState({
        loading: false,
        data: response.data,
        error: null,
      });
      handleClose();
    } catch (error: any) {
      setAuthState({
        loading: false,
        data: null,
        error: error.response.data.errorMessage || "error logging in",
      });
    }
  };

  const signUp = async (
    {
      email,
      password,
      firstName,
      lastName,
      city,
      phone,
    }: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      city: string;
      phone: string;
    },
    handleClose: () => void
  ) => {
    setAuthState({
      loading: true,
      data: null,
      error: null,
    });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          firstName,
          lastName,
          email,
          password,
          city,
          phone,
        }
      );

      setAuthState({
        loading: false,
        data: response.data,
        error: null,
      });
      handleClose();
    } catch (err: any) {
      setAuthState({
        loading: false,
        data: null,
        error: err.response.data.errorMessage,
      });
    }
  };

  const LogOut = async () => {
    deleteCookie("jwt");

    setAuthState({
      data: null,
      loading: false,
      error: null,
    });
  };

  return {
    logIn,
    signUp,
    LogOut,
  };
};

export default useAuth;
