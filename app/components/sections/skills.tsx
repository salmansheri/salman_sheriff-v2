"use client";

import { skillsData } from "~/lib/data.ts";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useRef } from "react";

const Skills = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });
  const SkillCardVariant = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();

    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="min-h-dvh py-16">
      <div className="container">
        <h1 className="text-4xl text-center text-balance md:text-5xl lg:text-6xl">
          My Skills
        </h1>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 place-content-center md:grid-cols-5 items-center gap-6 mt-16"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.label}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              variants={SkillCardVariant}
              initial="hidden"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              animate={isInView ? "visible" : "hidden"}
              transition={{
                duration: 0.5,
                delay: 0.5 * index + 1,
              }}
              className="p-5 h-[20rem] rounded-lg backdrop-blur-lg backdrop-saturate-150 bg-slate-300/10"
            >
              <div className="h-[90%] flex items-center justify-center overflow-hidden">
                <img
                  className="object-cover"
                  alt={skill.label}
                  src={skill.src}
                />
              </div>
              <div>
                <h4 className="text-center font-extralight">{skill.label}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
