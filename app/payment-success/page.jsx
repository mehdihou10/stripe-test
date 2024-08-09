
import React from 'react'
import Link from 'next/link'

const PaymentSuccess = () => {
  return (
    <div>

        <Link href="/">Home</Link>

      <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
        <h2 className="text-2xl">You successfully Paid</h2>

      </div>
    </main>
    </div>
  )
}

export default PaymentSuccess