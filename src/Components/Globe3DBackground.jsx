import { useEffect, useMemo, useState } from "react";
import Globe from "react-globe.gl";

const sampleMarkers = [
  { lat: 40.7128, lng: -74.006, label: "New York" },
  { lat: 51.5074, lng: -0.1278, label: "London" },
  { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
  { lat: -33.8688, lng: 151.2093, label: "Sydney" },
  { lat: 48.8566, lng: 2.3522, label: "Paris" },
  { lat: 28.6139, lng: 77.209, label: "New Delhi" },
  { lat: 55.7558, lng: 37.6173, label: "Moscow" },
  { lat: -22.9068, lng: -43.1729, label: "Rio de Janeiro" },
  { lat: 31.2304, lng: 121.4737, label: "Shanghai" },
  { lat: 25.2048, lng: 55.2708, label: "Dubai" },
  { lat: -34.6037, lng: -58.3816, label: "Buenos Aires" },
  { lat: 1.3521, lng: 103.8198, label: "Singapore" },
  { lat: 37.5665, lng: 126.978, label: "Seoul" },
];

const Globe3DBackground = () => {
  const [size, setSize] = useState({ width: 1000, height: 700 });

  useEffect(() => {
    const update = () => {
      setSize({
        width: window.innerWidth,
        height: Math.max(700, window.innerHeight * 1.05),
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const points = useMemo(
    () =>
      sampleMarkers.map((item) => ({
        ...item,
        size: 0.45,
        color: "#7a5cff",
      })),
    []
  );

  return (
    <div className="home__globe-bg" aria-hidden="true">
      <Globe
        width={size.width}
        height={size.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        pointsData={points}
        pointAltitude="size"
        pointColor="color"
        labelsData={sampleMarkers}
        labelLat="lat"
        labelLng="lng"
        labelText="label"
        labelSize={() => 0.65}
        labelDotRadius={() => 0.3}
        labelColor={() => "rgba(145,128,255,0.82)"}
        atmosphereColor="#4da6ff"
        atmosphereAltitude={0.18}
      />
    </div>
  );
};

export default Globe3DBackground;
