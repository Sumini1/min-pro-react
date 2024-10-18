import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Input from "../component/Input";
import Label from "../component/Label";
import Button from "../component/Button";

const Register = ({
  isModalOpenRegister,
  toggleModalRegister,
  toggleModalLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [succes, setSucces] = useState("");
  const [loading, setLoading] = useState(false);

  const onchangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onchangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://reqres.in/api/register", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire("Success!", "Registration successful!", "success");
        setSucces(res.data.token);
        localStorage.setItem("token", res.data.token);
        toggleModalLogin(); // Tutup modal
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      })
      .finally(() => {
        setLoading(false); // Kembalikan ke false setelah request selesai
      });
  };

  return (
    <div>
      {isModalOpenRegister && (
        <div
          id="authentication-modal"
          className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[calc(100%-1rem)] max-h-full"
        >
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          <div className="relative w-full max-w-md max-h-full p-4">
            <div className="relative rounded-lg shadow bg-gradient-to-tr from-indigo-900 via-purple-600 to-pink-800">
              {/* Header Modal */}
              <div className="flex items-center justify-between p-4 border-b border-gray-600 rounded-t md:p-5">
                <h3 className="text-xl font-semibold text-white">
                  Register to our platform
                </h3>
                <button
                  type="button"
                  onClick={toggleModalRegister}
                  className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg ms-auto hover:bg-gray-600 hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form className="mb-3 space-y-4" onSubmit={onSubmit}>
                  {/* Input Email */}
                  <div>
                    <Label htmlFor="email">{"Email"}</Label>
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      onChange={onchangeEmail}
                      placeholder="example@gmail.com"
                    />
                  </div>
                  {/* Input Password */}
                  <div>
                    <Label htmlFor="password">{"Password"}</Label>
                    <Input
                      type="password"
                      name="password"
                      value={password}
                      onChange={onchangePassword}
                      placeholder="••••••••"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[320px] lg:w-full"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Register"}
                  </Button>
                </form>

                <p className="text-sm text-center text-gray-400 ">
                  Already have an account?{" "}
                  <Button
                    variant="text- white hover:underline"
                    onClick={toggleModalLogin}
                  >
                    Login here
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
