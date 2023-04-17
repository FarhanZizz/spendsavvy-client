import React from "react"
import { Link } from "react-router-dom"

const Subscriptions = () => {
  return (
    <div className="card shadow-xl bg-primary text-primary-content">
      <div className="card-body">
        <div className="flex items-center gap-x-2">
          <h2 className="card-title">Subscriptions</h2>
          <Link to="/" className="btn btn-circle btn-ghost">
            ❯
          </Link>
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  )
}

export default Subscriptions
