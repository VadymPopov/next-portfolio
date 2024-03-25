"use client";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Spinner() {
  const text = "VADYM | FRONTEND DEVELOPER";
  const characters = text.split("");

  const radius = 200;
  const fontSize = "24px";
  const letterSpacing = 12.5;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      const letterAnimation: [
        string,
        { opacity: number },
        { duration: number; at: string }
      ][] = [];
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 0 },
          { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
        ]);
      });
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 1 },
          { duration: 0.4, at: i === 0 ? "+0.8" : "-0.28" },
        ]);
      });
      animate(letterAnimation, {
        repeat: Infinity,
        delay: 3,
      });
      animate(
        scope.current,
        { rotate: 360 },
        { duration: 6, ease: "linear", repeat: Infinity }
      );
    };
    animateLoader();
  }, [animate, characters, scope]);

  return (
    <div className='hidden sm:block absolute 2xl:top-64 2xl:right-60 xl:top-64 xl:right-36 lg:top-12 lg:right-6 md:top-44 md:right-4 sm:top-20 top-20 overflow-hidden z-0'>
      <motion.div
        ref={scope}
        className='relative aspect-square'
        style={{ width: radius * 2 }}>
        <p aria-label={text} />
        <p aria-hidden='true' className='text'>
          {characters.map((ch, i) => (
            <motion.span
              key={i}
              className={`absolute top-0 left-[50%] text-red letter-${i}`}
              style={{
                transformOrigin: `0 ${radius}px`,
                transform: `rotate(${i * letterSpacing}deg)`,
                fontSize,
              }}>
              {ch}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </div>
  );
}
