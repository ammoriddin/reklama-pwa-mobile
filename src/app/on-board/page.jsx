"use client"

import { Icons } from '@/icons'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const OnBoard = () => {
    const [step, setStep] = useState(1)
    const router = useRouter()

    const handleSteps = () => {
        if (step < 3) {
            setStep(prev => prev = prev + 1)
        } else (
            router.push("/login")
        )
    }

    return (
        <section className='flex-1 justify-start items-end h-[100vh] w-[100vw] flex flex-wrap'>
            <div className='p-[28px]'>
                {/* logo */}
                <div className='flex items-center gap-[3.5px] mb-[15px]'>
                    <Icons.logo />
                    <h1 className='text-primary text-[20px] leading-[25.5px] font-[800]'>onest</h1>
                </div>

                <p className='text-secondary text-[24px] leading-[27px] font-[800] mb-[8px]'>Зарабатывайте деньги, просматривая рекламу</p>

                <p className='text-primary font-[400] text-[13px] mb-[51px]'>Reference site abg information on its origins, as well as a random generator.</p>

                <div onClick={handleSteps} className={`w-[60px] cursor-pointer block mx-auto p-[5px] h-[60px] rounded-[20px] border-[2px] rotate-45 ${step === 3 ? "border-t-[#7000ff]" : "border-t-[#f5f5f5]"} ${(step >= 2) ? "border-l-[#7000ff]" : "border-l-[#f5f5f5]"} border-r-[#f5f5f5] border-b-[#7000ff]`}>
                    <div className='w-full h-full flex justify-center items-center bg-secondary rounded-[15px]'>
                        <Icons.arrow fill='white' className='rotate-[-45deg]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OnBoard