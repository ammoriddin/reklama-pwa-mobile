"use client"

import { Icons } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Sidebar = () => {
    const [navbar, setNavbar] = useState(false)
    
    return (
        <>
            {/* Overlay */}
            {
                navbar &&
                <div onClick={() => setNavbar(false)} className={`w-[100vw] h-[100vh] transition-all duration-700 absolute top-0 left-0 bg-[white]/20 backdrop-blur-sm z-[999]`}>
                </div>
            }

            {/* Sidebar */}
            <ul className={`absolute flex flex-col navbar-shadow min-w-[336px] overflow-auto pb-[32px] z-[999999] transition-all ${navbar ? "translate-x-[0%]" : "translate-x-[-110%]"} duration-500 bg-[white] top-[0] left-[0] h-[100vh]`}>
                <div className="px-[20px] sticky top-0 pt-[52px] pb-[25px] w-full sidebar-bg ">
                    {/* user data */}
                    <div className='flex items-center gap-[12px]'>
                        <div className='flex justify-center items-center w-[82px] h-[82px] bg-[white]/10 rounded-[50%] '>
                            <Icons.user fill="white" width='32px' height='32px' />
                        </div>

                        <div>
                            <h1 className='font-[500] text-[24px] leading-[28.5px] text-[white]'>Shaxriyor Oripov</h1>
                            <p className='font-[400] text-[14px] leading-[17px] text-[white]/60'>Balance: 12 034.00 so’m</p>
                        </div>
                    </div>

                </div>
                {/* Sections */}
                <div className="px-[20px] flex-grow-[1]">

                    {/* Profile */}
                    <div className="py-[16px] flex items-center gap-[12px] border-b-[1px] border-solid border-borderColor mb-[25px]">
                        <div className="w-[46px] h-[46px]">
                            <Image className="w-full h-full rounded-[50%] object-cover object-center" width={46} height={46} alt="profile photo" src={'/user-photo.jpg'} />
                        </div>
                        <p className="text-[#121212] font-[400] text-[16px] leading-[19px]">SMM meneger profile</p>
                    </div>

                    {/* Notification sections */}
                    <div className="flex flex-col gap-[20px] border-b-[1px] border-solid border-borderColor pb-[25px] mb-[35px]">
                        <div className="flex items-start gap-[6px]">
                            <Icons.inbox circle={true} fill='#322C39' width='24px' height='24px' />
                            <p className="text-[16px] leading-[19px] font-[400]">Notifications</p>
                        </div>

                        <div className="flex items-start gap-[6px]">
                            <Icons.hash stroke='#322C39' width='24px' height='24px' />
                            <p className="text-[16px] leading-[19px] font-[400]">Mening qiziqishlar</p>
                        </div>

                        <div className="flex items-start gap-[6px]">
                            <Icons.statsIcon stroke='#322C39' width='24px' height='24px' />
                            <p className="text-[16px] leading-[19px] font-[400]">Eng ko’p pul ishlaganlar</p>
                        </div>
                    </div>

                    {/* Settings */}
                    <ul className="flex flex-col gap-[24px] flex-grow-[1] mb-[50px]">
                        <li>
                            <Link href={'/settings'} className="flex items-center gap-[6.5px]">
                                <Icons.share fill='#322C39' width='16px' height='16px' />
                                <p className="text-primary font-[400] text-[15px] leading-[15.5px]">Settings</p>
                            </Link>
                        </li>

                        <li>
                            <Link href={'/settings'} className="flex items-center gap-[6.5px]">
                                <Icons.share fill='#322C39' width='16px' height='16px' />
                                <p className="text-primary font-[400] text-[15px] leading-[15.5px]">Share</p>
                            </Link>
                        </li>

                        <li>
                            <Link href={'/settings'} className="flex items-center gap-[6.5px]">
                                <Icons.share fill='#322C39' width='16px' height='16px' />
                                <p className="text-primary font-[400] text-[15px] leading-[15.5px]">Rate the app</p>
                            </Link>
                        </li>

                        <li>
                            <Link href={'/settings'} className="flex items-center gap-[6.5px]">
                                <Icons.share fill='#322C39' width='16px' height='16px' />
                                <p className="text-primary font-[400] text-[15px] leading-[15.5px]">Support</p>
                            </Link>
                        </li>

                        <li>
                            <Link href={'/settings'} className="flex items-center gap-[6.5px]">
                                <Icons.share fill='#322C39' width='16px' height='16px' />
                                <p className="text-primary font-[400] text-[15px] leading-[15.5px]">Lincense Agreement</p>
                            </Link>
                        </li>

                        <li>
                            <Link href={'/settings'} className="flex items-center gap-[6.5px]">
                                <Icons.share fill='#322C39' width='16px' height='16px' />
                                <p className="text-primary font-[400] text-[15px] leading-[15.5px]">Privacy Policy</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                
                {/* logout */}
                <div className="px-[24px] flex items-center gap-[4px]">
                    <Icons.logout fill='#FF0000' />
                    <p className='text-[14px] font-[400] text-[#ff0000] leading-[15.5px]'>Log out</p>
                </div>
            </ul>

            {/* Burger & Close */}
            <div onClick={() => setNavbar(!navbar)} className={`absolute h-[20px] cursor-pointer w-[20px] z-[999999999] left-[20px] ${!navbar ? "top-[20px]" : "flex flex-col gap-[3px] top-[10px]"}`}>
                <span onClick={() => setNavbar(!navbar)} className={`h-[2px] w-full absolute bg-[white] rounded-[5px] transition-all duration-500 ease-in-out ${navbar ? "bottom-[0px] rotate-[45deg]" : ""}`}></span>
                <span onClick={() => setNavbar(!navbar)} className={`h-[2px] w-full absolute bg-[white] rounded-[5px] transition-all duration-500 ease-in-out ${navbar ? "bottom-[0px] opacity-0" : "bottom-[12px]"}`}></span>
                <span onClick={() => setNavbar(!navbar)} className={`h-[2px] w-full absolute bottom-[-12px] bg-[white] rounded-[5px] transition-all duration-500 ease-in-out ${navbar ? "bottom-[0.01pc] rotate-[-45deg]" : "bottom-[6px]"}`}></span>
            </div>
        </>
    )
}

export default Sidebar