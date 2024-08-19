import ReklamaSection from "@/components/reklama-section";
import SplashScreen from "@/components/splash-screen";
import { Icons } from "@/icons";
import Link from "next/link";

export default function Home() {

  return (
    <div className="relative z-[99]">
      <SplashScreen />

      <ReklamaSection />

      <div className="fixed w-full bottom-0 left-0 py-[12px] bottom-navigation flex items-center justify-center gap-[50px] bg-[transparent]">
        <Link href={"/"} className="flex items-center justify-center flex-col gap-[2px]">
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
    </div>
  );
}
