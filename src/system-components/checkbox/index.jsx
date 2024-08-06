"use client"

import React, { useState } from 'react'

const Checkbox = () => {
    const [checkbox, setCheckbox] = useState(false)
    
    return (
        <div onClick={() => setCheckbox(!checkbox)} className={`${checkbox} cursor-pointer w-[17px] ${checkbox ? "bg-purple border-purple" : "bg-[white] border-[#eee]"} h-[17px] flex justify-center items-center rounded-[2px] border-[1px]`}>
            <span className='text-[white]'>&#10003;</span>
        </div>
    )
}

export default Checkbox