import { BadgeCheck } from "lucide-react";

import { Logo } from "./icons/logo";
import { ThemeModeToggle } from "./theme-mode-toggle";

export function Header() {
  return (
    <header className="relative mx-auto flex w-full max-w-7xl items-start justify-center px-9 lg:items-center lg:justify-normal lg:px-0">
      <div className="flex items-center justify-center gap-2 py-11 lg:pl-6">
        <BadgeCheck className="size-9 text-purple-500" />
        <span className="font-sora text-2xl font-extrabold uppercase leading-snug tracking-wide">
          Sorteio.ai
        </span>
        <ThemeModeToggle />
      </div>
    </header>
  );
}
