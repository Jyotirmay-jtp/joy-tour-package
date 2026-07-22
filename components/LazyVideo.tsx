"use client";
import { useEffect, useRef, useState } from "react";

export function LazyVideo({ mobileSrc, desktopSrc, poster }: { mobileSrc: string; desktopSrc: string; poster: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { rootMargin: "200px" });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 z-0 h-full w-full">
      {visible ? (
        <video autoPlay muted loop playsInline poster={poster} className="h-full w-full object-cover">
          <source src={mobileSrc} media="(max-width: 768px)" type="video/mp4" />
          <source src={desktopSrc} type="video/mp4" />
        </video>
      ) : (
        <img src={poster} alt="" className="h-full w-full object-cover" />
      )}
    </div>
  );
}