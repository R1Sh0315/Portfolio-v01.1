import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MovingCircle: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    // ease: "power2.inOut",
    if (circle) {
      const onMouseMove = (e: MouseEvent) => {
        gsap.to(circle, {
          x: e.clientX - circle.clientWidth / 2,
          y: e.clientY - circle.clientHeight / 2,
        });
      };

      window.addEventListener("mousemove", onMouseMove);

      return () => {
        // Remove the event listener when the component unmounts
        window.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, [circleRef]);

  return (
    <div className="moving-circle-container">
      <div ref={circleRef} className="moving-circle"></div>
    </div>
  );
};

export default MovingCircle;
