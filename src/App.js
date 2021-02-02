import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import "./App.css";
import Ground from "./components/Ground/Ground";

function App(props) {
  return (
    <Canvas>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.5} />
      <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
      <Suspense fallback={null}>
        <Ground />
      </Suspense>
      <axesHelper attach={"helper"} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
