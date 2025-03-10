"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: { color: "transparent" },
                particles: {
                    number: { value: 70, density: { enable: true, area: 800 } },
                    color: { value: "#fafafa" },
                    shape: { type: "circle" },
                    opacity: { value: 0.3, random: true },
                    size: { value: 3, random: true },
                    move: { enable: true, speed: 1, direction: "none", outModes: "out" },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.1,
                        width: 2,
                    },
                },
                interactivity: {
                    events: { onHover: { enable: false, mode: "repulse" } },
                    modes: { repulse: { distance: 100, duration: 0.4 } },
                },
            }}
            className="absolute inset-0 z-0"
        />
    );
};

export default ParticlesBackground;
