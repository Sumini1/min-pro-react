

import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../component/Button";

const Users = ({ onUserSelect, search }) => {
  const [allUsers, setAllUsers] = useState([]); // State untuk menyimpan semua data users
  const [filteredUsers, setFilteredUsers] = useState([]); // State untuk menyimpan hasil filtering
  const [currentPage, setCurrentPage] = useState(1); // State untuk menyimpan halaman saat ini
  const [usersPerPage] = useState(6); // Jumlah pengguna per halaman
  const [loading, setLoading] = useState(true);

  // Fungsi untuk mengambil semua data users dari API
  const getAllUsers = () => {
    setLoading(true);
    axios
      .get(`https://reqres.in/api/users?per_page=12`) // Ambil semua data dari API (sesuai jumlah total user di API)
      .then((res) => {
        setAllUsers(res.data.data); // Simpan semua users ke state
        setLoading(false); // Selesai loading
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); 
      });
  };

  useEffect(() => {
    getAllUsers(); // Panggil fungsi untuk mengambil semua users saat komponen pertama kali dirender
  }, []);

  // Update filteredUsers berdasarkan input pencarian
  useEffect(() => {
    const filtered = allUsers.filter(
      (user) =>
        user.first_name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered); // Simpan hasil filtering
    setCurrentPage(1); // Reset ke halaman pertama setelah pencarian
  }, [search, allUsers]);

  // menghitung total halaman berdasarkan hasil pencarian
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Data pengguna yang akan ditampilkan di halaman saat ini
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser); // Pengguna untuk halaman saat ini

  // Handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // Hindari out-of-bounds page
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col">
      {loading ? (
        <div className="flex flex-col mx-5 font-bold">Loading...</div>
      ) : (
        <div className="sticky top-0 flex flex-col w-full py-1 font-[Poppins] lg:mb-5">
          {/* Main Content */}
          <div className="flex flex-col items-center justify-end text-3xl px-7 lg:px-0 lg:mt-[40px] lg:mx-28 lg:ml-32">
            <div className="flex flex-col items-center justify-center w-full max-w-screen-lg gap-5 lg:grid lg:grid-cols-3 lg:gap-12 ">
              {currentUsers.map((user) => (
                <div
                  key={user.id}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-lg"
                >
                  <h2 className="mb-3 text-xl font-bold font-[Poppins] lg:text-xl">
                    {user.first_name}
                  </h2>
                  <img
                    src={user.avatar}
                    alt={user.first_name}
                    className="object-cover w-full h-auto mb-3 rounded lg:w-[500px] lg:h-[300px]"
                  />
                  <p className="mb-2 text-sm">{user.email}</p>
                  <Button
                    onClick={() => onUserSelect(user.id)} // Pass user ID ke parent
                    variant="w-[300px] lg:w-full  text-sm font-bold text-white rounded-lg bg-indigo-500"
                  >
                    Detail User
                  </Button>
                  <br />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              variant="bg-indigo-500 w-[60px] rounded-full"
            >
              Prev
            </Button>
            <span className="flex items-center mx-2 text-lg">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              variant="bg-indigo-500 w-[60px] rounded-full"
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
