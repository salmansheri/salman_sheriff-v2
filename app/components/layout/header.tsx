import { Menu } from "lucide-react";
import { motion } from "motion/react";
import Button from "~/components/ui/button.tsx";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md">
      <div className="container ">
        <div className="flex justify-between h-20 items-center">
          <div>
            <a href="/" className="">
              <span className="text-xl font-bold uppercase">
                Salman Sheriff
              </span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <button className="size-11 border border-slate-400/30 rounded-full inline-flex items-center justify-center">
              <Menu />
            </button>
            <Button className="hidden md:inline-flex rounded-full border border-pink-500/10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-4">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
