import React from "react";

import EvilPlanet from "../EvilPlanet/EvilPlanet";
import AngelPlanet from "../AngelPlanet/AngelPlanet";
import AngelPart from "./AngelPart/AngelPart";
import EvilPart from "./EvilPart/EvilPart"

const Ground = (props) => {
  // const [bumpMap, specMap, normalMap] = useLoader(TextureLoader, [url1, url2, url2])
  // const { camera } = useThree();

  // camera.fov = 20;
  // camera.aspect = window.innerWidth / window.innerHeight;
  // camera.near = 0.1;
  // camera.far = 1000;

  // camera.up.set(0, 0, 1);
  // camera.position.set(100, 100, 100);

  return (
    <group>
      <EvilPlanet />
      <AngelPlanet />

      <AngelPart />
      <EvilPart />
    </group>
  );
};

export default Ground;
