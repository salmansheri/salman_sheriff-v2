import { navItems } from "~/lib/constant.ts";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-slate-900/90 backdrop-blur-lg backdrop-saturate-150"
    >
      <div className="container">
        <div className="py-16 grid md:grid-cols-3 md:items-center">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance font-extralight">
              Enough talk. Let&apos;s create something exceptional
            </h2>
            <a href="mailto:sheriffsalman00@gmail.com">
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  y: 1,
                }}
                className="my-6 px-4 py-2 border-2 border-pink-500 hover:shadow-pink-600 transition-all duration-500 ease-in-out delay-100 shadow-2xl  inline-flex items-center gap-2"
              >
                <span>sheriffsalman00@gmail.com</span>
                <ArrowRight className="size-4" />
              </motion.button>
            </a>
          </div>

          <nav className="md:col-span-1 md:items-end">
            {navItems.map(({ href, label, id }) => (
              <a key={id} href={href} className="w-full">
                <button className="text-lg w-full">{label}</button>
              </a>
            ))}
          </nav>
        </div>

        <p className="py-16 text-slate-200/40 text-sm text-center text-balance">
          Copyright &copy; Salman Sheriff &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
