import React from "react";
import { useTexture, Sphere } from "@react-three/drei";

import angel_planet_color from "../../assests/textures/angel_planet/angel_planet_color.jpg";
import angel_planet_disp from "../../assests/textures/angel_planet/angel_planet_disp.png";
import angel_planet_normal from "../../assests/textures/angel_planet/angel_planet_normal.jpg";
import angel_planet_spec from "../../assests/textures/angel_planet/angel_planet_spec.jpg";
import angel_planet_ao from "../../assests/textures/angel_planet/angel_planet_ao.jpg";

const AngelPlanet = (props) => {
  const [
    angelPlanetColor,
    angelPlanetDisp,
    angelPlanetNormal,
    angelPlanetSpec,
    angelPlanetAo,
  ] = useTexture([
    angel_planet_color,
    angel_planet_disp,
    angel_planet_normal,
    angel_planet_spec,
    angel_planet_ao,
  ]);

  return (
    <Sphere position={[-210, 120, 0]}>
      <sphereGeometry args={[30, 32, 32]} />
      <meshPhongMaterial
        map={angelPlanetColor}
        normalMap={angelPlanetNormal}
        bumpMap={angelPlanetDisp}
        bumpScale={2.5}
        specularMap={angelPlanetSpec}
        alphaMap={angelPlanetAo}
      />
    </Sphere>
  );
};

export default AngelPlanet;
