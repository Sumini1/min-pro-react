import ProtectedRoute from "./hoc/ProtectedRoute";
import Layout from "./Layout";
import Home from "./pages/Home";


export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/product",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
  },
];