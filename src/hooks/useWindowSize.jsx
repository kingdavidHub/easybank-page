import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const currentWidth = () => setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    window.addEventListener("resize", currentWidth);

    return () => {
      window.removeEventListener("resize", currentWidth);
    };
  }, []);

  return windowSize;
}


export default useWindowSize;