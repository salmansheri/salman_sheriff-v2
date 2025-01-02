import { useInView, useAnimate, stagger } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

const Intro = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    new SplitType(scope.current.querySelector("h1"), {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        },
      );
    }
  }, [isInView, animate, scope]);

  return (
    <section
      ref={scope}
      id="intro"
      className="min-h-dvh py-24 md:py-23 my-12 md:mt-16"
    >
      <div className="container">
        <h1 className="text-4xl md:text-6xl text-balance lg:text-7xl">
          Crafting stunning websites with clean, efficient code and thoughtful
          design to elevate your business, boost growth, and create a lasting
          online presence
        </h1>
      </div>
    </section>
  );
};

export default Intro;
