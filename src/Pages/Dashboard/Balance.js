import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"

const Balance = () => {
  const { user } = useContext(AuthContext)
  const quotes = [
    "Money is a terrible master but an excellent servant. - P.T. Barnum",
    "A penny saved is a penny earned. - Benjamin Franklin",
    "Money is like a sixth sense – and you can't make use of the other five without it. - William Somerset Maugham",
    "Money grows on the tree of persistence. - Japanese Proverb",
    "If you want to become financially independent, you must turn part of your income into capital; turn capital into enterprise; turn enterprise into profit; turn profit into investment; and turn investment into financial independence. - Jim Rohn",
    "The habit of saving is itself an education; it fosters every virtue, teaches self-denial, cultivates the sense of order, trains to forethought, and so broadens the mind. - T.T. Munger",
    "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver. - Ayn Rand",
    "Do not save what is left after spending; instead, spend what is left after saving. - Warren Buffett",
    "The art is not in making money, but in keeping it. - Proverb",
  ]
  const [quote, setQuote] = useState("")

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="card bg-[#fefefe] shadow-lg ">
      <div className="card-body items-center grid grid-cols-1 md:grid-cols-2 ">
        <div className="hidden md:block">
          <h2 className="card-title">Welcome Back {user?.displayName}!</h2>
          <p className="opacity-80 text-sm">{quote}</p>
        </div>
        <button
          className="btn btn-primary btn-circle tooltip-left tooltip absolute top-5 -right-5 text-3xl font-normal"
          data-tip="Add Money"
        >
          +
        </button>
        <button
          className="btn btn-error tooltip tooltip-left tooltip-error btn-circle absolute bottom-5 -right-5  text-3xl font-normal"
          data-tip="Remove Money"
        >
          -
        </button>
        <div className="flex items-center gap-4 justify-center">
          {user?.photoURL && (
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  src={user.photoURL}
                  alt="userphoto"
                />
              </div>
            </div>
          )}
          <div>
            <h2 className="card-title text-sm font-thin">Your Balance</h2>
            <p className="text-4xl font-bold">$500.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Balance
