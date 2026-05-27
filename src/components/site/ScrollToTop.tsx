import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const scrollTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    window.addEventListener("app:navigate", scrollTop);
    window.addEventListener("popstate", scrollTop);
    return () => {
      window.removeEventListener("app:navigate", scrollTop);
      window.removeEventListener("popstate", scrollTop);
    };
  }, []);

  return null;
}
