import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToHash - makes in-page anchor links (e.g. "/#features", "#pricing")
 * work across route changes. React Router doesn't scroll to a #hash on its
 * own, so on every location change we either scroll to the hashed element or
 * reset to the top of the page.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Defer to let the destination route render first.
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo(0, 0);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
