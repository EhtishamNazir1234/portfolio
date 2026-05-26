import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const ServicesHoverGlow = ({ children, className = "" }) => {
  const wrapRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [pos, setPos] = useState({ left: 0, top: 0, width: 0, height: 0 });

  const childrenArray = useMemo(() => {
    return Array.isArray(children) ? children : [children];
  }, [children]);

  useEffect(() => {
    if (activeIndex === null || !wrapRef.current) return;

    const cards = wrapRef.current.querySelectorAll(".services__hover-item");
    const current = cards[activeIndex];
    if (!current) return;

    setPos({
      left: current.offsetLeft,
      top: current.offsetTop,
      width: current.offsetWidth,
      height: current.offsetHeight,
    });
  }, [activeIndex, childrenArray.length]);

  return (
    <div
      className={`services__hover-grid ${className}`.trim()}
      ref={wrapRef}
      onMouseLeave={() => setActiveIndex(null)}
    >
      {activeIndex !== null && (
        <motion.span
          className="services__hover-bg"
          initial={false}
          animate={pos}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
        />
      )}
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className="services__hover-item"
          onMouseEnter={() => setActiveIndex(index)}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ServicesHoverGlow;
