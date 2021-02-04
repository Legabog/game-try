import React from "react";
import { Box, useTexture } from "@react-three/drei";

import evil_part_color from "../../../assests/textures/evil_part/evil_part_color.jpg";
import evil_part_ao from "../../../assests/textures/evil_part/evil_part_ao.jpg";
import evil_part_disp from "../../../assests/textures/evil_part/evil_part_disp.png";
import evil_part_normal from "../../../assests/textures/evil_part/evil_part_normal.jpg";
import evil_part_spec from "../../../assests/textures/evil_part/evil_part_spec.jpg";

const EvilPart = (props) => {
  const [
    evilPartColor,
    evilPartDisp,
    evilPartNormal,
    evilPartSpec,
    evilPartAo,
  ] = useTexture([
    evil_part_color,
    evil_part_disp,
    evil_part_normal,
    evil_part_spec,
    evil_part_ao,
  ]);

  return (
    <Box position={[0, 0, 0]} >
      <meshPhongMaterial
        map={evilPartColor}
        normalMap={evilPartNormal}
        bumpMap={evilPartDisp}
        bumpScale={55}
        specularMap={evilPartSpec}
        aoMap={evilPartAo}
      />
      <cylinderGeometry args={[200, 200, 40, 50, 10, , Math.PI*2 , Math.PI]} />
    </Box>
  );
};

export default EvilPart;