'use client'
import { motion } from 'framer-motion'
import React from 'react'

export const Login = () => {

    // css
    const inputDivTextStyle = 'bg-black absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-hite'
    const inputStyle = 'border  focus:outline-gray-600 w-full p-4 m-0 text-base block bg-black border-gray-300 rounded-md outline-none'
    const formBtnStyle = 'bg-gray-100 w-[8rem] m-auto p-4 text-black rounded-sm hover:bg-gray-200 duration-200 ease-out   hover:shadow-sm hover:shadow-gray-100'



    return (
        <div className=' mt-[8rem]  h-[20rem] w-full  flex justify-center items-center'>

            <motion.div
                initial={{ opacity: 0 ,y:60}}
                animate={{ opacity: 1 ,y:0}}
                transition={{ duration: 0.8}}
                className="login w-[50%] h-full  border-gray-200 shadow-md shadow-gray-100 mt-12 rounded-md px-2">

                {/* form */}
                <form className=' bg-black h-full w-full py-8 flex flex-col gap-10'>

                    {/* input */}
                    <div className='input relative'>
                        <p className={inputDivTextStyle}>
                            {"Email"}
                        </p>
                        <input
                            className={inputStyle}
                            placeholder={"Enter your email address"}
                        />
                    </div>
                    {/* input */}
                    <div className='input relative'>
                        <p className={inputDivTextStyle}>
                            {"Password"}
                        </p>
                        <input
                            className={inputStyle}
                            placeholder={"Enter your Password"}
                        />
                    </div>

                    <button className={formBtnStyle}>
                        Login
                    </button>
                </form>

            </motion.div>
        </div>
    )
}
