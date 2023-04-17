import React from "react"

const TransactionRow = () => {
  return (
    <tr className="bg-primary ">
      <td className="bg-primary">
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">Gas</div>
            <div className="text-sm opacity-50">5th Apr. 2023</div>
          </div>
        </div>
      </td>
      <td className="bg-primary">Budget</td>
      <td className="text-error bg-primary">- $20.00</td>
    </tr>
  )
}

export default TransactionRow
