import { ReactNode } from "react";

interface BadgeProps {
  icon: ReactNode;
  text: string;
  className?: string;
}

export default function Badge({ icon, text, className = "" }: BadgeProps) {
  return (
    <div
      className={`flex gap-3 items-center justify-center bg-secondary py-2 px-6 rounded-full w-fit max-w-full ${className}`}
    >
      <span className="text-accent">
        {icon}
      </span>

      <span className="font-semibold text-primary tracking-wide wrap-break-word">
        {text}
      </span>
    </div>
  );
}
