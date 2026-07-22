"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  mobileSrc: string;
  desktopSrc: string;
  poster: string;
};

export function LazyVideo({
  mobileSrc,
  desktopSrc,
  poster,
}: LazyVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);

    checkScreen();
    window.addEventListener("resize", checkScreen);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 z-0 h-full w-full">
      {visible ? (
        <video
          key={isMobile ? "mobile" : "desktop"}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className="h-full w-full object-cover"
        >
          <source
            src={isMobile ? mobileSrc : desktopSrc}
            type="video/mp4"
          />
        </video>
      ) : (
        <img
          src={poster}
          alt=""
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}
