import { Icons } from '@/icons'
import Link from 'next/link'
import React from 'react'

const BottomNavigation = ({active}) => {
    return (
        <div className='fixed w-full bottom-0 left-0 py-[8px] bottom-navigation flex items-center justify-center gap-[50px] bg-[white]'>
            <Link href={'/'} className='flex items-center justify-center flex-col gap-[2px]'>
                <Icons.home fill={active === "home" ? "#7000ff" : "'#322C39'"} width='24px' height='24px' />
                <p className={`text-[11px] font-[400] leading-[13px] ${active === "home" ? "text-purple" : "text-primary"}`}>Bosh Sahifa</p>
            </Link>

            <Link href={'/smm-managers'} className='flex items-center justify-center flex-col gap-[2px]'>
                <Icons.manager fill={active === "smm-manager" ? "#7000ff" : "'#322C39'"} width='24px' height='24px' />
                <p className={`text-[11px] font-[400] leading-[13px] ${active === "smm-manager" ? "text-purple" : "text-primary"}`}>SMM Menegar</p>
            </Link>

            <Link href={'/profile'} className='flex items-center justify-center flex-col gap-[2px]'>
                <Icons.user fill={active === 'profile' ? '#7000FF' : '#322c39'} width='24px' height='24px' />
                <p className={`text-[11px] font-[400] leading-[13px] ${active === "profile" ? "text-purple" : "text-primary"}`}>Profilim</p>
            </Link>
        </div>
    )
}

export default BottomNavigation