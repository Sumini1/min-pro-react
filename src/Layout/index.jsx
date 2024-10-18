
import { useState } from "react";
import Navbar from "../component/Navbar";
import Dashboard from "../component/Dashboard";
import Users from "../pages/Users";
import DetailUser from "../pages/DetailUser";
import Product from "../pages/Product";
import Cart from "../pages/Cart"; 
import Breadcrumb from "../component/Breadcrumb";

const Layout = () => {
  const [selectedUserId, setSelectedUserId] = useState(null); // Untuk menyimpan ID user yang dipilih
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk sidebar di mobile
  const [productOpen, setProductOpen] = useState(false); 
  const [cartOpen, setCartOpen] = useState(false); 
  const [search, setSearch] = useState(""); 

  // Handle search
  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  // Handle selecting a user
  const handleUserSelect = (id) => {
    setSelectedUserId(id); // Set ID user yang dipilih
    setProductOpen(false); // Tutup halaman product saat user dipilih
    setCartOpen(false); // Tutup halaman cart saat user dipilih
    setIsSidebarOpen(false); // Tutup sidebar setelah memilih user di mobile
  };

  // Handle back to users
  const handleBackToUsers = () => {
    setSelectedUserId(null); // Reset ID untuk kembali ke daftar pengguna
  };

  // Toggle the sidebar, untuk mobile
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  // Handle opening the product page
  const handleProduct = () => {
    setProductOpen(true); // Open halaman product
    setCartOpen(false); // Tutup halaman cart
    setSelectedUserId(null); // tidak pilih user, ketika membuka halaman product
    setIsSidebarOpen(false); // Tutup sidebar setelah memilih product di mobile
  };

  // Handle opening the cart page
  const handleCart = () => {
    setCartOpen(true); // Open halaman cart
    setProductOpen(false); // Tutup halaman product
    setSelectedUserId(null); // tidak pilih user, ketika membuka halaman cart
    setIsSidebarOpen(false); // Tutup sidebar setelah memilih product di mobile
  };

  return (
    <div className="flex w-full h-screen">
      {/* Sidebar untuk desktop */}
      <div className="hidden h-screen md:block md:w-1/4 lg:w-1/5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Dashboard
          handleUserSelect={handleUserSelect}
          handleProduct={handleProduct}
          handleCart={handleCart} 
        />
      </div>

      {/* Sidebar untuk mobile, muncul saat di-toggle */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-20 w-full h-full bg-gray-800 bg-opacity-50 md:hidden">
          <div className="fixed top-0 left-0 z-30 w-3/4 h-full p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <Dashboard
              handleUserSelect={handleUserSelect}
              handleProduct={handleProduct}
              handleCart={handleCart}
            />
          </div>
          <div className="fixed inset-0 z-10" onClick={toggleSidebar}></div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col w-full md:w-3/4 lg:w-4/5 h-full font-[Poppins]">
        <Navbar  handleSearch={handleSearch} /> {/* Navbar di bagian atas */}

        {/* Breadcrumb */}
        <Breadcrumb  selectedUserId={selectedUserId}/>
        <div className="flex-1 py-5 overflow-auto">
          {/* Hanya menampilkan Users dan detailUsers ketika halaman product dan Cart oprn  */}
          {!productOpen && !cartOpen && !selectedUserId && (
            <Users onUserSelect={handleUserSelect}  search={search}/>
          )}
          {!productOpen && !cartOpen && selectedUserId && (
            <DetailUser userId={selectedUserId} onBack={handleBackToUsers} />
          )}

          {/* Show Product if productOpen is true */}
          {productOpen && <Product />}

          {/* Show Cart if cartOpen is true */}
          {cartOpen && <Cart />}
        </div>
      </div>

      {/* Toggle Button for mobile to open sidebar */}
      <div className="fixed bottom-5 right-5 md:hidden">
        <button
          className="p-3 text-white bg-indigo-500 rounded-full shadow-lg"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "Close" : "Menu"}
        </button>
      </div>
    </div>
  );
};

export default Layout;

