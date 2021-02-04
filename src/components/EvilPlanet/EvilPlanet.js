import React from "react"
import { useTexture, Sphere } from "@react-three/drei";

import evil_planet_color from "../../assests/textures/evil_planet/evil_planet_color.png";
import evil_planet_disp from "../../assests/textures/evil_planet/evil_planet_disp.png";
import evil_planet_normal from "../../assests/textures/evil_planet/evil_planet_normal.png";
import evil_planet_spec from "../../assests/textures/evil_planet/evil_planet_spec.png";
import evil_planet_occ from "../../assests/textures/evil_planet/evil_planet_occ.png";

const EvilPlanet = (props) => {
  const [
    evilPlanetColor,
    evilPlanetDisp,
    evilPlanetNormal,
    evilPlanetSpec,
    evilPlanetOcc,
  ] = useTexture([
    evil_planet_color,
    evil_planet_disp,
    evil_planet_normal,
    evil_planet_spec,
    evil_planet_occ,
  ]);

  return (
    <Sphere position={[210, 120, 0]}>
      <sphereGeometry args={[30, 32, 32]} />
      <meshPhongMaterial
        map={evilPlanetColor}
        normalMap={evilPlanetNormal}
        bumpMap={evilPlanetDisp}
        bumpScale={1.5}
        specularMap={evilPlanetSpec}
        aoMap={evilPlanetOcc}
      />   
    </Sphere>
  );
};

export default EvilPlanet;
