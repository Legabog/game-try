import { useThree } from "react-three-fiber";
import { useTexture } from "@react-three/drei";
import grass_texture from "../../assests/textures/grass-texture.jpg";

const Ground = (props) => {
  // const { camera } = useThree();
  const texture = useTexture(grass_texture);

  // camera.fov = 20;
  // camera.aspect = window.innerWidth / window.innerHeight;
  // camera.near = 0.1;
  // camera.far = 1000;

  // camera.up.set(0, 0, 1);
  // camera.position.set(100, 100, 100);

  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default Ground;
