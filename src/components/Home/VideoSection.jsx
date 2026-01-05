import LightPillar from "../LightPillar";

const VideoSection = () => {
  return (
    <section className="relative w-full">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <LightPillar
          topColor="#0045EF"
          bottomColor="#0045EF"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="normal"
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-center text-white px-6 md:px-12">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide mb-6 drop-shadow-lg">
              Ansely
            </h1>
            <p className="text-xl md:text-2xl font-light drop-shadow-md">
              Digital Growth. <span className="font-semibold">Human Touch.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
