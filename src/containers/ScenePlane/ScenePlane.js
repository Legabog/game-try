import { useThree } from "react-three-fiber";
import { Plane, Sphere, useTexture } from "@react-three/drei";
import grass_texture from "../../assests/textures/grass-texture.jpg";

const ScenePlane = (props) => {
  const { camera } = useThree();
  const texture = useTexture(grass_texture);

  camera.fov = 20;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;

  camera.up.set(0, 0, 1);
  camera.position.set(100, 100, 100);

  return (
    <Plane args={[100, 100]}>
      <meshBasicMaterial attach="material" color="green" map={texture}/>
    </Plane>
  );
};

export default ScenePlane;
