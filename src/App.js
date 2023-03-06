import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);

  return (
    <div className="max-w-screen-xl p-6 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
