

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { Link } from "react-router-dom";

const Dashboard = ({ handleUserSelect, handleProduct , handleCart}) => {
  return (
    <div className="flex flex-col min-h-screen py-20 mx-auto p-12 font-bold text-white bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 font-[Poppins] lg:text-xl">
      {/* Dashboard Link */}
      <div className="flex items-center gap-3 mb-2">
        <MdOutlineDashboardCustomize />
            <Link to="/">Dashboard</Link>
      </div>

      {/* Users Section */}
      <div className="flex flex-col gap-3 cursor-pointer">
        <div className="flex items-center gap-3">
          <FaUsers />
          <h1 onClick={() => handleUserSelect(null)}>Users</h1>
        </div>

        {/* Product Section */}
        <div className="flex items-center gap-3">
          <MdProductionQuantityLimits />
          <h1 onClick={() => handleProduct()}>Product</h1>
        </div>

        {/* Cart Section */}
        <div className="flex items-center gap-3">
          <MdProductionQuantityLimits />
          <h1 onClick={() => handleCart()}>Cart</h1>
        </div>

        {/* Chat Section */}
        <div className="flex items-center gap-3">
          <IoChatbubbleEllipses />
          <h1 onClick={() => handleUserSelect(null)}>Chat</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
