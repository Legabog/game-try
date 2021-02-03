import React, { Suspense, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import "./App.css";
import Ground from "./components/Ground/Ground";

function App(props) {
  return (
    <Canvas args={[400, 400]}>
      <Stars />
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
