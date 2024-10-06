import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "write",
    element: (
      <div>
        <Navbar />
        <Write />
        <Footer />
      </div>
    ),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "single",
    element: (
      <div>
        <Navbar />
        <Single />
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
