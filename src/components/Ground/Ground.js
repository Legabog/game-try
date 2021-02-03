import * as THREE from "three";
import { useThree } from "react-three-fiber";
import {
  Box,
  ScreenQuad,
  PerspectiveCamera,
  useTexture,
  RoundedBox,
  Sphere,
} from "@react-three/drei";
import ground_stone from "../../assests/textures/ground_stone/ground_stone.jpg";
import ground_stone_normal from "../../assests/textures/ground_stone/ground_stone_normal.jpg";
import ground_stone_height from "../../assests/textures/ground_stone/ground_stone_height.png";

import evil_planet_color from "../../assests/textures/evil_planet/evil_planet_color.png";
import evil_planet_disp from "../../assests/textures/evil_planet/evil_planet_disp.png";
import evil_planet_normal from "../../assests/textures/evil_planet/evil_planet_normal.png";
import evil_planet_spec from "../../assests/textures/evil_planet/evil_planet_spec.png";
import evil_planet_occ from "../../assests/textures/evil_planet/evil_planet_occ.png";

import angel_planet_color from "../../assests/textures/angel_planet/angel_planet_color.jpg";
import angel_planet_disp from "../../assests/textures/angel_planet/angel_planet_disp.png";
import angel_planet_normal from "../../assests/textures/angel_planet/angel_planet_normal.jpg";
import angel_planet_spec from "../../assests/textures/angel_planet/angel_planet_spec.jpg";
import angel_planet_ao from "../../assests/textures/angel_planet/angel_planet_ao.jpg";

const Ground = (props) => {
  // const [bumpMap, specMap, normalMap] = useLoader(TextureLoader, [url1, url2, url2])
  // const { camera } = useThree();
  const [texture1, texture2, dispTexture] = useTexture([
    ground_stone,
    ground_stone_normal,
    ground_stone_height,
  ]);

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

  // camera.fov = 20;
  // camera.aspect = window.innerWidth / window.innerHeight;
  // camera.near = 0.1;
  // camera.far = 1000;

  // camera.up.set(0, 0, 1);
  // camera.position.set(100, 100, 100);

  return (
    <group>
      <Sphere position={[10, 5, 0]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshPhongMaterial
          map={evilPlanetColor}
          normalMap={evilPlanetNormal}
          bumpMap={evilPlanetDisp}
          bumpScale={1.5}
          specularMap={evilPlanetSpec}
          aoMap={evilPlanetOcc}
        />
        <ambientLight intensity={2} />
      </Sphere>

      <Sphere position={[-10, 5, 0]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshPhongMaterial
          map={angelPlanetColor}
          normalMap={angelPlanetNormal}
          bumpMap={angelPlanetDisp}
          bumpScale={2.5}
          specularMap={angelPlanetSpec}
          alphaMap={angelPlanetAo}
        />
      </Sphere>

      <Box args={[400, 400, 40]} position={[0, 0, 0]}>
        <meshPhongMaterial map={texture1} bumpMap={dispTexture} bumpScale={5.5}/>
        <cylinderGeometry height={40} />
      </Box>
    </group>
  );
};

export default Ground;
