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
  const [mounted, setMounted] = useState(false);
  const [src, setSrc] = useState("");

  useEffect(() => {
    const update = () => {
      setSrc(window.innerWidth <= 768 ? mobileSrc : desktopSrc);
      setMounted(true);
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, [mobileSrc, desktopSrc]);

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 z-0 h-full w-full">
      {mounted && visible ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className="h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
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
