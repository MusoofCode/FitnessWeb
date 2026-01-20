import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariantStyles = {
  default: "bg-primary text-primary-foreground hover:brightness-95 shadow-elev",
  destructive: "bg-destructive text-destructive-foreground hover:brightness-95",
  outline:
    "border border-input bg-background/30 backdrop-blur-md hover:bg-accent/10 hover:border-accent/40",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent/10 hover:text-foreground",
  link: "text-primary underline-offset-4 hover:underline",

  /* Premium variants */
  hero:
    "relative overflow-hidden bg-primary text-primary-foreground shadow-elev hover:shadow-soft hover:-translate-y-[1px]",
  glass:
    "bg-[hsl(var(--glass))] text-foreground border border-[hsl(var(--glass-border))] backdrop-blur-md hover:bg-accent/10 hover:border-accent/40",
  glow:
    "bg-secondary text-foreground border border-border shadow-soft hover:border-primary/40 hover:shadow-elev",
} as const;

const buttonSizeStyles = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  xl: "h-12 rounded-md px-10 text-base",
  icon: "h-10 w-10",
} as const;

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-[transform,box-shadow,background-color,color,border-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: buttonVariantStyles,
      size: buttonSizeStyles,
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariant = keyof typeof buttonVariantStyles;
export type ButtonSize = keyof typeof buttonSizeStyles;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
