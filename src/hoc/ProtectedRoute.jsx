import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />; // Jika tidak ada token, redirect ke halaman Home
  }

  return children || <Outlet />; // Jika ada token, render children

}
export default ProtectedRoute;
