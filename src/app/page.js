'use client'
import Image from 'next/image';
import laptop from '../../public/image/laptop.jpeg'
import { motion } from 'framer-motion'


export default function Home() {

  return (
    <main className=" mt-[8rem]">
      {/* div 1 */}
      <div className=" w-full h-full py-4  px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}

          className=" text-3xl text-center">Welcome to <span className=" text-[#1c8dfa]"> KalaGrafix</span></motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className=" flex justify-between items-center w-full h-[25rem] border-2 my-4 p-4 mt-8">
          <motion.div
            initial={{ opacity: 0 ,x:10}}
            animate={{ opacity: 1 ,x:0}}
            transition={{ duration: 0.4, delay: 1.8 }}
            className=" w-[50%] h-full ">
            <Image className=' h-full w-[100%] rounded-md'
              src={laptop}
              alt="laptop"
            />
          </motion.div>
          <motion.div
           initial={{ opacity: 0 ,x:-10}}
           animate={{ opacity: 1 ,x:0}}
           transition={{ duration: 0.4, delay: 2 }}
          className=" w-[50%] h-full p-2 flex justify-center items-center">
            <p className=' font-semibold text-[1.3rem]'>
              Are you a freelancer seeking exciting job opportunities or a business owner in need of skilled professionals? Look no further! <span className=" text-[#1c8dfa]"> KalaGrafix</span> is your go-to destination for connecting talented freelancers with exciting job tasks.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
