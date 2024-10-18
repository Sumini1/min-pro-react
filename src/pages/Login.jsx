import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Input from "../component/Input";
import Label from "../component/Label";
import Button from "../component/Button";


const Login = ({ isModalOpen, toggleModal}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
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
      .post("https://reqres.in/api/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire("Success!", "Login successful!", "success");
        localStorage.setItem("token", res.data.token); // Simpan token
        localStorage.setItem("email", email); // Simpan email users
        toggleModal(); // Tutup modal
        navigate("/users"); 
      })
      .catch((err) => {
      
        console.log("Error response:", err.response); 
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data?.error || "Something went wrong!",
        });
      })
      .finally(() => {
        setLoading(false); // Kembalikan ke false setelah request selesai
      });
  };

  return (
    <div>
      {isModalOpen && (
        <div
          id="modal-container"
          aria-hidden="false"
          className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[calc(100%-1rem)] max-h-full"
        >
          {/* overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          
          <div className="relative w-full max-w-md max-h-full p-4">
            <div className="relative rounded-lg shadow bg-gradient-to-tr from-indigo-900 via-purple-600 to-pink-800">
              {/* Header Modal */}
              <div className="flex items-center justify-between p-4 border-b border-gray-600 rounded-t md:p-5">
                <h3 className="text-xl font-semibold text-white">
                  Login to our platform
                </h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:text-gray-900 ms-auto hover:bg-gray-600 "
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="false"
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
              {/* Body Modal */}
              <div className="p-4 md:p-5">
                <form className="space-y-4" onSubmit={onSubmit}>
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
                  <div className="space-y-1">
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
                    variant="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 w-[320px] lg:w-full"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Login"}
                  </Button >
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
