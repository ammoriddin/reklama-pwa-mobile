import SplashScreen from "@/components/splash-screen";
import BottomNavigation from "@/container/navigation";

export default function Home() {
  return (
    <div className="relative z-[99]">
      <SplashScreen />

      <BottomNavigation active={'home'} />
    </div>
  );
}
