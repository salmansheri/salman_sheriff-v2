import { ArrowRight, Menu, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Button from "~/components/ui/button.tsx";
import React, { useCallback, useState } from "react";
import { navItems } from "~/lib/constant.ts";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSheetOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    handleSheetOpen();

    const url = new URL(event.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed  top-0 left-0 z-50 w-full backdrop-blur-md">
      <div className="container ">
        <div className="flex justify-between h-20 items-center">
          <div className="">
            <a href="/" className="">
              <span className="text-xl font-bold uppercase">
                Salman Sheriff
              </span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <AnimatePresence>
              <motion.button
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                variants={{
                  hidden: {
                    rotate: 0,
                  },
                  visible: {
                    rotate: 90,
                  },
                }}
                initial={false}
                animate={isOpen ? "visible" : "hidden"}
                onClick={handleSheetOpen}
                className="size-11 border border-slate-400/30 rounded-full inline-flex items-center justify-center"
              >
                {isOpen ? <XIcon /> : <Menu />}
              </motion.button>
            </AnimatePresence>

            <Button className="hidden md:inline-flex rounded-full border border-pink-500/10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-4">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-stone-900/80 p-6 overflow-y-auto z-50"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-4xl font-extralight">Menu</span>
              <button onClick={handleSheetOpen}>
                <XIcon />
              </button>
            </div>
            <nav className="space-y-4 mt-10">
              {navItems.map((nav) => (
                <a
                  href={nav.href}
                  key={nav.id}
                  onClick={handleNavClick}
                  className="flex relative items-center isolate justify-between border-t last:border-b py-8 group/nav-item text-slate-300 hover:text-rose-500 cursor-pointer"
                >
                  <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                    {nav.label}
                  </span>
                  <ArrowRight />
                  <div className="w-full absolute h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
