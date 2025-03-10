import { ScrollAnimationContainer } from "./components/scroll-animation-container";

import { cn } from "../../lib/utils";

import "./style.css";

export default function InfiniteHorizontalScrollAnimation() {
  return (
    <main
      className={cn(
        "grid gap-4 min-h-[100vh] place-content-center font-sans text-[1.125rem] bg-[var(--clr-primary-800)] text-white"
      )}
    >
      <h1 className="text-center text-2xl font-bold">
        Infinite horizontal scroll animation
      </h1>

      <ScrollAnimationContainer
        className="max-w-[600px]"
        direction="right"
        speed="slow"
      >
        <li className="px-4 py-3 bg-[var(--clr-primary-400)] rounded shadow-[0_0.5rem_1rem_-0.25rem_var(--clr-primary-900)] list-none">
          HTML
        </li>
        <li className="px-4 py-3 bg-[var(--clr-primary-400)] rounded shadow-[0_0.5rem_1rem_-0.25rem_var(--clr-primary-900)] list-none">
          CSS
        </li>
        <li className="px-4 py-3 bg-[var(--clr-primary-400)] rounded shadow-[0_0.5rem_1rem_-0.25rem_var(--clr-primary-900)] list-none">
          JS
        </li>
        <li className="px-4 py-3 bg-[var(--clr-primary-400)] rounded shadow-[0_0.5rem_1rem_-0.25rem_var(--clr-primary-900)] list-none">
          SSG
        </li>
        <li className="px-4 py-3 bg-[var(--clr-primary-400)] rounded shadow-[0_0.5rem_1rem_-0.25rem_var(--clr-primary-900)] list-none">
          webdev
        </li>
        <li className="px-4 py-3 bg-[var(--clr-primary-400)] rounded shadow-[0_0.5rem_1rem_-0.25rem_var(--clr-primary-900)] list-none">
          animation
        </li>
        <li className="px-4 py-3 bg-[var(--clr-primary-400)] rounded shadow-[0_0.5rem_1rem_-0.25rem_var(--clr-primary-900)] list-none">
          UI/UX
        </li>
      </ScrollAnimationContainer>
    </main>
  );
}
