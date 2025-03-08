import { useEffect, useRef, useState } from "react";

import { cn } from "../../lib/utils";

import "./style.css";

export default function InfiniteHorizontalScrollAnimation() {
  const scroller = useRef(null);
  const scrollerInner = useRef(null);
  const [duplicatedChildren, setDuplicatedChildren] = useState([]);

  useEffect(() => {
    function addAnimation() {
      if (scroller.current) {
        scroller.current.setAttribute("data-animated", true);
      }
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    if (scrollerInner.current) {
      const scrollerInnerContent = Array.from(scrollerInner.current.children);

      const duplicatedItems = scrollerInnerContent.map((item, index) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);

        return {
          key: `duplicated-${index}`,
          ...(item.className ? { className: item.className } : null),
          innerHTML: item.innerHTML,
          ariaHidden: true,
        };
      });

      setDuplicatedChildren(duplicatedItems);
    }
  }, []);

  return (
    <main
      className={cn(
        "grid gap-4 min-h-[100vh] place-content-center font-sans text-[1.125rem] bg-[var(--clr-primary-800)] text-white"
      )}
    >
      <h1 className="text-center text-2xl font-bold">
        Infinite horizontal scroll animation
      </h1>

      {/* below div has the scroller class */}
      <div
        data-direction="right"
        data-speed="slow"
        ref={scroller}
        className={cn(
          "max-w-[600px] data-[animated=true]:overflow-hidden data-[animated=true]:[-webkit-mask:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)] data-[animated=true]:[mask:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)] data-[direction=right]:[--_animation-direction:reverse] data-[direction=left]:[--_animation-direction:forwards] data-[speed=slow]:[--_animation-duration:60s] data-[speed=fast]:[--_animation-duration:20s]",
          "*:flex *:gap-4 *:flex-wrap data-[animated=true]:*:flex-nowrap data-[animated=true]:*:w-max data-[animated=true]:*:animate-[scroll_var(--_animation-duration,40s)_var(--_animation-direction,forwards)_linear_infinite]"
        )}
      >
        {/* below ul has the scroller_inner class */}
        <ul
          ref={scrollerInner}
          className={cn(
            "py-4",
            "*:px-4 *:py-3 *:bg-[var(--clr-primary-400)] *:rounded *:shadow-[0_0.5rem_1rem_-0.25rem_var(--clr-primary-900)]"
          )}
        >
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>SSG</li>
          <li>webdev</li>
          <li>animation</li>
          <li>UI/UX</li>
          {duplicatedChildren.map((item) => (
            <li
              key={item.key}
              className={item.className || undefined}
              aria-hidden={item.ariaHidden}
            >
              {item.innerHTML}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
