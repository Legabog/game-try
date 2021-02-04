import React from "react";
import { Box, useTexture } from "@react-three/drei";

import angel_part_color from "../../../assests/textures/angel_part/angel_part_color.jpg";
import angel_part_ao from "../../../assests/textures/angel_part/angel_part_ao.jpg";
import angel_part_disp from "../../../assests/textures/angel_part/angel_part_disp.png";
import angel_part_normal from "../../../assests/textures/angel_part/angel_part_normal.jpg";
import angel_part_spec from "../../../assests/textures/angel_part/angel_part_spec.jpg";

const AngelPart = (props) => {
  const [
    angelPartColor,
    angelPartDisp,
    angelPartNormal,
    angelPartSpec,
    angelPartAo,
  ] = useTexture([
    angel_part_color,
    angel_part_disp,
    angel_part_normal,
    angel_part_spec,
    angel_part_ao,
  ]);

  return (
    <Box position={[0, 0, 0]} >
      <meshPhongMaterial
        map={angelPartColor}
        normalMap={angelPartNormal}
        bumpMap={angelPartDisp}
        bumpScale={55}
        specularMap={angelPartSpec}
        aoMap={angelPartAo}
      />
      <cylinderGeometry args={[200, 200, 40, 50, 10, , Math.PI, Math.PI]} />
    </Box>
  );
};

export default AngelPart;
