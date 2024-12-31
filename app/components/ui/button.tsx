import * as React from "react";
import { type ButtonHTMLAttributes } from "react";
import { cn } from "~/lib/util.ts";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full",
  {
    variants: {
      variant: {
        default:
          "border border-pink-500/10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        secondary: "bg-slate-300 text-slate-900",
        text: "",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3",
        lg: "px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          duration: 0.5,
        }}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export default Button;
