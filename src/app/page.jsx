import HomePage from "@/components/home-page";
import Sidebar from "@/components/sidebar";
import SplashScreen from "@/components/splash-screen";

export default function Home() {

  return (
    <div className="relative z-[99]">

      {/* Sidebar */}
      <Sidebar />

      <SplashScreen />

      <HomePage />      
    </div>
  );
}
