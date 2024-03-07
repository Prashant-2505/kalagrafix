'use client'
import Image from 'next/image';
import laptop from '../../public/image/laptop.jpeg'
import { motion } from 'framer-motion'
import { MdOutlineDone } from "react-icons/md";
import { useInView } from 'react-intersection-observer';



export default function Home() {

  const cardDivStyle = ' w-[30%] h-[20rem] border-2 rounded-md px-8 pt-8 pb-4 bg-white text-black '
  const cardDivTextStyle = ' flex items-center gap-4'
  const cardDivHeadingStyle = 'font-bold capitalize text-2xl text-[#1c8dfa]'
  const cardDivSpanSyle = 'text-green-400 rounded-full p-1'
  const cardDivBtnStyle = 'text-white w-[70%] px-4 py-3  rounded-md  duration-200 ease-in-out'



  const [pricingRef, pricingInView] = useInView({
    triggerOnce: false,
    rootMargin: '-150px 0px',

  });

  const [cardRef1, cardInView1] = useInView({
    triggerOnce: false,
    rootMargin: '-150px 0px',

  });
  const [cardRef2, cardInView2] = useInView({
    triggerOnce: false,
    rootMargin: '-150px 0px',

  });
  const [cardRef3, cardInView3] = useInView({
    triggerOnce: false,
    rootMargin: '-150px 0px',

  });


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
          className=" flex justify-between items-center w-full h-[25rem]  my-4 p-4 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.8 }}
            className=" w-[50%] h-full ">
            <Image className=' h-full w-[100%] rounded-md'
              src={laptop}
              alt="laptop"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.8 }}
            className=" w-[50%] h-full p-2 flex flex-col justify-center  border-[2px] gap-8">
            <p className='font-semibold text-[1.2rem] text-yellow-300 px-8'>
              Are you a freelancer ?
            </p>
            <p className='  text-[2rem] capitalize font-bold px-8'>
              seeking exciting job opportunities ?
            </p>
            <p className='  px-8'>
              Look no further! <span className=" text-[#1c8dfa] text-2xl"> KalaGrafix</span> is your go-to destination for connecting talented freelancers with exciting job tasks.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* pricing div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={pricingInView ? { opacity: 1 } :{}}
        transition={{ duration: 0.2, delay: 0.4 }}
        className=" w-full h-[30rem]  py-8 "
        ref={pricingRef}
      >
        <h1 className=' text-center font-bold text-6xl mt-4 pb-8 capitalize'>Choose your plan</h1>
        <div className=' flex justify-evenly items-center mt-4'>

          {/* cards */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={cardInView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className={cardDivStyle}
            ref={cardRef1}
          >
            <h1 className={cardDivHeadingStyle}>short term</h1>
            <p className='mt-3'>₹ 499 / month</p>

            <div className=" mt-4 w-full">
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
            </div>
            <div className=' flex justify-center items-center mt-5'>
              <button className={`${cardDivBtnStyle} bg-green-400 hover:bg-green-500 hover:shadow-md hover:shadow-green-400`} >Buy now</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={cardInView2 ?{ opacity: 1, x: 0 }:{}}
            transition={{ duration: 0.4, delay: 0.8 }}
            className={cardDivStyle}
            ref={cardRef2}
            >
            <h1 className={cardDivHeadingStyle}>short term</h1>
            <p className='mt-3'>₹ 499 / month</p>

            <div className=" mt-4 w-full">
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
            </div>
            <div className=' flex justify-center items-center mt-5'>
              <button className={`${cardDivBtnStyle} bg-blue-400 hover:bg-blue-500 hover:shadow-md hover:shadow-blue-400`} >Buy now</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={cardInView3 ? { opacity: 1, x: 0 }:{}}
            transition={{ duration: 0.4, delay: 1 }}
            className={cardDivStyle}
            ref={cardRef3}
            >
            <h1 className={cardDivHeadingStyle}>short term</h1>
            <p className='mt-3'>₹ 499 / month</p>

            <div className=" mt-4 w-full">
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
              <p className={cardDivTextStyle}><span className={cardDivSpanSyle}><MdOutlineDone /></span> Premium Access</p>
            </div>
            <div className=' flex justify-center items-center mt-5'>
              <button className={`${cardDivBtnStyle} bg-pink-400 hover:bg-pink-500 hover:shadow-md hover:shadow-pink-400`} >Buy now</button>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </main>
  );
}
