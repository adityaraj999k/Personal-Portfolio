import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface CommonProps {
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type Props = ButtonAsButton | ButtonAsAnchor;

/** Renders as a <button> by default, or as an <a> when `as="a"` is passed (with a required `href`). */
export default function Button({ variant = "primary", icon, children, className = "", ...props }: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (props.as === "a") {
    const { as: _as, ...anchorProps } = props;
    return (
      <a className={classes} {...anchorProps}>
        {children}
        {icon}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = props;
  return (
    <button className={classes} {...buttonProps}>
      {children}
      {icon}
    </button>
  );
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[14px] font-medium transition-all duration-200 focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-base hover:opacity-90 dark:hover:bg-white shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset] hover:-translate-y-0.5",
  secondary:
    "border border-base-border bg-base-raised/70 text-ink hover:border-accent/50 hover:bg-base-raised hover:-translate-y-0.5",
  ghost: "text-ink-muted hover:text-ink",
};
