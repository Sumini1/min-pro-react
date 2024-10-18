import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../component/Button";

const DetailUser = ({ userId, onBack }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    // Fetch user detail berdasarkan userId
    axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col py-5">
      {loading ? (
        <div className="flex flex-col mx-5 font-bold">Loading...</div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full p-5">
          <div className="w-full max-w-md p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
            <img
              src={user.avatar}
              alt={user.first_name}
              className="object-cover w-full h-64 mb-4 rounded"
            />
            <h1 className="mb-2 text-2xl font-bold">
              {user.first_name} {user.last_name}
            </h1>
            <p className="mb-2 text-sm">{"Email : " + user.email}</p>
            <p>{"Full Name : " + user.last_name}</p>

            {/* Tombol kembali ke daftar users */}
            <Button onClick={onBack}  variant="bg-indigo-500 w-[320px] lg:w-full px-4 py-2 mt-4 text-sm font-bold text-white rounded-lg">
              {"Back to Users"}
            </Button>
              
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailUser;
