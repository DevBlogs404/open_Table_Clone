"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const renderButton = (signInContent: string, LogInContent: string) => {
    return isSignIn ? signInContent : LogInContent;
  };

  return (
    <div>
      <button
        className={`${renderButton(
          "bg-blue-400 text-white mr-4",
          ""
        )}border px-3 p-2 rounded-sm `}
        onClick={handleOpen}
      >
        {renderButton("SignUp", "LogIn")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2 h-[500px]">
            <div className="uppercase pb-2 font-bold text-center border-b mb-2">
              <p className="text-sm">
                {renderButton("Create New Account", "Log In")}
              </p>
            </div>
            <div className="m-auto">
              <h2 className="font-light text-center text-xl">
                {renderButton(
                  "Create Your OpenTable Account",
                  "Log Into Your Account"
                )}
              </h2>
              <AuthModalInputs
                inputs={inputs}
                handleInputChange={handleInputChange}
                isSignIn={true}
              />
              <button className="uppercase bg-red-600 w-full text-sm rounded mb-5 p-3 text-white disabled:bg-gray-400">
                {renderButton("Create Account", "Log In")}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
