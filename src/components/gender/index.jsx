"use client"

import React, { useState } from 'react'

const Gender = () => {
    const [isMail, setIsMail] = useState(null)
    
    return (
        <div className='flex mb-[90px] items-center justify-evenly w-full'>
            <p onClick={() => setIsMail(true)} className={`${isMail === true ? "text-purple" : "text-black"} cursor-pointer text-[1rem] font-[500]`}>Erkak</p>
            <span className='h-[24px] w-[2px] bg-[#eee]'></span>
            <p onClick={() => setIsMail(false)} className={`${isMail === false ? "text-purple" : "text-black"} cursor-pointer text-[1rem] font-[500]`}>Ayol</p>
        </div>
    )
}

export default Gender