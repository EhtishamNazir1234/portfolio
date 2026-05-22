import { useRef } from "react";
import { motion } from "framer-motion";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const MagneticButton = ({
  children,
  strength = 18,
  className = "",
  disabled = false,
}) => {
  const buttonRef = useRef(null);

  const handleMove = (event) => {
    if (disabled || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);

    const x = clamp(relX / 6, -strength, strength);
    const y = clamp(relY / 6, -strength, strength);

    buttonRef.current.style.setProperty("--magnet-x", `${x}px`);
    buttonRef.current.style.setProperty("--magnet-y", `${y}px`);
  };

  const handleLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.setProperty("--magnet-x", "0px");
    buttonRef.current.style.setProperty("--magnet-y", "0px");
  };

  return (
    <motion.span
      ref={buttonRef}
      className={`magnetic-button ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={disabled ? undefined : { scale: 0.97 }}
    >
      {children}
    </motion.span>
  );
};

export default MagneticButton;
