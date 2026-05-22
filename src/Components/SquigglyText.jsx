import { useId } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export function SquigglyText({
  children,
  className = "",
  stepDuration = 70,
  scale = [6, 9],
}) {
  const rawId = useId();
  const filterId = `squiggle-${rawId.replace(/:/g, "")}`;

  const [startScale, endScale] = Array.isArray(scale) ? scale : [scale, scale];
  const minScale = clamp(startScale, 1, 30);
  const maxScale = clamp(endScale, 1, 30);
  const duration = `${Math.max(stepDuration * 16, 800)}ms`;

  return (
    <span className={`squiggly-text ${className}`.trim()}>
      <svg
        className="squiggly-text__svg"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.03"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            xChannelSelector="R"
            yChannelSelector="G"
            scale={minScale}
          >
            <animate
              attributeName="scale"
              dur={duration}
              values={`${minScale};${maxScale};${minScale + 1};${minScale}`}
              repeatCount="indefinite"
            />
          </feDisplacementMap>
        </filter>
      </svg>
      <span
        className="squiggly-text__content"
        style={{ filter: `url(#${filterId})` }}
      >
        {children}
      </span>
    </span>
  );
}
