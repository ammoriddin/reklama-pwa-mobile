"use client"

import React from 'react'
import ReklamaSection from "@/components/reklama-section";
import { Icons } from "@/icons";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
        <ReklamaSection />

        <div className="fixed w-full bottom-0 left-0 py-[12px] bg-[black] bottom-navigation flex items-center justify-center gap-[50px]">
            <Link href={"`/"} className="flex items-center justify-center flex-col gap-[2px]">
                <Icons.home fill={"#fff"} width="24px" height="24px" />
                <p className={`text-[11px] font-[400] leading-[13px] text-[white]`}>Bosh Sahifa</p>
            </Link>

            <Link href={"/smm-managers"} className="flex items-center justify-center flex-col gap-[2px]">
                <Icons.manager fill={"#fff"} width="24px" height="24px" />
                <p className={`text-[11px] font-[400] leading-[13px] text-[white]`}>SMM Menegar</p>
            </Link>

            <Link href={"/profile"} className="flex items-center justify-center flex-col gap-[2px]">
                <Icons.user fill={"#fff"} width="24px" height="24px" />
                <p className={`text-[11px] font-[400] leading-[13px] text-[white]`}>Profilim</p>
            </Link>
        </div>
    </>
  )
}

export default HomePage