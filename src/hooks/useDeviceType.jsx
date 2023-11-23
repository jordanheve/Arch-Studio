import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [windowSize, setWindowSize] = useState("desktop");

  const getDeviceType = (width) => {
    if (width < 400) {
      setWindowSize("mobile");
    } else if (width >= 400 && width < 900) {
      setWindowSize("tablet");
    } else {
      setWindowSize("desktop");
    }
  };

  const handleResize = () => {
    getDeviceType(window.innerWidth);
  };

  useEffect(() => {
    getDeviceType(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useDeviceType;
