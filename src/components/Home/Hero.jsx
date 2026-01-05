import FloatingLines from "../FloatingLines";

export default function Hero() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[4, 8, 12]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={4}
          interactive={true}
          parallax={true}
          linesGradient={["#001F7F", "#0045EF", "#0066FF", "#3399FF", "#66B3FF"]}
        />
      </div>

      {/* Headline */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto text-white text-center px-6 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          Driving Innovation <br /> Pushing Boundaries <br /> Elevated by AI
        </h1>
      </div>
    </div>
  );
}
