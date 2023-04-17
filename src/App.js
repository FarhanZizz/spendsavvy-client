import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"

import MainLayout from "./Layout/MainLayout"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"

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
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
        },
      ],
    },
  ])

  return (
    <div className="max-w-screen-xl p-6 mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
