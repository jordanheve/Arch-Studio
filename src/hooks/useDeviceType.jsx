import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [windowSize, setWindowSize] = useState("desktop");

  const getDeviceType = (width) => {
    if (width < 640) {
      setWindowSize("mobile");
    } else if (width >= 640 && width < 1024) {
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
