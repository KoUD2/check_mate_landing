import { useState, useEffect } from "react";

function useWindowSize() {
  // Use a safe default for SSR that matches most desktop screens
  // This prevents hydration mismatches
  const [windowSize, setWindowSize] = useState({
    width: 1280, // Default to desktop size to avoid hydration issues
    height: 720,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Set initial size after component mounts
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Return default size until component is mounted to avoid hydration issues
  if (!mounted) {
    return {
      width: 1280,
      height: 720,
    };
  }

  return windowSize;
}

export default useWindowSize;
