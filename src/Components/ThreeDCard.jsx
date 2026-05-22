import { createContext, useContext, useMemo, useRef, useState } from "react";

const CardContext = createContext({ isHovered: false });

export const CardContainer = ({ children, className = "" }) => {
  return <div className={`threed-card__container ${className}`.trim()}>{children}</div>;
};

export const CardBody = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const rotateY = ((offsetX / rect.width) - 0.5) * 16;
    const rotateX = (0.5 - (offsetY / rect.height)) * 14;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleEnter = () => setIsHovered(true);

  const handleLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  const value = useMemo(() => ({ isHovered }), [isHovered]);

  return (
    <CardContext.Provider value={value}>
      <div
        className="threed-card__perspective"
        onMouseMove={handleMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div ref={cardRef} className={`threed-card__body ${className}`.trim()}>
          {children}
        </div>
      </div>
    </CardContext.Provider>
  );
};

export const CardItem = ({
  as: Component = "div",
  children,
  className = "",
  translateZ = 0,
  ...rest
}) => {
  const { isHovered } = useContext(CardContext);
  const z = Number(translateZ) || 0;

  return (
    <Component
      className={`threed-card__item ${className}`.trim()}
      style={{
        transform: isHovered ? `translateZ(${z}px)` : "translateZ(0px)",
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
