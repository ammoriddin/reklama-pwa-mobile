"use client"

import { useIsOnboardsShow } from "@/hooks/is-onboard-show/useIsOnboardShow"
import { Icons } from "@/icons"
import { useEffect, useState } from "react"

const SplashScreen = () => {
    const [isWelcome, setIsWelcome] = useState(true)

    useEffect(() => {
        setIsWelcome(false)
        
        setTimeout(() => {
            setIsWelcome("hidden")
        }, [1500]);
    }, [isWelcome])

    useEffect(() => {
        window.localStorage.setItem("fristEntry", 'false')
    }, [])
    
    useIsOnboardsShow()

    return (
        <div className={`fixed bg-[white] z-[999] h-full w-full ${isWelcome} top-0 left-0 transition-[opacity] duration-[1.5s] ${isWelcome ? "opacity-100" : "opacity-0"}`}>
            <div className="absolute flex items-center gap-[4px] top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <Icons.logo />
                <h1 className="font-[800] text-[2rem] leading-[40.8px]">onest</h1>
            </div>        
            <p className="absolute left-[50%] translate-x-[-50%] bottom-[32px] text-[black]/40 leading-[16.5px] tex-[0.875rem] font-[400]">Version: 01.01</p>
        </div>
    )
}

export default SplashScreen