import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useIsOnboardsShow = () => {
    const router = useRouter();

    useEffect(() => {
        if (window.localStorage.getItem("token")) {
            router.push("/");
        } else if (!window.localStorage.getItem('firstEntry')) {
            router.push("/on-board");
        } else {
            router.push('/login')
        }
    }, [router]);
}