
import { useState } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Button from "./Button";


const Banner = () => {
  const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
  const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);

  const reqres = [
    {
      title: "Consume API",
      des: "Soft skill yang harus dikuasai oleh FE developer",
    },
    {
      title: "UI Design",
      des: "Soft skill yang harus dikuasai oleh FE developer",
    },
    {
      title: "Algorithms",
      des: "Soft skill yang harus dikuasai oleh FE developer",
    },
  ];

  // ini buat membuka dan menutup modal register
  const toggleModalRegister = () => {
    setIsModalOpenRegister((prev) => !prev);
  };

  // ini buat membuka dan menutup modal login
  const toggleModal = () => {
    setIsModalOpenLogin((prev) => !prev);
  };

  // function untuk menutup dan menampilkan modalRegister sekaligus modalLogin
  const toggleModalLogin = () => {
    setIsModalOpenLogin(true); // Open login modal
    setIsModalOpenRegister(false); // Close register modal
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-[poppins] min-h-screen p-7 lg:min-h-screen lg:h-screen lg:mt-0">
      <div className="flex flex-col items-center justify-center w-full mb-7 lg:w-3/4 lg:mt-[-100px] lg:mb-10">
        <h1 className="text-2xl font-semibold font-[poppins] mb-3 mt-5 lg:text-4xl  shadow-2xl">
          RUANG BELAJAR
        </h1>
        <hr className="mt-2 border-t-2 border-white w-[200px] mb-5" />
        <h1 className="text-md font-[poppins] text-center mb-2 lg:text-2xl">
          Selamat Datang di Website Kami
        </h1>
        <p className="text-center text-sm font-[poppins] lg:text-2xl">
          Di sini kita akan belajar bagaimana membuat website dengan API Reqres
        </p>
      </div>

      {/* Looping data reqres */}
      <div className="grid items-center justify-center grid-cols-1 gap-3 mx-auto mb-3 lg:grid-cols-3 lg:gap-20 lg:mx-0 lg:mb-5">
        {reqres.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-[200px] h-[200px] border rounded-full mb-7 mx-auto lg:w-[300px] lg:h-[300px] lg:p-3 hover:scale-x-105 duration-300 transform transition-all cursor-pointer shadow-xl hover:shadow-2xl"
          >
            <h1 className="text-xl font-semibold font-[poppins] mb-2 lg:mb-5 lg:text-2xl ">
              {item.title}
            </h1>
            <p className="text-center text-sm font-[poppins] lg:text-xl lg:p-2 p-2">{item.des}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-10 mt-5 lg:flex-row">
        {/* <Button
          onClick={toggleModal}
          variant="w-[100px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer"
        >
          Login
        </Button> */}

        {/* ketika klik login modal open maka akan muncul login */}
        {isModalOpenLogin && (
          <Login isModalOpen={isModalOpenLogin} toggleModal={toggleModal} />
        )}

        <Button
          onClick={toggleModalRegister}
          
        >
          Get Started
        </Button>
        
          
        {/* ketika berhasil register, maka akan diarahkan ke modalLogin dan modalregister close */}
        {isModalOpenRegister && (
          <Register
            isModalOpenRegister={isModalOpenRegister}
            toggleModalRegister={toggleModalRegister}
            toggleModalLogin={toggleModalLogin} // Memanggil toggleModalLogin setelah registrasi
          />
        )}
      </div>


    </div>
    
  );
};

export default Banner;
