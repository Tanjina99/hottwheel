import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LoginPage from "./auth/LoginPage";
import Register from "./auth/Register";
import AboutUs from "./components/aboutus/AboutUs";
import ContactUs from "./components/contact/ContactUs";
import Service from "./components/sarvice/Service";
import AllProducts from "./components/allProducts/AllProducts";

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <Register /> },
    { path: "/about us", element: <AboutUs /> },
    { path: "/contact us", element: <ContactUs /> },
    { path: "/services", element: <Service /> },
    { path: "/all products", element: <AllProducts /> },
  ];

  return (
    <div>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
