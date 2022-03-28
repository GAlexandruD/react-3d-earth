import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "./components/Earth";
import TopSection from "./components/TopSection";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-900 relative">
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
      <TopSection />
      <div className="w-screen h-screen bg-slate-900 text-white">
        <h1>Second page</h1>
      </div>
    </div>
  );
}

export default App;
