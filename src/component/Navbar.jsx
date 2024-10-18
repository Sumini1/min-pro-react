
import { RxAvatar } from "react-icons/rx";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = ({ handleSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state untuk mengecek apakah menu mobile terbuka
  const [userEmail, setUserEmail] = useState(""); // state untuk menampung email pengguna di local storage, dan ditampung di navbar
  const [searchQuery, setSearchQuery] = useState(""); // state untuk menyimpan nilai input pencarian
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); // Menyimpan nilai input search
  };

  // Fungsi untuk menangani pencarian saat tekan Enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(searchQuery); // Memanggil handleSearch saat Enter ditekan
      setIsMenuOpen(false); // Menutup menu mobile saat Enter ditekan
    }
  };

  // mengambil token dan email di local storage kemudian menyimpannya ke state userEmail di navbar 
  useEffect(() => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    if (token && email) {
      setUserEmail(email);
    }
  }, []);

  // Fungsi untuk menutup menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fungsi untuk logout setelah tombol logout ditekan, dengan menghapus token dan email di local storage
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUserEmail("");
    navigate("/");
  };

  return (
    <div className="sticky top-0 z-10 w-full gap-5 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex items-center justify-between gap-32 p-4 md:justify-center">
        <div className="flex text-xl font-bold text-white ">
          <h1>Reqres API</h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-white" />
            ) : (
              <FaBars className="text-2xl text-white" />
            )}
          </button>
        </div>

        <div className="items-center justify-center hidden gap-5 md:flex lg:justify-between">
          <div className="flex items-center justify-center p-2 rounded-full bg-slate-100">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress} // Enter saat pencarian ditekan
              className="w-64 py-0 text-black rounded-full outline-none bg-slate-100"
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            {userEmail && <span className="text-white">{userEmail}</span>}
            <RxAvatar className="text-3xl" />
            {userEmail && (
              <Button
                onClick={handleLogout}
                variant="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-[50px] w-[50px] lg:w-[100px] lg:rounded-[50px] py-1 px-2 lg:py-2 lg:px-4"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu , muncul saat menu mobile terbuka */}
      {isMenuOpen && (
        <div className="flex flex-col items-center p-2 py-4 space-y-4 md:hidden gap-x-5">
          <div className="flex items-center justify-center w-full p-2 rounded-full bg-slate-100">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress} // Event listener untuk mobil
              
              className="w-64 px-1 text-black rounded-full outline-none py:-1 bg-slate-100"
            />
            
          </div>
          <div className="flex flex-col items-center justify-center gap-5 mb-3 font-bold">
            {userEmail && (
              <span className="mb-3 text-white mr-7">{userEmail}</span>
            )}
            <RxAvatar className="text-3xl lg:mr-5" />
            {userEmail && (
              <Button
                onClick={handleLogout}
                variant="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-[100px] rounded-[50px] py-1 px-2 lg:py-2 lg:px-4]"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

