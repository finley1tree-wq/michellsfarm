import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

export function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const scrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    const unsubResolved = router.subscribe("onResolved", scrollTop);
    const unsubBefore = router.subscribe("onBeforeNavigate", scrollTop);
    return () => {
      unsubResolved();
      unsubBefore();
    };
  }, [router]);

  return null;
}
