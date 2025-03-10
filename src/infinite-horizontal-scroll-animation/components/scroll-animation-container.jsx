import { useEffect, useRef } from "react";

import { cn } from "../../../lib/utils";

import "../style.css";

export const ScrollAnimationContainer = ({
  className,
  direction = "left",
  speed = null,
  children,
}) => {
  const scroller = useRef(null);
  const scrollerInner = useRef(null);
  const duplicateChildren = useRef(null);

  useEffect(() => {
    function addAnimation() {
      if (
        scroller.current &&
        scrollerInner.current &&
        duplicateChildren.current
      ) {
        scroller.current.setAttribute("data-animation", true);
        scrollerInner.current.setAttribute("data-animation", true);
        duplicateChildren.current.setAttribute("data-animation", true);
      }
    }

    function cleanupAnimation() {
      if (
        scroller.current &&
        scrollerInner.current &&
        duplicateChildren.current
      ) {
        scroller.current.removeAttribute("data-animation");
        scrollerInner.current.removeAttribute("data-animation");
        duplicateChildren.current.removeAttribute("data-animation");
      }
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    return cleanupAnimation;
  }, []);

  return (
    // below div has the scroller class
    <div
      data-direction={direction}
      data-speed={speed}
      ref={scroller}
      className={cn(
        "w-full data-[animation=true]:overflow-hidden data-[animation=true]:[-webkit-mask:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)] data-[animation=true]:[mask:linear-gradient(90deg,transparent,white_20%,white_80%,transparent)] data-[direction=right]:[--_animation-direction:reverse] data-[direction=left]:[--_animation-direction:forwards] data-[speed=slow]:[--_animation-duration:60s] data-[speed=fast]:[--_animation-duration:20s]",
        className
      )}
    >
      {/* below div has the scroller_inner class */}
      <div
        ref={scrollerInner}
        className={cn(
          "py-4 flex gap-4 flex-wrap data-[animation=true]:flex-nowrap data-[animation=true]:w-max data-[animation=true]:animate-[scroll_var(--_animation-duration,40s)_var(--_animation-direction,forwards)_linear_infinite]"
        )}
      >
        {children}
        <div
          ref={duplicateChildren}
          className={cn(
            "hidden data-[animation=true]:flex gap-4 flex-nowrap w-max"
          )}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
