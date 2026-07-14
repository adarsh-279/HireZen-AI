const BackgroundEffects = () => {
  return (
    <>
      {/* Top Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-225 h-225 rounded-full bg-green-500/5 blur-[180px] -z-10" />

      {/* Left Glow */}
      <div className="fixed top-[35%] -left-40 w-125 h-125 rounded-full bg-indigo-500/10 blur-[160px] -z-10" />

      {/* Right Glow */}
      <div className="fixed bottom-0 -right-40 w-150 h-150 rounded-full bg-cyan-500/5 blur-[170px] -z-10" />

      {/* Grid */}
      <div
        className="
          fixed inset-0 -z-20
          bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-size-[60px_60px]
        "
      />

      {/* Noise */}
      <div
        className="
          fixed inset-0
          opacity-[0.03]
          pointer-events-none
          -z-10
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-length-[22px_22px]
        "
      />
    </>
  );
};

export default BackgroundEffects;
