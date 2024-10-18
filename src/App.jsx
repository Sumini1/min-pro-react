// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import Banner from "./component/Banner";
// // import DetailUser from "./pages/DetailUser";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Banner />} />
//         <Route path="/users" element={<Layout />} />
        
//         <Route path="/user-detail/:id" element={<Layout />} />
//         {/* Tambahkan rute lainnya di sini */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  const element = useRoutes(routes);
  return element;
};

export default App;