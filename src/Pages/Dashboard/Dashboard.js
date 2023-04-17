import React from "react"
import Balance from "./Balance"
import Budget from "./Budget"
import Transactions from "./Transactions"
import Chart from "./Chart"
import Subscriptions from "./Subscriptions"

const Dashboard = () => {
  return (
    <div className="my-14">
      <Balance />
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        <Budget />
        <Chart />
        <Subscriptions />
        <Transactions />
      </div>
    </div>
  )
}

export default Dashboard
