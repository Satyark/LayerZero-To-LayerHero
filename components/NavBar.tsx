import Image from 'next/image'
import React from 'react'
import HoverText from './HoverText'

const NavBar = () => {
  return (
    <div className='w-full flex items-center justify-between border-b border-white border-opacity-70 p-3'>
        <div className='flex justify-center items-center text-gray-500 gap-3'>
            <Image src='/MahaDAO.svg' alt='/' width={32} height={32} />
            <p className=''>Home</p>
            <p className=''>Deposit</p>
            <p>Community</p>
            <p>Support</p>
        </div>
    </div>
  )
}

export default NavBar