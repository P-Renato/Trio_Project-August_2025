import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
      <div>
          <ul>
      <li> <Link href="/">Home</Link></li>
      <li> <Link href="/about">About</Link></li>
      <li> <Link href="/products">products</Link></li>     
       <li> <Link href="/checkout">checkout</Link></li>
    
     </ul>
      </div>
      home page
      <p className="text-2xl">Welcome to the home page!</p>
      <p className="text-lg">This is a simple example of a Next.js page.</p>
      <p className="text-sm">Enjoy building your application!</p>
    </div>
  )
}

export default page
