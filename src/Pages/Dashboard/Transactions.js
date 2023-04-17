import React from "react"
import { Link } from "react-router-dom"
import TransactionRow from "./TransactionRow"

const Transactions = () => {
  return (
    <div className="rounded-xl bg-primary text-primary-content p-6">
      <div className="flex items-center gap-x-2">
        <h1 className="card-title">Recent Transactioons</h1>
        <Link to="/" className="btn btn-circle btn-ghost">
          ❯
        </Link>
      </div>
      <div className="w-full">
        <table className="table w-full">
          <tbody>
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
            <TransactionRow />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transactions
