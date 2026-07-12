// src/components/ScrollToTop.jsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const root = document.getElementById("root");

    if (root) {
      root.scrollTo(0, 0);
      root.scrollTop = 0;
    }

    // Also reset window/html/body in case overflow behavior changes
    // on certain pages or screen sizes.
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}