import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useIsOnboardsShow = () => {
    const router = useRouter();

    useEffect(() => {
        if (window.localStorage.getItem("isOnboard")) {
            router.push("/");
        } else {
            router.push("/on-board");
        }
    }, [router]);
}