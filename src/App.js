import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls} from "@react-three/drei";
import "./App.css";
import Scene from "./containers/ScenePlane/ScenePlane";

function App() {
  return (
    <Canvas style={{ background: "aqua" }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <axesHelper attach={"helper"} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
