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
      <pointLight castShadow intensity={1.5} position={[300, 500, 0]} />
      <Suspense fallback={null}>
        <Ground />
      </Suspense>
      <axesHelper attach={"helper"} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
