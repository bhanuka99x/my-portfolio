
export default function Home() {
  return (
  <div className="relative w-full h-screen">
    <video src="/videos/hero.mp4" className="absolute top-0 left-0 w-full h-full object-cover opacity-10" autoPlay loop muted></video>
    <div className="relative z-10 flex items-center justify-center h-full">
      {/* Your content here */}
    </div>
  </div>
  );
}