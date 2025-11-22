import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const contentDiv = document.getElementById("main-content-scroll");

    if (contentDiv) {
      contentDiv.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
