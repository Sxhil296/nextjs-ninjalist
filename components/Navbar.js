import Link from 'next/link'
import React from 'react'
// import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            {/* <Image src='/htf2.png' width={100} height={50} /> */}
            <h1>Ninja List</h1>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Ninjas</Link>
        
        
        
    </nav>
  )
}

export default Navbar