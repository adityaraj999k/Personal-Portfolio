import type { ReactNode } from "react";

export default function Badge({
  children,
  icon,
  pulse = false,
}: {
  children: ReactNode;
  icon?: ReactNode;
  pulse?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-base-border bg-base-raised/60 px-3.5 py-1.5 text-[12.5px] font-medium text-ink-muted backdrop-blur-sm">
      {pulse ? (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-teal opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal-teal" />
        </span>
      ) : (
        icon
      )}
      {children}
    </span>
  );
}
