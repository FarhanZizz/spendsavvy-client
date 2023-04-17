import React, { useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const menu = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "p-3 border-0 border-b-2 border-b-primary" : "p-3"
        }
        to="/"
      >
        Home
      </NavLink>

      {user ? (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "p-3 border-0 border-b-2 border-b-primary" : "p-3"
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>

          <button
            onClick={() => {
              logOut().then(() => navigate("/"))
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "p-3 border-0 border-b-2 border-b-primary" : "p-3"
            }
            to="/login"
          >
            Login
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "p-3 border-0 border-b-2 border-b-primary" : "p-3"
            }
            to="/signup"
          >
            Signup
          </NavLink>
        </>
      )}
    </>
  )
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          SpendSavvy
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-16">{menu}</ul>
      </div>
    </div>
  )
}

export default Navbar
