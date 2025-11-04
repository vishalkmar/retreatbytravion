"use client";

import React, { useMemo } from "react";

export default function SeychellesGallery({
  images = [
    "/seychelles/galary/g1.jpeg",
    "/seychelles/galary/g2.jpeg",
     "/seychelles/galary/g3.jpeg",
      "/seychelles/galary/g4.jpeg",
       "/seychelles/galary/g5.webp",
        "/seychelles/galary/g6.webp",
         "/seychelles/galary/g7.webp",
          "/seychelles/galary/g8.webp",

  ],
  size = 520, // overall size of circle
  radius = 240, // circle radius (distance from center)
  speed = 20, // rotation duration
}) {
  const layout = useMemo(() => {
    const n = images.length;
    return images.map((src, i) => ({
      src,
      angle: (360 / n) * i,
    }));
  }, [images]);

  const itemSize = Math.round(size * 0.5); // enlarged images

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-[100px] bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden"
     style={{paddingBottom:'150px',paddingTop:'100px'}} >
      
      {/* Heading */}
      <h1
        className="text-5xl md:text-7xl font-bold tracking-wide text-center text-white drop-shadow-lg mb-[70px]"
      >
        Seychelles Moments Gallery
      </h1>

      <style>{`
        @keyframes sg-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .sg-rotating {
          animation: sg-rotate ${speed}s linear infinite;
          animation-play-state: running;
        }
        .sg-rotating:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="relative mt-[50px]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {/* Rotating Circle */}
        <div
          className="absolute inset-0 flex items-center justify-center sg-rotating"
          style={{
            animation: `sg-rotate ${speed}s linear infinite`,
          }}
        >
          {layout.map((it, idx) => {
            const transform = `rotate(${it.angle}deg) translate(${radius}px) rotate(-${it.angle}deg)`;
            return (
              <div
                key={idx}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  transform,
                  width: `${itemSize}px`,
                  height: `${itemSize}px`,
                  marginLeft: `-${itemSize / 2}px`,
                  marginTop: `-${itemSize / 2}px`,
                }}
              >
                <div
                  className="overflow-hidden rounded-full shadow-2xl"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "4px solid rgba(255,255,255,0.3)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.15), rgba(0,0,0,0.05))",
                  }}
                >
                  <img
                    src={it.src}
                    alt={`gallery-${idx}`}
                    className="w-full h-full object-cover block"
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
