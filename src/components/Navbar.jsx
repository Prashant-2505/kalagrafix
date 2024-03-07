'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Navbar = () => {



    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className='nav flex w-[100%] items-center justify-center h-[8rem]  top-0 fixed bg-black'>
            <ul className=' flex w-[60%] h-[70%] justify-between items-center bg-white text-black px-8 rounded-lg  shadow-md shadow-gray-100'>
                <Link href={'/'}>
                    <li className=' font-bold text-[2rem] cursor-pointer hover:bg-black hover:text-white duration-300 ease-in-out p-2 rounded-md'>Kalagrafix</li>
                </Link>
                <Link href={'/login'}>
                    <li className=' capitalize border-b-2 border-transparent hover:border-black duration-200 ease-in-out cursor-pointer'>login</li>
                </Link>
            </ul>
        </motion.div>
    )
}

export default Navbar
