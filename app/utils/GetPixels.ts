import PixelsWorker from "./GetPixelsWorkers.js?worker";

import { useState, useEffect, useRef } from "react";

const useHeaderColor = (imageUrl: string, headerRef: React.RefObject<HTMLElement>) => {
  const [textClass, setTextClass] = useState("text-gray-800");
  
  useEffect(() => {
    
    console.log(!imageUrl || !headerRef.current)
    if (typeof window === "undefined" || !imageUrl || !headerRef.current) return;
    const worker =  new PixelsWorker();


    const sampleSize = Math.floor(
      (headerRef.current.clientHeight * headerRef.current.clientWidth) / 100
    );


    worker.postMessage({
      "imageUrl":imageUrl,
      "sampleSize":sampleSize
    });

    worker.onmessage = (event) => {
      console.log(event)
      if (event.data.error) {
        setTextClass("text-gray-800");
        return;
      }
      
      const averageValue = event.data.averageGray / sampleSize;
      setTextClass(averageValue < 128 ? "text-white/85" : "text-gray-800");
    };

  }, [imageUrl]);

  return textClass;
};

export default useHeaderColor;