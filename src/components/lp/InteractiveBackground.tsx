"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export function InteractiveBackground({
  primaryColor,
  accentColor,
  darkMode,
}: Readonly<{
  primaryColor: string;
  accentColor: string;
  darkMode: boolean;
}>) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo((): ISourceOptions => {
    const bg = darkMode ? "#030712" : "#ffffff";
    const particleColor = darkMode ? primaryColor : primaryColor;
    const linkColor = darkMode ? accentColor : primaryColor;

    return {
      fullScreen: { enable: false },
      background: { color: { value: bg } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: ["grab", "bubble"],
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 160,
            links: { opacity: 0.4, color: accentColor },
          },
          bubble: {
            distance: 200,
            size: 6,
            duration: 0.3,
            opacity: 0.8,
          },
          push: { quantity: 3 },
          repulse: { distance: 150, duration: 0.4 },
        },
      },
      particles: {
        color: { value: [particleColor, accentColor] },
        links: {
          color: linkColor,
          distance: 140,
          enable: true,
          opacity: darkMode ? 0.12 : 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: { min: 0.3, max: 1.0 },
          direction: "none",
          outModes: { default: "out" },
          random: true,
          straight: false,
        },
        number: {
          value: 50,
          density: { enable: true, width: 1200, height: 800 },
        },
        opacity: {
          value: { min: 0.15, max: 0.4 },
          animation: {
            enable: true,
            speed: 0.6,
            startValue: "random",
            sync: false,
          },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    };
  }, [primaryColor, accentColor, darkMode]);

  if (!ready) return null;

  return (
    <Particles
      id="lp-particles"
      options={options}
      className="!fixed !inset-0 !z-0"
    />
  );
}
