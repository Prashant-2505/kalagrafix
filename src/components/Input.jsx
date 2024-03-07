import React from 'react'

const Input = ({ label, placeholder }) => {
    return (
        <div>
            <div className='relative'>
                <p className=" bg-black absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-hite">
                    {label}
                </p>
                <input
                    className="border  focus:outline-gray-600 w-full p-4 m-0 text-base block bg-black border-gray-300 rounded-md"
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default Input
